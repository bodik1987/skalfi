import { useUserStore } from "../store";

export default function Root() {
  const { user, loading } = useUserStore();

  return (
    <div className="p-2 flex flex-col items-center">
      <div className="wrapper">
        {loading ? (
          <div className="w-full text-gray-500 animate-pulse">Loading...</div>
        ) : (
          <div className="grid gap-4">
            <div className="bg-white shadow p-2 border border-gray-200">
              <h2 className="font-semibold text-lg">{user?.name}</h2>
            </div>
          </div>
        )}
        <div className="wrapper fixed bottom-[60px] inset-x-0 p-6 bg-app-green text-white rounded-t-2xl w-full z-10">
          Urlop
        </div>
      </div>
    </div>
  );
}
