import {useCallback, useMemo, useState} from 'react';

export default function useCallbackPage() {
  const [state, setState] = useState(false);

  const handleTestUseCallback = useCallback(() => {
    console.log('prevState', state);
    setState((prev) => !prev);
  }, []);

  const handleTestUseMemo = useMemo(() => {
    const aaa = Math.random();
    return aaa;
  }, []);
  console.log(handleTestUseMemo);

  return <button onClick={() => handleTestUseCallback()}>클릭하세요!</button>;
}
