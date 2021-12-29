import { Breakpoints } from ".";

export type MediaProp<T> = { [key in Exclude<Breakpoints, "all">]?: T } & {
  [key in Extract<Breakpoints, "all">]: T;
};
