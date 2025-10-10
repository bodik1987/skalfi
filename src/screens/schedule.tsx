import Calendar from "../components/calendar";
import { user } from "../seed";

export default function Schedule() {
  const totalDays = 31; // можешь подставлять динамически, если нужно
  const freeDaysCount = user?.freeDays?.length || 0;
  const plannedHours = (totalDays - freeDaysCount) * 8;

  return (
    <div className="wrapper h-full flex flex-col pb-[60px]">
      <Calendar userFreeDays={user?.freeDays || []} />

      <div className="mt-auto bottom-panel">
        <h2>Podsumowanie miesiąca</h2>

        <div className="mt-4 flex justify-between">
          <p>Zaplanowano godzin</p>
          <p>{plannedHours}:00 h</p>
        </div>

        <div className="mt-4 flex justify-between">
          <p>Dni wolnych</p>
          <p>{freeDaysCount}</p>
        </div>
      </div>
    </div>
  );
}
