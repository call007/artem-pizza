import { useMediaQuery } from "react-responsive";
import { variables } from "../styles";

export const useMediaDesktop = () =>
  useMediaQuery({ query: variables.media.desktop });

export const useMediaTablet = () =>
  useMediaQuery({ query: variables.media.tablet });

export const useMediaPhone = () =>
  useMediaQuery({ query: variables.media.phone });
