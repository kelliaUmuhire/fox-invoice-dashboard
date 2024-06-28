export default function Invoices() {
  return (
    <div className="border-1.5 border-black shadow-main shadow-black p-5 rounded-xl mt-6">
      <h2 className="text-xl font-bold mb-4">New Invoice</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="font-semibold text-sm text-left border-b border-b-gray-200">
            <th className="py-2 pl-3">Invoice Name</th>
            <th>Date</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-b-gray-200">
            <td className="py-2 pl-3">INV1359874830</td>
            <td className="text-sm">Sep 01, 2022</td>
            <td className="text-sm font-medium">$ 1,800</td>
            <td>
              <img
                src="/images/chevron-down.svg"
                alt="Down"
                className="-rotate-90 w-2.5"
              />
            </td>
          </tr>
          <tr className="border-b border-b-gray-200">
            <td className="py-2 pl-3">INV1357902468</td>
            <td className="text-sm">Aug 30, 2022</td>
            <td className="text-sm font-medium">$ 2,800</td>
            <td>
              <img
                src="/images/chevron-down.svg"
                alt="Down"
                className="-rotate-90 w-2.5"
              />
            </td>
          </tr>
          <tr className="border-b border-b-gray-200">
            <td className="py-2 pl-3">INV3525893010</td>
            <td className="text-sm">Aug 29, 2022</td>
            <td className="text-sm font-medium">$ 800</td>
            <td>
              <img
                src="/images/chevron-down.svg"
                alt="Down"
                className="-rotate-90 w-2.5"
              />
            </td>
          </tr>
          <tr>
            <td className="py-2 pl-3">INV2983649020</td>
            <td className="text-sm">Aug 29, 2022</td>
            <td className="text-sm font-medium">$ 700</td>
            <td>
              <img
                src="/images/chevron-down.svg"
                alt="Down"
                className="-rotate-90 w-2.5"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
