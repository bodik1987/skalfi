import { AppInfoIcon, FirmIcon, ScheduleIcon } from "../components/icons";
import { useUserStore } from "../store";

export default function UserInfo() {
  const { user, loading } = useUserStore();
  return (
    <div className="bg-white p-4 rounded-md">
      <h1 className="text-center">
        {loading ? <p>Loading...</p> : !user ? <p>No user</p> : user.name!}
      </h1>

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
