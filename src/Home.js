import React from "react";
import { batch, connect, useDispatch, useSelector } from "react-redux";
import { setArtir } from "./store/action/home";
// import { store } from "../src/store";

const Home = (props) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(props);
  console.log(state);
  return (
    <div>
      Home
      {/* <button onClick={() => store.dispatch({ type: "ARTIR", payload: 10 })}> */}
      <button onClick={() => batch(() => dispatch(setArtir(5)))}>
        Price deyis
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productPrice: state.home.price,
    productCategory: state.category.subcategory,
  };
};

export default connect(mapStateToProps)(Home);
