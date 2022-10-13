import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";
const HooksCakeContainer = () => {
    const numOfCakes = useSelector(state => state.cake.numOfCakes);
    const dispatch = useDispatch();
    return (<div>
        <h6>by hooks</h6>
        <p>num of cakes - {numOfCakes}</p>
        <button onClick={() => { dispatch(buyCake()) }}>buy cake</button>
    </div>);
}
export default HooksCakeContainer