import { EffectCallback, useEffect, useRef } from "react";

export default function useMount(effect: EffectCallback) {
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      effect();
      firstRender.current = false;
    }
  }, []);
}