import Skeleton, { SkeletonProps } from "react-loading-skeleton";
import { useTheme } from "styled-components";

export function TypographySkeleton(props: SkeletonProps) {
  const theme = useTheme();

  return (
    <Skeleton
      baseColor={theme.colors.gray200}
      highlightColor={theme.colors.gray100}
      style={{ opacity: 0.5 }}
      {...props}
    />
  );
}
