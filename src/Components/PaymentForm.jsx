import React from "react";
import { InputField } from "./InputField";

export function PaymentForm({ form, onChange }) {
  return (
    <div className="space-y-5 w-full">
      <InputField
        label="Cardholder Name"
        type="text"
        name="cardName"
        value={form.cardName || ""}
        onChange={onChange}
        autoComplete="cc-name"
      />
      <InputField
        label="Card Number"
        type="text"
        name="cardNumber"
        value={form.cardNumber || ""}
        onChange={onChange}
        autoComplete="cc-number"
        placeholder="1234 5678 9012 3456"
        maxLength={19}
      />
      <div className="flex gap-4">
        <InputField
          label="Expiry Date"
          type="text"
          name="expiry"
          value={form.expiry || ""}
          onChange={onChange}
          autoComplete="cc-exp"
          placeholder="MM/YY"
          maxLength={5}
        />
        <InputField
          label="CVV"
          type="password"
          name="cvv"
          value={form.cvv || ""}
          onChange={onChange}
          autoComplete="cc-csc"
          placeholder="123"
          maxLength={4}
        />
      </div>
    </div>
  );
}
