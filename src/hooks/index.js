import { useEffect, useMemo, useState } from 'react';

export function useRxStore(store, initialState) {
  const [value, setValue] = useState( initialState );

  useEffect(() => {
    const subscription$ = store['subscribe'](setValue);

    return () => {
      subscription$.unsubscribe();
    }
    // eslint-disable-next-line
  }, []);

  return useMemo(() => value, [value]);
}

export default useRxStore;
