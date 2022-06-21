import s from './Card1.module.scss'
import {useDispatch} from "react-redux";
import {deleteTodo} from "../../redux/slices/counter";


const Item = ({text, id}) => {
  const dispatch = useDispatch();

  return <div className={s.item}>
    <p>{text}</p>
    <button onClick={()=>dispatch(deleteTodo(id))} className={s.itemBtn}>Delete</button>
  </div>
};

export default Item;