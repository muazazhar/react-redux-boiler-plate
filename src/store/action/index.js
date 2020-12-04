const set_state = (data) => {
  return (dispatch) => {
    dispatch({ type: "setData", data: data });
  };
};
export { set_state };
