import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: ${(props) => props.theme.space.base};
`;

export const PlateWrapper = styled.div`
  padding: ${(props) => props.theme.space.base};
`;

export const Footer = styled.div`
  border-top: 1px dashed ${(props) => props.theme.colors.gray200};
  margin-top: ${(props) => props.theme.space.base};
  padding-top: ${(props) => props.theme.space.base};
`;
