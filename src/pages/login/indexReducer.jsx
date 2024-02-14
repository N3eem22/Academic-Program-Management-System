export const loginPageStatesInitialState = {
  success: false,
  error: false,
  pending: false,
  forget: false,
  errorMessage: "",
};
export const loginPageStatesReducer = (state, action) => {
  if (action.type === "PENDING") {
    return {
      ...state,
      pending: true,
      success: false,
      error: false,
      errorMessage: "",
    };
  }
  if (action.type === "SUCCESS") {
    return {
      ...state,
      pending: false,
      success: true,
      error: false,
      errorMessage: "",
      successMessage: action.successMessage,
    };
  }
  if (action.type === "FORGET") {
    return {
      ...state,
      pending: false,
      success: false,
      error: false,
      errorMessage: "",
      forget: true,
    };
  }
  if (action.type === "ERROR") {
    return {
      ...state,
      pending: false,
      success: false,
      error: true,
      errorMessage: action.errorMessage,
    };
  }
  if (action.type === "CLEAR") {
    return {
      ...state,
      pending: false,
      success: false,
      error: false,
    };
  }
  return loginPageStatesInitialState;
};
