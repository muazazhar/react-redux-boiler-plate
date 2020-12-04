const Initial_state = {
  username: "ma",
  email: "ma@mail.com",
};

export default (state = Initial_state, action) => {
  switch (action.type) {
    case "setData":
      //   updating state
      return {
        ...state,
        email: action.data,
      };
  }

  return state;
};
