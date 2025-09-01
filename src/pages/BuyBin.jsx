
import { useState } from "react";

function BuyBin() {
    const [quantity, setQuantity] = useState(1);
    const pricePerBin = 5000; // Example price per bin
    const totalPrice = quantity * pricePerBin;

    return (
        <div className="p-5 mt-10 max-w-md mx-auto bg-white rounded shadow">
            <h1 className="text-2xl font-bold">Buy Bin</h1>
            <p className="mt-2 text-gray-600">Purchase a new bin for your waste disposal needs.</p>
            <form className="mt-6 space-y-4">
                <div>
                    <label htmlFor="quantity" className="block font-medium mb-1">Quantity</label>
                    <input
                        type="number"
                        id="quantity"
                        min={1}
                        value={quantity}
                        onChange={e => setQuantity(Number(e.target.value))}
                        className="border rounded px-3 py-2 w-full"
                    />
                </div>
                <div className="mt-4">
                    <span className="font-semibold">Total Bins:</span> {quantity}
                </div>
                <div className="mt-2">
                    <span className="font-semibold">Total Price:</span> ₦{totalPrice.toLocaleString()}
                </div>
                <button type="submit" className="mt-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Purchase</button>
            </form>
        </div>
    );

}

export default BuyBin;