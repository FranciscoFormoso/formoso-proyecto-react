import Card from "react-bootstrap/Card";

import "./CartItem.css";

const CartItem = ({ item, quantity, removeFromCart }) => {
  return (
    <div key={item.id} className="cart">
      <span className="imgShoppingCart">
        <Card.Img className="cartImg" variant="top" src={item.img} />
      </span>
      <span className="cartParagraph">
        <h3>{item.title}</h3>
        <p >Precio: ${item.price}</p>
        <p>Cantidad: {quantity} </p>
        <p>Total: ${item.price * quantity}</p>
        <button className="removeProduct" onClick={() => removeFromCart(item.id)}>
          Quitar producto
        </button>
      </span>
    </div>
  );
};

export default CartItem;
