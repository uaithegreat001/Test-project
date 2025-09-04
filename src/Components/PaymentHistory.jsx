import React, { useState } from "react";

const mockPayments = [
  { id: 1, date: "2025-08-15", amount: 5000, status: "Successful" },
  { id: 2, date: "2025-07-10", amount: 10000, status: "Successful" },
  { id: 3, date: "2025-06-05", amount: 5000, status: "Failed" },
];

function PaymentHistory() {
  const [payments] = useState(mockPayments);

  return (
    <div className="p-5 ml-3 mt-15 max-w-full mx-auto flex flex-col gap-6 w-full items-start font-normal">
      <h2 className="text-1xl md:text-2xl font-normal text-gray-200 w-full">Payment History</h2>
      <div className="overflow-x-auto w-full">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-gray-700">Date</th>
              <th className="px-4 py-2 text-left text-gray-700">Amount</th>
              <th className="px-4 py-2 text-left text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id} className="border-t">
                <td className="px-4 py-2">{payment.date}</td>
                <td className="px-4 py-2">₦{payment.amount.toLocaleString()}</td>
                <td className={`px-4 py-2 font-semibold ${payment.status === "Successful" ? "text-emerald-700" : "text-red-500"}`}>{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PaymentHistory;
