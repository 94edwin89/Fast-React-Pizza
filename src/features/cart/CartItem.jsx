import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import DeleteItems from "./DeleteItems";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getCurrentQuantityById } from "./cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="sm:mb-0 mb-1">
        {quantity}&times; {name}
      </p>
      <div className="item-center flex justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>

        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />
        <DeleteItems pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
