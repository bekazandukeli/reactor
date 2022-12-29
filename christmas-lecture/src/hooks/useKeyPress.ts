import { useEffect, useState } from "react";
import useMount from "./useMount";

export default function useKeyPress(targetKey: string) {
  const [keyPressed, setKeyPressed] = useState(false);

  function handleDown({ key }: KeyboardEvent) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  function handleUp({ key }: KeyboardEvent) {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleDown);
    window.addEventListener("keyup", handleUp);

    return () => {
      window.removeEventListener("keydown", handleDown);
      window.removeEventListener("keyup", handleUp);
    };
  }, []);

  // პრინციპში,ჩვენი ჰუკის გამოყენებაც შეგვიძლია useEffect-ის მაგრიერ
  // useMount(() => {
  //   window.addEventListener("keydown", handleDown);
  //   window.addEventListener("keyup", handleUp);

  //   return () => {
  //     window.removeEventListener("keydown", handleDown);
  //     window.removeEventListener("keyup", handleUp);
  //   };
  // });

  return keyPressed;
}