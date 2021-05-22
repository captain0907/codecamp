import {useEffect, useRef} from 'react';

export default function useEffectPage() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return <input type="text" ref={inputRef} />;
}
