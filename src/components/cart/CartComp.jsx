import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";

const CartComp = ({ cart }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between my-10">
      <img
        className="w-[150px] h-[150px] object-cover"
        src={cart?.image}
        alt=""
      />
      <div>
        <div className="text-xl w-[450px] ">{cart?.title}</div>
        <div>{cart?.description}</div>
      </div>
      <div className="font-bold text-2xl">
        {cart?.price} <span> ₺ </span> <span>({cart?.quantity})</span>
      </div>
      <div
        onClick={() => dispatch(removeFromCart(cart?.id))}
        className="bg-red-500 text-2xl cursor-pointer rounded-md text-white w-[150px] h-16 flex items-center justify-center"
      >
        Ürünü Sil
      </div>
    </div>
  );
};

export default CartComp;
