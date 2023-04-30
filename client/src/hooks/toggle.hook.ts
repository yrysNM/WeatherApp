import { useCallback, useEffect, useRef, useState } from "react";

const useToggle = (initialState: boolean): [boolean, () => void] => {
  const [isToggled, setIsToggled] = useState(initialState);
  const isToggledRef = useRef(isToggled);

  // put [isToggledRef, setIsToggled] into the useCallback's dependencies array
  // these values never change so the calllback is not going to be ever re-created
  const toggle = useCallback(
    () => setIsToggled(!isToggledRef.current),
    [isToggledRef, setIsToggled]
  );

  // keep the value in isToggledRef actual
  // when isToggled changes, isToggledRef is upadated accordingly
  useEffect(() => {
    isToggledRef.current = isToggled;
  }, [isToggled]);

  return [isToggled, toggle];
};

export { useToggle };
