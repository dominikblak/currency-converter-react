import { useCurrentDate } from "./useCurrentDate";
import { LocalDate } from "./styled";

const Clock = () => {
  const date = useCurrentDate();

  const formattedDate = date.toLocaleDateString(undefined, {
    day: "numeric",
    weekday: "long",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  return <LocalDate>Dzisiaj jest {formattedDate}</LocalDate>;
};

export default Clock;
