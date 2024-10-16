import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="py-3 px-4 uppercase bg-yellow-500 border-b border-stone-200 ">
      <Link to="/" className="tracking-widest">
        Fast React Pizza .co
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
