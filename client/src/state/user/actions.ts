import { createAction } from "@reduxjs/toolkit";
import { UserState } from "./reducer";

export const setUserIsAuthorizedAction =
  createAction<UserState["isAuthorized"]>("set_isAuthorized");

export const setUserIsCheckoutSuccessAction = 
  createAction<UserState["isCheckoutSuccess"]>("set_isCheckoutSuccess");
