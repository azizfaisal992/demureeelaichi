import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

function CartTotal() {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
  const subtotal = getCartAmount();
  const total = subtotal === 0 ? 0 : subtotal + Number(delivery_fee);

  return (
    <div className="w-full max-w-md mx-auto mt-8 bg-[#FAF3E0] shadow-lg rounded-2xl p-6 border border-gray-100">
      <div className="text-2xl mb-4">
        <Title text1="CART" text2="TOTALS" />
      </div>

      <div className="flex flex-col gap-4 text-sm text-gray-800">
        <div className="flex justify-between items-center">
          <p className="text-base">Subtotal</p>
          <p className="text-base font-semibold">{currency} {subtotal.toFixed(2)}</p>
        </div>
        <hr className="border-gray-300" />
        <div className="flex justify-between items-center">
          <p className="text-base">Shipping Fee</p>
          <p className="text-base font-semibold">{currency} {Number(delivery_fee).toFixed(2)}</p>
        </div>
        <hr className="border-gray-300" />
        <div className="flex justify-between items-center mt-2">
          <p className="text-lg font-semibold">Total</p>
          <p className="text-lg font-bold text-black">{currency} {total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default CartTotal;
