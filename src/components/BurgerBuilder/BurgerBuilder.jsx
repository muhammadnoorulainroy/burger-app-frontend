
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import BurgerBottom from "../BurgerBottom/BurgerBottom";
import Bacon from "../BurgerIngredients/Bacon";
import Cheese from "../BurgerIngredients/Cheese";
import Lettuce from "../BurgerIngredients/Lettuce";
import Meat from "../BurgerIngredients/Meat";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import BurgerTop from "../BurgerTop/BurgerTop";
import './BurgerBuilder.css'


const Burger = () => {

  // plain redux
  // const lettuceCount = useSelector((state) => state.handleLettuceCount);
  // const cheeseCount = useSelector((state) => state.handleCheeseCount);
  // const baconCount = useSelector((state) => state.handleBaconCount);
  // const meatCount = useSelector((state) => state.handleMeatCount);

  // redux-toolkit
  const lettuceCount = useSelector((state) => state.ingredients.lettuceQty);
  const cheeseCount = useSelector((state) => state.ingredients.cheeseQty);
  const baconCount = useSelector((state) => state.ingredients.baconQty);
  const meatCount = useSelector((state) => state.ingredients.meatQty);

   const [price, setPrice] = useState(3.0);

  useEffect(()=>{
    const calculatePrice = () => setPrice(3.0 + (meatCount * 1.30) + (cheeseCount * 0.40) + (lettuceCount * 0.50) + (baconCount * 0.70));
    calculatePrice();
  }, [baconCount, cheeseCount, lettuceCount, meatCount])

  return (
    <>
      <div className="burger-area">
        <BurgerTop />
        {!(meatCount || cheeseCount || lettuceCount || baconCount) ? <p className="text-center fw-bold">No Ingredients Added</p> : ''}
        {lettuceCount ? [...Array(lettuceCount)].map((e, i) => <div key={i}><Lettuce /></div>) : ''}
        {baconCount ? [...Array(baconCount)].map((e, i) => <div key={i}><Bacon /></div>) : ''}
        {cheeseCount ? [...Array(cheeseCount)].map((e, i) => <div key={i}><Cheese /></div>) : ''}
        {meatCount ? [...Array(meatCount)].map((e, i) => <div key={i}><Meat /></div>) : ''}
        <BurgerBottom />
    </div>
      <BurgerMenu price={price} />
    </>
  );
};

export default Burger;
