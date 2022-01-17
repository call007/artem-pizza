import styled, { css } from "styled-components";
import { LazyImage } from "../../../../ui-kit";

type LabelProps = {
  isChecked?: boolean;
};

export const Label = styled.label<LabelProps>(
  ({ theme, isChecked }) => css`
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    cursor: pointer;
    flex-shrink: 0;
    display: inline-flex;
    vertical-align: top;
    flex-direction: column;
    width: 7rem;
    margin-left: ${theme.space.base};
    margin-top: ${theme.space.xl};
    padding: ${theme.space.sm};
    border: 2px solid ${isChecked ? theme.colors.primary : "transparent"};
    border-radius: 0.75rem;
    box-shadow: ${theme.shadow.outer.lg};
    transition: border-color ${theme.transitionDuration};

    &:hover {
      border-color: ${isChecked && theme.colors.primaryDark};
    }

    @media ${theme.media.phone} {
      width: 6.5rem;
      padding: ${theme.space.xs};
      padding-bottom: calc(${theme.space.xs} + ${theme.space.xxxs});
      margin-left: ${theme.space.xs};
    }
  `
);

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${(props) => props.theme.space.sm};

  @media ${({ theme }) => theme.media.phone} {
    margin-top: ${(props) => props.theme.space.xs};
  }
`;

export const ThumbnailCover = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 3.75rem;
  margin-bottom: ${(props) => props.theme.space.sm};

  @media ${({ theme }) => theme.media.phone} {
    height: 3.125rem;
    margin-bottom: ${(props) => props.theme.space.xs};
  }
`;

export const Thumbnail = styled(LazyImage)`
  width: 5rem;
  height: 5rem;
  object-fit: contain;

  @media ${({ theme }) => theme.media.phone} {
    width: 4rem;
    height: 4rem;
  }
`;
