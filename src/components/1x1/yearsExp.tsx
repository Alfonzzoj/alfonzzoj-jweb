import { differenceInYears, parse } from "date-fns";

export const YearsExp: React.FC = () => {
  const startDate = parse("12/09/2018", "dd/MM/yyyy", new Date());
  const yearsExp = differenceInYears(new Date(), startDate);

  return (
    <div className="widget  bk-color-purple  experience">
      <h1>+{yearsExp}</h1>
      <p>AÑOS DE EXPERIENCIA</p>
    </div>
  );
};
