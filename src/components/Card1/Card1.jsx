import s from './Card1.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {addTodo, decrement, increment, onChangeInput} from "../../redux/slices/counter";
import Item from "./Item";

const Card1 = () => {
  const state = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return <div className={s.card}>

    <p className={s.card__text}>todo</p>
    <input onChange={e=>dispatch(onChangeInput(e.target.value))} value={state.inputValue} type="text"/>
    <button onClick={()=> dispatch(addTodo())}>POST</button>
    {state.listTodo.map((v, i)=><Item key={i} id={i} text={v} />)}


    <div className={s.card__counter}>
      <p>Counter</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <p>{state.value}</p>
    </div>

  </div>
};

export default Card1;