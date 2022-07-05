import React from "react";
import { store } from "../src/store";

export default function Home() {
  return (
    <div>
      Home
      <button onClick={() => store.dispatch({ type: "ARTIR", payload: 10 })}>
        Price deyis
      </button>
    </div>
  );
}
