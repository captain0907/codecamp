import {useEffect, useState} from 'react';

export default function useEffectInfiniteLoop() {
  const [state, setState] = useState(true);

  useEffect(() => {
    setState((prev) => !prev);
  }, [state]);

  return <div></div>;
}
