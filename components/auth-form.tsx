'use client';

import { signup } from '@/actions/auth-actions';
import Link from 'next/link';
import { useActionState } from 'react';

class User {
  email = '';
  password = '';
}

export default function AuthForm() {
  const [formState, formAction] = useActionState(signup, null)

  return (
    <form id="auth-form" action={formAction}>
      <p>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </p>
      {
        formState?.errors && <ul id="form-errors">
          {Object.entries(formState?.errors ?? {}).map(([key, value])=> <li key={key}>{value}</li>)}
        </ul>
      }
      <p>
        <button type="submit">
          Create Account
        </button>
      </p>
      <p>
        <Link href="/">Login with existing account.</Link>
      </p>
    </form>
  );
}
