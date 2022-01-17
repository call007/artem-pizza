import { useMediaDesktop, useMediaPhone, useMediaTablet } from ".";
import { MediaProp } from "../types";

export const useMediaProp = <T extends {}>(
  prop?: T | MediaProp<T>
): T | undefined => {
  const isDesktop = useMediaDesktop();
  const isTablet = useMediaTablet();
  const isPhone = useMediaPhone();

  if (!prop) {
    return;
  }

  if (typeof prop === "string") {
    return prop;
  }

  const mediaProp = prop as MediaProp<T>;
  let resultProp = mediaProp.all;

  if (isDesktop) {
    resultProp = mediaProp.desktop ?? resultProp;
  }
  if (isTablet) {
    resultProp = mediaProp.tablet ?? resultProp;
  }
  if (isPhone) {
    resultProp = mediaProp.phone ?? resultProp;
  }

  return resultProp;
};
