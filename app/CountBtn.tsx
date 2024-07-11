'use client';
import { useCommonState } from './useCommonState';
import { state as myState } from './state';

export const CountBtn = () => {
  const { state, setState } = useCommonState<typeof myState>(myState);

  return (
    <button
      onClick={() => setState({ count: state.count + 1 })}
      className="p-2 border"
    >
      +
    </button>
  );
};
