import styled from "styled-components";
import { variables } from "../../../styles";

export const Container = styled.div`
  margin-top: ${variables.space.base};
  padding-top: ${variables.space.xs};
  transition: background-color ${variables.transitionDuration};

  @media ${variables.media.phone} {
    position: sticky;
    z-index: ${variables.zIndex.panel};
    bottom: 0;
    margin-bottom: -${variables.space.xxl};
    padding-left: ${variables.space.base};
    padding-right: ${variables.space.base};
    padding-bottom: ${variables.space.sm};
    background-color: ${(props) => props.theme.colors.white};
    box-shadow: ${(props) => props.theme.shadow.outer.panel};
  }
`;

export const Dl = styled.dl`
  display: flex;
  justify-content: space-between;
  margin: ${variables.space.xs} ${variables.space.base};
  color: ${(props) => props.theme.colors.gray600};
  font-size: ${variables.typography.fontSize.sm};
  line-height: ${variables.typography.lineHeight.sm};
  transition: color ${variables.transitionDuration};

  @media ${variables.media.phone} {
    margin: ${variables.space.xxs} 0;
    font-size: ${variables.typography.fontSize.xs};
    line-height: ${variables.typography.lineHeight.xs};
  }
`;

export const Total = styled.div`
  margin-bottom: ${variables.space.xxl};
  font-weight: ${variables.typography.fontWeight.medium};
  border-top: 1px dashed ${(props) => props.theme.colors.gray200};
  transition: border-top-color ${variables.transitionDuration};

  @media ${variables.media.phone} {
    margin-bottom: ${variables.space.base};
  }
`;

export const Error = styled.p`
  margin-top: ${variables.space.sm};
`;
