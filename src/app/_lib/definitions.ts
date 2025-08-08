import z from 'zod';

export type CreateResidentFormState =
  | {
      errors?: {
        name?: string;
        age?: string;
        title?: string;
        hometown?: string;
      };
      message?: string;
    }
  | undefined;

export const ResidentSchema = z.object({
  name: z
    .string({ error: 'Name is required.' })
    .min(2, { error: 'Please enter a valid name.' }),
  age: z.nullable(
    z.coerce.number().positive({ error: 'Please enter a valid age.' })
  ),
  title: z
    .string({ error: 'Title is required.' })
    .min(2, { error: 'Please enter a valid title.' }),
  hometown: z.nullable(
    z.string().min(2, { error: 'Please enter a valid city name.' })
  ),
});
