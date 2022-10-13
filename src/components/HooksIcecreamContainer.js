import { buyIcecream } from "../redux/icecream/icecreamActions";
import { useSelector, useDispatch } from "react-redux/es/exports";
const HooksIcecreamContainer = () => {
    const numOfIcecream = useSelector(state => state.icecream.numOfIcecream);
    const dispatch = useDispatch();
    return (<div>
        <h6>by hooks</h6>
        <p>num of icecream - {numOfIcecream}</p>
        <button onClick={() => { dispatch(buyIcecream()) }}>buy icecream</button>
    </div>);
}

export default HooksIcecreamContainer;