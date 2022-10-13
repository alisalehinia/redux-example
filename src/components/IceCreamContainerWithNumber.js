import { useState } from "react";
import { connect } from "react-redux";
import { buyIcecream } from "../redux/icecream/icecreamActions";
const IceCreamContainerWithNumbers = (props) => {
    const [number, setNumber] = useState(0);
    return (
        <div>
            <h6>by connect</h6>
            <p>num of iceCream - {props.numOfIcecream}</p>
            <input onChange={(e) => setNumber(e.target.value)} />
            <button onClick={() => { props.buyIcecream(number) }}>buy iceCream</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { numOfIcecream: state.icecream.numOfIcecream }
}
const mapDispatchToProps = (dispatch) => {
    return {
        buyIcecream: (n) => { dispatch(buyIcecream(n)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainerWithNumbers)