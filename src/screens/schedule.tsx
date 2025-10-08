import Calendar from "../components/calendar";
import { useUserStore } from "../store";

export default function Schedule() {
  const { user } = useUserStore();
  return (
    <section>
      <div className="bg-app-green w-full py-4 shadow-md">
        <h2 className="text-center text-white">Harmonogram</h2>
      </div>

      <Calendar
        userFreeDays={user?.freeDays || []} // массив строк "DD-MM-YYYY"
      />
    </section>
  );
}
