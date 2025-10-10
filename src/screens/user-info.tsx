import { AppInfoIcon, FirmIcon, ScheduleIcon } from "../components/icons";
import { user } from "../seed";

export default function UserInfo() {
  return (
    <section className="bg-white">
      <div className="wrapper p-4">
        <h1 className="text-center">{user.name}</h1>

        <div className="h-px w-full bg-app-gray my-4" />

        <div className="flex flex-col gap-4">
          <FirmItem title="Nazwa firmy" info={user?.firm.title} />
          <FirmItem title="Jednostka organizacyjna" info={user?.firm.section} />
          <FirmItem title="Stanowisko" info={user?.firm.position} />
        </div>

        <div className="h-px w-full bg-app-gray/50 my-4" />

        <div className="flex flex-col gap-4">
          <div className="flex gap-4 justify-between text-lg">
            <div className="flex items-center gap-2">
              <ScheduleIcon /> <span>Data zatrudnienia</span>
            </div>
            <p>{user?.startDate}</p>
          </div>
          <div className="flex gap-4 justify-between text-lg">
            <div className="flex items-center gap-2">
              <AppInfoIcon /> <span>ID</span>
            </div>
            <p>{user?.id}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FirmItem({
  title,
  info,
}: {
  title: string;
  info: string | undefined;
}) {
  return (
    <div className="flex gap-4 justify-between text-lg">
      <div className="flex items-center gap-2">
        <FirmIcon /> <span>{title}</span>
      </div>
      <p>{info}</p>
    </div>
  );
}
