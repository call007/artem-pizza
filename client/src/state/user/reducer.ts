export type State = {
  isAuthorized?: boolean;
  isCheckoutSuccess?: boolean;
};

export type Action =
  | {
      type: "set_isAuthorized";
      payload: boolean;
    }
  | {
      type: "set_isCheckoutSuccess";
      payload: boolean;
    };

const initialState: State = {
  isAuthorized: false,
  isCheckoutSuccess: false,
};

export function userReducer(
  state: State = initialState,
  action: Action
): State {
  switch (action.type) {
    case "set_isAuthorized":
      return { ...state, isAuthorized: action.payload };

    case "set_isCheckoutSuccess":
      return { ...state, isCheckoutSuccess: action.payload };

    default:
      return state;
  }
}
