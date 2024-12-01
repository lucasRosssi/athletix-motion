import {Form} from '@remix-run/react';

export function LoginForm() {
  return (
    <Form method="post" action="/authorize">
      <button>Login</button>
    </Form>
  );
}
