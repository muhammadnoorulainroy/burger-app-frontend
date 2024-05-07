
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./BurgerMenu.css";
import { increaseLettuce, decreaseLettuce, increaseMeat, decreaseMeat, increaseBacon, decreaseBacon, increaseCheese, decreaseCheese } from '../../redux-toolkit/ingredients/ingredientsSlice';
import { useState } from "react";
import OrderSummaryModal from "../OrderSummaryModal/OrderSummaryModal";

const BurgerMenu = (props) => {

  const dispatch = useDispatch();

  const lettuceCount = useSelector((state) => state.ingredients.lettuceQty);
  const cheeseCount = useSelector((state) => state.ingredients.cheeseQty);
  const baconCount = useSelector((state) => state.ingredients.baconQty);
  const meatCount = useSelector((state) => state.ingredients.meatQty);

  const isLoggedIn = useSelector((state) => state.isLoggedIn)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className="menu-area">
      <div className="price-area">
        <p>
          Current Price: <strong data-testid='price'>${props.price.toFixed(2)}</strong>
        </p>
      </div>
      <div className="lettuce-ingredient">
        <p className="lettuce-ingre">
          <strong>Lettuce</strong>
        </p>
        <button className="less-btn" data-testid="decrease-lettuce-btn" disabled={!lettuceCount} onClick={() => dispatch(decreaseLettuce()) }>Less</button>
        <button className="more-btn" data-testid="increase-lettuce-btn" onClick={() => dispatch(increaseLettuce()) }>More</button>
      </div>
      <div className="lettuce-ingredient">
        <p className="bacon-ingre">
          <strong>Bacon</strong>
        </p>
        <button className="less-btn" disabled={!baconCount} onClick={() => dispatch(decreaseBacon()) }>Less</button>
        <button className="more-btn" onClick={() => dispatch(increaseBacon()) }>More</button>
      </div>
      <div className="lettuce-ingredient">
        <p className="cheese-ingre">
          <strong>Cheese</strong>
        </p>
        <button className="less-btn" disabled={!cheeseCount} onClick={() => dispatch(decreaseCheese()) }>Less</button>
        <button className="more-btn" onClick={() => dispatch(increaseCheese()) }>More</button>
      </div>
      <div className="lettuce-ingredient">
        <p className="meat-ingre">
          <strong>Meat</strong>
        </p>
        <button className="less-btn" disabled={!meatCount} onClick={() => dispatch(decreaseMeat()) }>Less</button>
        <button className="more-btn" onClick={() => dispatch(increaseMeat()) }>More</button>
      </div>

      <div className="lettuce-ingredient">
        { !isLoggedIn ?
        <button className="order-btn" disabled={props.price===3}><Link className='link'to='/signup'>SIGN UP TO ORDER</Link></button>
        :
        <button className="order-btn" disabled={props.price===3} onClick={handleShow} >Proceed to Checkout</button>
        }
      </div>
      <OrderSummaryModal show={show} handleClose={handleClose} handleShow={handleShow} />
    </div>
  );
};

export default BurgerMenu;
