import { RootState } from "../../store";

export const getIsAuthorized = (state: RootState) => state.user.isAuthorized;
