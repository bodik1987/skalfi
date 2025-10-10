import Calendar from "../components/calendar";
import { user } from "../seed";

export default function Schedule() {
  const totalDays = 31; // можешь подставлять динамически, если нужно
  const freeDaysCount = user?.freeDays?.length || 0;
  const plannedHours = (totalDays - freeDaysCount) * 8;

  return (
    <div className="wrapper flex flex-col pb-[60px] min-h-[calc(100vh-60px)]">
      <Calendar userFreeDays={user?.freeDays || []} />

      <div className="wrapper mt-auto px-4 py-4 bg-app-green text-white rounded-t-2xl w-full z-10">
        <h2 className="text-lg font-semibold mb-2">Podsumowanie miesiąca</h2>

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
