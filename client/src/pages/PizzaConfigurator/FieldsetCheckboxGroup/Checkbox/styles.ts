import styled, { css } from "styled-components";
import { variables } from "../../../../styles";
import { LazyImage } from "../../../../ui-kit";

type LabelProps = {
  isChecked?: boolean;
};

export const Label = styled.label<LabelProps>(
  ({ theme, isChecked }) => css`
    user-select: none;
    cursor: pointer;
    flex-shrink: 0;
    display: inline-flex;
    vertical-align: top;
    flex-direction: column;
    width: 7rem;
    margin-left: ${variables.space.base};
    margin-top: ${variables.space.xl};
    padding: ${variables.space.sm};
    -webkit-tap-highlight-color: transparent;
    border: 2px solid ${isChecked ? theme.colors.primary : "transparent"};
    border-radius: 0.75rem;
    box-shadow: ${theme.shadow.outer.lg};
    transition-property: border-color, box-shadow;
    transition-duration: ${variables.transitionDuration};

    &:hover {
      border-color: ${isChecked && theme.colors.primaryDark};
    }

    @media ${variables.media.phone} {
      width: 6.5rem;
      padding: ${variables.space.xs};
      padding-bottom: calc(${variables.space.xs} + ${variables.space.xxxs});
      margin-left: ${variables.space.xs};
    }
  `
);

export const Footer = styled.span`
  display: flex;
  justify-content: space-between;
  margin-top: ${variables.space.sm};

  @media ${variables.media.phone} {
    margin-top: ${variables.space.xs};
  }
`;

export const ThumbnailCover = styled.span`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 3.75rem;
  margin-bottom: ${variables.space.sm};

  @media ${variables.media.phone} {
    height: 3.125rem;
    margin-bottom: ${variables.space.xs};
  }
`;

export const Thumbnail = styled(LazyImage)`
  width: 5rem;
  height: 5rem;
  object-fit: contain;

  @media ${variables.media.phone} {
    width: 4rem;
    height: 4rem;
  }
`;
