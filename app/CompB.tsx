'use client';

import { useCommonState } from './useCommonState';
import { state as myState } from './state';

export const CompB = () => {
  const { state } = useCommonState<typeof myState>(myState);

  return (
    <div>
      Component B <div>Count: {state.count}</div>
    </div>
  );
};
