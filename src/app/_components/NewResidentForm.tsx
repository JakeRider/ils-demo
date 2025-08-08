'use client';

import { useActionState } from 'react';
import { createResident } from '@/app/_lib/actions';
import styles from '@/app/_components/NewResidentForm.module.css';

export default function NewResidentForm() {
  const [state, action, pending] = useActionState(createResident, undefined);

  return (
    <form action={action} className={styles.container}>
      <fieldset>
        <label htmlFor="name">
          Name *
          <input id="name" name="name" type="text" autoComplete="name" />
          {state?.errors?.name && <small>{state.errors.name}</small>}
        </label>
        <label htmlFor="age">
          Age
          <input id="age" name="age" type="number" />
          {state?.errors?.age && <small>{state.errors.age}</small>}
        </label>
        <label htmlFor="title">
          Title *
          <input id="title" name="title" type="text" />
          {state?.errors?.title && <small>{state.errors.title}</small>}
        </label>
        <label htmlFor="hometown">
          Hometown
          <input id="hometown" name="hometown" type="text" />
          {state?.errors?.name && <small>{state.errors.hometown}</small>}
        </label>
      </fieldset>

      <input type="submit" value="Submit" disabled={pending} />
      {state?.message && <small>{state.message}</small>}
    </form>
  );
}
