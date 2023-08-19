import * as React from 'react';
import '@total-typescript/ts-reset/json-parse';
import * as z from 'zod';

const schema = z.object({
  name: z.string(),
  age: z.number(),
  address: z.string(),
});

type Schema = z.infer<typeof schema>;

const isValid = (values: unknown): values is Schema => {
  return schema.safeParse(values).success;
};

export default function JSONUnknownExample() {
  const data = {
    name: 'aaa',
    age: 20,
    address: 'Tokyo',
  };
  const json = JSON.parse(JSON.stringify(data));

  if (!isValid(json)) {
    throw new Error('');
  }
  return (
    <>
      <h2>json parse change unkown</h2>
      <div>{json.name}</div>
      <hr />
    </>
  );
}
