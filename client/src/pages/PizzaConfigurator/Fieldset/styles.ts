import styled from "styled-components";
import { mixins } from "../../../styles";

export const Fieldset = styled.fieldset`
  ${mixins.fieldsetReset};
  line-height: 1;
`;

export const Box = styled.div`
  margin-top: ${(props) => props.theme.space.xs};

  @media ${({ theme }) => theme.media.phone} {
    margin-top: ${(props) => props.theme.space.xxs};
  }
`;

export const SkeletonWrapper = styled.div`
  .skeleton {
    width: 5.625rem;

    @media ${({ theme }) => theme.media.phone} {
      width: 4.375rem;
    }
  }
`;
