import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseQuantityItem, increaseQuantityItem } from "./cartSlice";

function UpdateItemQuantity({ pizzaId , currentQuantity}) {
  const dispatch = useDispatch();

  return (
    <div className="md:gap-3 flex items-center gap-2">

      <Button
        type="round"
        onClick={() => dispatch(decreaseQuantityItem(pizzaId))}
      >
        -
      </Button>
<span className="text-sm font-medium">{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseQuantityItem(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
