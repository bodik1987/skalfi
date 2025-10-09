import Calendar from "../components/calendar";
import { useUserStore } from "../store";

export default function Schedule() {
  const { user } = useUserStore();

  const totalDays = 31; // можешь подставлять динамически, если нужно
  const freeDaysCount = user?.freeDays?.length || 0;
  const plannedHours = (totalDays - freeDaysCount) * 8;

  return (
    <section>
      {/* Верхняя панель */}
      <div className="bg-app-green w-full py-4 shadow-md">
        <h2 className="text-center text-white font-semibold text-lg">
          Harmonogram
        </h2>
      </div>

      {/* Контент */}
      <div className="flex flex-col min-h-[calc(100vh-120px)]">
        <Calendar userFreeDays={user?.freeDays || []} />

        {/* Нижний блок с итогами */}
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
    </section>
  );
}
