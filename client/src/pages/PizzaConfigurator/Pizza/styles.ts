import styled, { css } from "styled-components";
import plate from "./images/plate.png";
import plate_2x from "./images/plate@2x.png";

const getPercent = (currentValue: number, parentValue: number) =>
  `${(currentValue / parentValue) * 100}%`;

export const Container = styled.div`
  user-select: none;
  display: inline-block;
  vertical-align: top;
  position: relative;
  width: 100%;
  max-width: 21.875rem;
  background-image: url(${plate});
  background-repeat: no-repeat;
  background-size: contain;
  filter: drop-shadow(0 0.313rem 0.375rem rgba(46, 49, 55, 0.05))
    drop-shadow(0 0 0.188rem rgba(46, 49, 55, 0.1));

  &:before {
    content: "";
    display: block;
    padding-bottom: ${getPercent(320, 350)};
  }

  @media ${({ theme }) => theme.media.retina} {
    background-image: url(${plate_2x});
  }
`;

export const Plate = styled.div`
  position: absolute;
  left: ${getPercent(1, 350)};
  top: ${getPercent(3, 320)};
  width: ${getPercent(314, 350)};
  height: ${getPercent(314, 320)};

  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const center = css`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`;

type PlateSizeProps = {
  size: string;
};

export const PlateSize = styled.div.withConfig<PlateSizeProps>({
  shouldForwardProp: (prop) => prop !== "size",
})`
  ${center};

  ${(props) =>
    props.size === "30" &&
    css`
      width: 85%;
      height: 85%;
    `}

  ${(props) =>
    props.size === "35" &&
    css`
      width: 98%;
      height: 98%;
    `}
`;

export const Cheese = styled.div`
  ${center};
  width: 89%;
  height: 89%;
`;

export const Ingredients = styled.div`
  ${center};
  width: 79%;
  height: 79%;
`;
