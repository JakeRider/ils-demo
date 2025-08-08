'use server';

import {
  ResidentSchema,
  type CreateResidentFormState,
} from '@/app/_lib/definitions';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import z from 'zod';
import { residents } from '@/db/schema';
import { drizzle } from 'drizzle-orm/libsql';

const db = drizzle(process.env.DB_FILE_NAME!);

export async function createResident(
  state: CreateResidentFormState,
  formData: FormData
): Promise<CreateResidentFormState> {
  const parseField = (field: unknown) => (field === '' ? null : field);

  const validatedFields = ResidentSchema.safeParse({
    name: parseField(formData.get('name')),
    age: parseField(formData.get('age')),
    title: parseField(formData.get('title')),
    hometown: parseField(formData.get('hometown')),
  });

  if (!validatedFields.success) {
    const errors = z.flattenError(
      validatedFields.error as z.ZodError
    ).fieldErrors;

    console.error(errors);

    return { errors };
  }

  let resident;

  try {
    [resident] = await db
      .insert(residents)
      .values(validatedFields.data)
      .returning({ id: residents.id });
  } catch (error) {
    console.error(error);

    return { message: 'Database Error: Could not create resident.' };
  }

  revalidatePath('/residents');
  redirect(`/residents/${resident.id}`);
}
