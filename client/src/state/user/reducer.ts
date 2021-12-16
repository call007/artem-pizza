export type UserState = {
  isAuthorized?: boolean;
  isCheckoutSuccess?: boolean;
};

export type UserAction =
  | {
      type: "set_isAuthorized";
      payload: boolean;
    }
  | {
      type: "set_isCheckoutSuccess";
      payload: boolean;
    };

const initialState: UserState = {
  isAuthorized: false,
  isCheckoutSuccess: false,
};

export function userReducer(
  state: UserState = initialState,
  action: UserAction
): UserState {
  switch (action.type) {
    case "set_isAuthorized":
      return { ...state, isAuthorized: action.payload };

    case "set_isCheckoutSuccess":
      return { ...state, isCheckoutSuccess: action.payload };

    default:
      return state;
  }
}
