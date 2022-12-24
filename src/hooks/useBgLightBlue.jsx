import { useEffect } from "react";

export const useBgLightBlue = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "lightBlue";
    return () => {
      // clean up function
      document.body.style.backgroundColor = "";
    };
  }, []);
};