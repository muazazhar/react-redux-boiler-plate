import React from "react";
import "./App.css";
// import Compo from "./components/comp";
import { connect } from "react-redux";
import { set_state } from "./store/action";

class App extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <div className="App">
        <h1>Redux Reducer Boiler plate</h1>
        {/* <Compo /> */}
        <button
          onClick={() => this.props.set_state("sending data from component")}
        >
          set data
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  username: state.auth.username,
  email: state.auth.email,
  app_name: state.appInfo.app_name,
});

const mapDispatchToProps = (dispatch) => ({
  set_state: (data) => dispatch(set_state(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
