import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const isEmpty = cartItems.length === 0;
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>

      {!isEmpty ? (
        cartItems.map((product) => (
          <ul key={product.id}>
            <CartItem
              item={{
                key: product.id,
                id: product.id,
                title: product.name,
                quantity: product.quantity,
                // total: parseInt(product.price) * parseInt(product.quantity),
                total: product.totalPrice,
                price: product.price,
                description: product.description,
              }}
            />
          </ul>
        ))
      ) : (
        <h3>Please add something to cart!</h3>
      )}
      {!isEmpty && (
        <ul>
          <h3>{cartItems.quantity}</h3>
        </ul>
      )}
    </Card>
  );
};

export default Cart;
