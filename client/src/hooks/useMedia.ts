import { useMediaQuery } from "react-responsive";
import { theme } from "../styles";

export const useMediaDesktop = () =>
  useMediaQuery({ query: theme.media.desktop });

export const useMediaTablet = () =>
  useMediaQuery({ query: theme.media.tablet });

export const useMediaPhone = () => useMediaQuery({ query: theme.media.phone });
