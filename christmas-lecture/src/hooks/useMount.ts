import { useEffect, useRef, EffectCallback } from "react";

export default function useMount(effect: EffectCallback) {
  const firstRender = useRef(true);
  const unsubscriberRef = useRef<Function | null>(null);
  const firstUnsubscribe = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      // ინახავს unsubscribe-ს, ანუ useMount-სთვის მიწოდებული ფუნქციის
      // მიერ და-return-ებული ფუნქციის reference-ს.
      unsubscriberRef.current = effect() as Function; 
      firstRender.current = false;
    }

    return () => {
      // უზრუნველყოფს რომ unsibscribe არ გაეშვას პირველ ჯერზე.
      if (!firstUnsubscribe.current) { 
        unsubscriberRef.current?.();
      }
      firstUnsubscribe.current = false;
    }
  }, []);
}