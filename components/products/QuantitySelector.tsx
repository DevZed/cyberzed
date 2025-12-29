"use client";

import { useState, useMemo } from "react";

type Props = {
  min?: number;
  max?: number;
  defaultValue?: number;
  pricePerItem: number;
  label?: string;
  ctaLabel?: string;
  productId: string;
};

export default function QuantitySelector({
  min = 1,
  max = 1000,
  defaultValue = 1,
  pricePerItem,
  label = "Quantity",
  ctaLabel = "Checkout",
}: Props) {
  const [quantity, setQuantity] = useState(defaultValue);

  const total = useMemo(
    () => (quantity * pricePerItem).toFixed(2),
    [quantity, pricePerItem]
  );

  const handleChange = (value: number) => {
    if (value < min) value = min;
    if (value > max) value = max;
    setQuantity(value);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value || min);
    if (Number.isNaN(v)) return;
    handleChange(v);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <label className="text-xs text-gray-300">{label}</label>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => handleChange(quantity - 1)}
            className="h-9 w-9 rounded-lg border border-[#1f2937] bg-black/40 text-sm hover:border-emerald-500"
          >
            −
          </button>
          <input
            type="number"
            min={min}
            max={max}
            value={quantity}
            onChange={handleInput}
            className="w-full rounded-lg bg-black/40 border border-[#1f2937] px-3 py-2 text-sm text-white outline-none focus:border-emerald-500"
          />
          <button
            type="button"
            onClick={() => handleChange(quantity + 1)}
            className="h-9 w-9 rounded-lg border border-[#1f2937] bg-black/40 text-sm hover:border-emerald-500"
          >
            +
          </button>
        </div>
        <p className="text-[11px] text-gray-500">
          Min {min} / Max {max}
        </p>
      </div>

      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-300">Total</span>
        <span className="text-lg font-semibold text-emerald-400">
          ${total}
        </span>
      </div>

      <button
        type="button"
        className="w-full rounded-lg bg-emerald-500 py-2 text-sm font-medium text-black hover:bg-emerald-400 transition-colors"
        // هنا لاحقاً تربطه بـ PayPal أو Supabase
        onClick={() => {
          console.log("Checkout", { quantity, pricePerItem });
        }}
      >
        {ctaLabel}
      </button>
    </div>
  );
}
