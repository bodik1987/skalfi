type CalendarProps = {
  userFreeDays: string[]; // массив строк в формате "DD-MM-YYYY"
};

export default function Calendar({ userFreeDays }: CalendarProps) {
  const weekdays = ["pon.", "wt.", "śr.", "czw.", "pt.", "sob.", "niedz."];

  // Октябрь 2025
  const totalDays = 31;
  const offset = 2; // 1 октября — среда
  const daysArray = Array.from({ length: totalDays }, (_, i) => i + 1);

  // Определяем сегодняшний день в октябре 2025
  const today = new Date();
  const isThisMonth = today.getFullYear() === 2025 && today.getMonth() === 9; // 0=styczeń, 9=październik
  const todayDay = isThisMonth ? today.getDate() : undefined;

  const isFreeDay = (day: number) => {
    const dateStr = `${String(day).padStart(2, "0")}-10-2025`;
    return userFreeDays.includes(dateStr);
  };

  return (
    <div className="bg-app-gray text-white p-4">
      <h2 className="text-xl font-bold text-center">Październik 2025</h2>

      <div className="mt-2 grid grid-cols-7 gap-2 text-center">
        {weekdays.map((day) => (
          <div key={day} className="text-gray-400 font-medium">
            {day}
          </div>
        ))}

        {/* Пустые ячейки перед 1 октября */}
        {Array.from({ length: offset }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}

        {/* Дни месяца */}
        {daysArray.map((day) => {
          const free = isFreeDay(day);
          const isSelected = day === todayDay;

          return (
            <div
              key={day}
              className={`flex flex-col items-center py-2 cursor-pointer ${
                isSelected ? "bg-white/10 rounded-md" : ""
              }`}
            >
              <span className={`${isSelected ? "font-bold" : ""}`}>{day}</span>
              <div
                className={`w-2 h-2 rounded-full mt-1 ${
                  free ? "bg-red-500" : "bg-green-500"
                }`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
