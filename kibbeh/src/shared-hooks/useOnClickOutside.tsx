import { useEffect, RefObject } from "react";

export const useOnClickOutside = (ref: RefObject<any>, handler: Function) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      console.log(ref.current, event.target);
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};
