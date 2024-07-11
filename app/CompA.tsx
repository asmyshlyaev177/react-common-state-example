'use client';

import { useCommonState } from './useCommonState';
import { state as myState } from './state';

export const CompA = () => {
  const { state } = useCommonState(myState);

  return (
    <div>
      Component A<div>Count: {state.count}</div>
    </div>
  );
};
