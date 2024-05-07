import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";

function OrderSummaryModal(props) {
  const lettuceCount = useSelector((state) => state.handleLettuceCount);
  const cheeseCount = useSelector((state) => state.handleCheeseCount);
  const baconCount = useSelector((state) => state.handleBaconCount);
  const meatCount = useSelector((state) => state.handleMeatCount);

  const [price, setPrice] = useState(3.0);

  useEffect(() => {
    const calculatePrice = () =>
      setPrice(
        3.0 +
          meatCount * 1.3 +
          cheeseCount * 0.4 +
          lettuceCount * 0.5 +
          baconCount * 0.7
      );
    calculatePrice();
  }, [baconCount, cheeseCount, lettuceCount, meatCount]);
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Order Summary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>Ingredients</strong>
          </p>
          <hr />
          <ul>
            <li>Lettuce ({lettuceCount})</li>
            <li>Bacon ({baconCount})</li>
            <li>Cheese ({cheeseCount})</li>
            <li>Meat ({meatCount})</li>
          </ul>
          <hr />
          <p>
            <strong>Price: ${price.toFixed(2)}</strong>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.handleClose}>
            Place Order
          </Button>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default OrderSummaryModal;
