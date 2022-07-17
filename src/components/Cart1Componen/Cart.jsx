import CartItem from "./CartItem";
import { useContext } from "react";
import CartContext from "../../Context1/Cart/CartContext";
const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="my-36 ">
      <h1 className="text-white text-2xl ml-12">
        Shopping Cart
        <span>({cartItems.length})</span>
      </h1>
      {/* If cart is empty, display message, and if not, display each cart
            Item in cart: {cartItems.length} */}
      {cartItems.length === 0 ? (
        <h4 style={{}}>Cart is empty</h4>
      ) : (
        <>
          {cartItems.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </>
      )}
    </div>
  );
};

export default Cart;
