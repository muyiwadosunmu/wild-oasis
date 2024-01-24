import {useRef, useEffect} from 'react';

export function useOutsideClick(handler, listenCapturing = true) {
  
    const ref = useRef();

    useEffect(
      function () {
        function handleClick(e) {
          if (ref.current && !ref.current.contains(e.target)) {
            console.log("click outside");
            handler();
          }
        }
  
        // We added true because because we don't want the event to bubble up,**CAPTURING PHASE
        document.addEventListener("click", handleClick, listenCapturing);
        return () => document.removeEventListener("click", handleClick, listenCapturing);
      },
      [handler, listenCapturing]
    );
  return ref;
}

