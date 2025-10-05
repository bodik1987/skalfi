import { useUserStore } from "../store";

export default function Root() {
  const { user, loading } = useUserStore();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);

  //     const servers = [
  //       {
  //         name: "Internet Server",
  //         url: "https://jsonplaceholder.typicode.com/todos/1",
  //       },
  //       { name: "Local Server", url: "http://localhost:3001/test" },
  //     ];

  //     const results: ServerResponse[] = await Promise.all(
  //       servers.map(async (s) => {
  //         try {
  //           const res = await fetch(s.url);
  //           const json = await res.json();
  //           return { source: s.name, data: json };
  //         } catch (err: any) {
  //           return { source: s.name, data: null, error: err.message };
  //         }
  //       })
  //     );

  //     setResponses(results);
  //     setLoading(false);
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="p-2 flex flex-col items-center">
      <div className="wrapper">
        {loading ? (
          <div className="w-full text-gray-500 animate-pulse">Loading...</div>
        ) : (
          <div className="grid gap-4">
            <div className="bg-white shadow p-2 border border-gray-200">
              <h2 className="font-semibold text-lg">{user?.name}</h2>
              {/* {res.error ? (
                  <p className="text-red-600">Error: {res.error}</p>
                ) : (
                  <pre className="text-sm bg-gray-50 p-2 rounded overflow-x-auto">
                    {JSON.stringify(res.data, null, 2)}
                  </pre>
                )} */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
