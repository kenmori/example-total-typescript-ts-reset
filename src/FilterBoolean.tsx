import * as React from 'react';
import '@total-typescript/ts-reset/filter-boolean';

export default function FilterBoolean() {
  const numsIncludeNullish = [1, null, undefined];
  const filterBoolean = numsIncludeNullish.filter(Boolean); // number[]
  return (
    <div>
      <h2>filter boolean</h2>
      {filterBoolean.map((e) => e)}
    </div>
  );
}
