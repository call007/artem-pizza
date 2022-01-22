import { Plate, Typography } from "../../../ui-kit";
import { SelectedIngredients } from "./SelectedIngredients";
import * as Styled from "./styles";

interface OrderPreviewProps {
  price?: number;
}

export function OrderPreview({ price }: OrderPreviewProps) {
  return (
    <Styled.Container>
      <Plate>
        <Styled.PlateWrapper>
          <Typography weight="medium">Твоя пицца</Typography>

          <SelectedIngredients />

          <Styled.Footer>
            {price && (
              <Typography size="sm" weight="medium">
                {price} руб
              </Typography>
            )}
          </Styled.Footer>
        </Styled.PlateWrapper>
      </Plate>
    </Styled.Container>
  );
}
