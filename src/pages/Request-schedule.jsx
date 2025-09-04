import { useState } from "react";
import { InputField } from "../Components/InputField";
import { PaymentForm } from "../Components/PaymentForm";
import { Icon } from "@iconify/react";

function RequestSchedule() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    address: "",
    date: "",
    time: "",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePrev = (e) => {
    e.preventDefault();
    setStep(1);
  };

  const handlePay = (e) => {
    e.preventDefault();
    // Payment logic here
    alert("Payment submitted!");
  };

  return (
  <div className="p-5 ml-3 mt-15 max-w-xl mx-auto flex flex-col gap-6 w-full items-start font-normal">
      <h1 className="text-2xl md:text-3xl font-medium text-gray-900 w-full">Request Collection</h1>
      <p className="text-gray-600">Fill in your address and preferred date/time for waste collection.</p>
      <div className="w-full min-h-[350px] overflow-hidden relative max-w-xl mx-auto">
        <div className={`w-full p-0 transition-transform duration-700 absolute top-0 left-0 ${step === 1 ? 'translate-x-0 z-10' : '-translate-x-full z-0'}`}
          style={{ minHeight: 350 }}>
          <form className="space-y-5 w-full" onSubmit={handleNext}>
            <InputField
              label="Address"
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              autoComplete="street-address"
            />
            <InputField
              label="Preferred Date"
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
            />
            <InputField
              label="Preferred Time"
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
            />
            <div className="flex justify-end">
              <button type="submit" className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition min-w-[120px] flex items-center gap-2">
                Next
                <Icon icon="mdi:arrow-right" className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
        <div className={`w-full p-0 transition-transform duration-700 absolute top-0 left-0 ${step === 2 ? 'translate-x-0 z-10' : 'translate-x-full z-0'}`}
          style={{ minHeight: 350 }}>
          <form className="space-y-5 w-full" onSubmit={handlePay}>
            <PaymentForm form={form} onChange={handleChange} />
            <div className="flex justify-between gap-4">
              <button onClick={handlePrev} className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-300 transition min-w-[120px] flex items-center gap-2">
                <Icon icon="mdi:arrow-left" className="w-5 h-5" />
                Previous
              </button>
              <button type="submit" className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition min-w-[120px] flex items-center gap-2">
                Pay
                <Icon icon="mdi:credit-card" className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RequestSchedule;
