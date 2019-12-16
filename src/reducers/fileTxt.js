const INTIAL_STATE = {
  fileTxt: null
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case "fileTxt":
      return { ...state, fileTxt: action.payload };
    default:
      return state;
  }
};
