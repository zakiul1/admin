import Trytr from "./TryTr";

export default function Table({ data }) {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="inline-block w-full p-1.5 align-middle">
          <div className="overflow-hidden rounded-lg border">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold uppercase text-gray-500 "
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold uppercase text-gray-500 "
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold uppercase text-gray-500 "
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-bold uppercase text-gray-500 "
                  >
                    Edit
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-bold uppercase text-gray-500 "
                  >
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <Trytr data={data} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
