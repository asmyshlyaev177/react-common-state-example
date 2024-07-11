import React from 'react';

const subscribers: (() => void)[] = [];
const stateMap = new WeakMap<object, object>();

export function useCommonState<T extends object>(stateObj: T) {
  const [state, _setState] = React.useState<typeof stateObj>(() => {
    const val = stateMap.get(stateObj) as T;
    if (!val) {
      stateMap.set(stateObj, stateObj)
      return stateObj
    }
    return val
  });

  React.useInsertionEffect(() => {
    const cb = () => {
      const val = stateMap.get(stateObj);
      _setState(val as T);
    };

    subscribers.push(cb);

    return () => {
      subscribers.slice(subscribers.indexOf(cb), 1);
    };
  }, []);

  const setState = React.useCallback((newVal: object) => {
    stateMap.set(stateObj, newVal);
    subscribers.forEach((sub) => sub());
  }, []);

  return { state, setState };
}
