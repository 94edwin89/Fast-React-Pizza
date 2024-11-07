import { formatCurrency } from "../../utils/helpers";
import DeleteItems from "./DeleteItems";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="sm:mb:0 mb-1">
        {quantity}&times; {name}
      </p>
      <div className="item-center flex justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <DeleteItems pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
