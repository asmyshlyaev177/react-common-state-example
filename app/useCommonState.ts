import React from 'react';

const subscribers: (() => void)[] = [];
const stateMap = new WeakMap<object, object>();

export function useCommonState<T>(stateObj: T) {
  const [state, _setState] = React.useState(() => {
    return stateMap.get(stateObj as object) || stateObj;
  });

  React.useInsertionEffect(() => {
    if (!stateMap.get(stateObj as object)) {
      stateMap.set(stateObj as object, stateObj as object);
    }

    const cb = () => {
      const val = stateMap.get(stateObj as object);
      _setState(val!);
    };

    subscribers.push(cb);

    return () => {
      subscribers.slice(subscribers.indexOf(cb), 1);
    };
  }, []);

  const setState = React.useCallback((newVal: object) => {
    stateMap.set(stateObj as object, newVal);
    subscribers.forEach((sub) => sub());
  }, []);

  return { state: state as T, setState };
}
