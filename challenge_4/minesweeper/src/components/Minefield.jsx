import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../redux/actions";
import store from "../redux/store";

const Minefield = props => {
  console.log("----------props---------", props);
  return (
    <div>
      <button
        onClick={() => {
          //   setFilter("x");
          store.dispatch({ type: "SET_FILTER", payload: "x" });
          console.log(store.getState());
        }}
      >
        Click this thing!
      </button>
      <div>Current filter: {props.activeFilter}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return { activeFilter: state.visibility };
};

export default connect(
  mapStateToProps,
  { setFilter }
)(Minefield);
