import { useCallback, useEffect, useState } from "react";

export const useTime = () => {
  const [time, setTime] = useState<{
    h?: string;
    m?: string;
    s?: string;
  }>({});

  const getTime = useCallback(() => {
    const timeline = Date.now();
    const h = new Date(timeline).getHours().toString().padStart(2, "0");
    const m = new Date(timeline).getMinutes().toString().padStart(2, "0");
    const s = new Date(timeline).getSeconds().toString().padStart(2, "0");
    setTime({ h, m, s });
    requestAnimationFrame(getTime);
  }, []);

  useEffect(() => {
    const requestAnimationID = requestAnimationFrame(getTime);
    return () => {
      cancelAnimationFrame(requestAnimationID);
    };
  }, [getTime]);

  return { time };
};
