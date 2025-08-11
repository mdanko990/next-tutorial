'use client';

import { auth } from '@/actions/auth-actions';
import Link from 'next/link';
import { useActionState } from 'react';

export default function AuthForm({mode}: any) {
  const [formState, formAction] = useActionState(auth.bind(null, mode), null)

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
          {mode === "login" ? "Login" : 'Create Account'}
        </button>
      </p>
      <p>
        {mode === "login" && <Link href='/?mode=signup'>Create an account.</Link>}
        {mode === "signup" && <Link href='/?mode=login'>Login with exiscting account.</Link>}
      </p>
    </form>
  );
}
