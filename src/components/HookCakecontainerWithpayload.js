import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";
const HookCakeContainerWithPayload = () => {
    const numOfCakes = useSelector(state => state.cake.numOfCakes);
    const dispatch = useDispatch();
    const [numbers, setNumbers] = useState(0);
    return (<div>
        <h6>by hooks</h6>
        <p>num of cakes - {numOfCakes}</p>
        <input type="text" onChange={(e) => { setNumbers(e.target.value) }} />
        <button onClick={() => { dispatch(buyCake(numbers)) }}>buy cake</button>
    </div>);
}

export default HookCakeContainerWithPayload;