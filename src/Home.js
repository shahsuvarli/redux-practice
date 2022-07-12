import React from "react";
import { batch, connect, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setArtir } from "./store/action/home";
// import { store } from "./store";

const Home = (props) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);

  return (
    <div>
      Home
      <button
        onClick={() =>
          batch(() => props.dispatch({ type: "ARTIR", payload: 10 }))
        }
      >
        {/* <button onClick={() => dispatch(setArtir(10))}> */}
        Price deyis
      </button>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return state;
// };

export default connect()(Home);
