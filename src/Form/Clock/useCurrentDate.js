import { useState, useEffect } from "react";
export const useCurrentDate = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const intervalDate = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalDate);
    };
  }, []);
  return date;
};
