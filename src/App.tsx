import '@total-typescript/ts-reset';
import * as React from 'react';
import './style.css';
import JSONUnknownExample from './JSONUnknownExample';
import FilterBoolean from './FilterBoolean';

export default function App() {
  return (
    <div>
      <JSONUnknownExample />
      <FilterBoolean />
    </div>
  );
}
