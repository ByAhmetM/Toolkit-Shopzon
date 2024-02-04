import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartTotal } from "../redux/cartSlice";
import CartComp from "../components/cart/CartComp";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);
  console.log(carts, totalAmount, itemCount);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);
  return (
    <div>
      {carts?.length > 0 ? (
        <div>
          {carts?.map((cart, i) => (
            <CartComp key={i} cart={cart} />
          ))}
          <div className="flex items-center justify-end text-2xl my-5">
            Toplam Tutar :{" "}
            <span className="font-bold mx-3 text-3xl">
              {" "}
              {totalAmount.toFixed(2)} ₺
            </span>
          </div>
        </div>
      ) : (
        <div className="text-4xl flex items-center justify-center h-screen text-red-500 font-bold">
          Kartınız boş...
        </div>
      )}
    </div>
  );
};

export default Cart;
