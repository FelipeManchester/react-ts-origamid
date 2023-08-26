import { useEffect, useState } from "react";

const useLocalStorage = (key: string, initial: string) => {
  const [state, setState] = useState(() => {
    const local = window.localStorage.getItem(key);
    return local ? local : initial;
  });

  useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [state, key]);

  return [state, setState] as const;
};

export default useLocalStorage;
