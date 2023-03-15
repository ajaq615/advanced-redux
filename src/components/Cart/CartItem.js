import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";

const CartItem = (props) => {
  const { id, title, quantity, total, price, description } = props.item;

  const dispatch = useDispatch();

  const add = () => {
    dispatch(cartActions.addToCart({
      id,
      title,
      price,
      description
    }))
  }

  const remove = () => {
    dispatch(cartActions.removeFromCart(id))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
        ₱ {total}
          
        </div>
      </header>
      <div className={classes.details}>
      <span className={classes.itemprice}>₱ {price}</span>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={remove}>-</button>
          <button onClick={add}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
