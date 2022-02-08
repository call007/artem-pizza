import { useHistory } from "react-router";
import { PATH } from "../../consts";
import { useMediaPhone } from "../../hooks";
import { Button, Header, Plate, Typography, Wrapper } from "../../ui-kit";
import * as Styled from "./styles";

export function NotFound() {
  const isPhone = useMediaPhone();
  const history = useHistory();

  return (
    <>
      <Header>
        <Button onClick={() => history.goBack()} view="ghost" icon="arrow-left">
          {!isPhone && "Назад"}
        </Button>
      </Header>

      <Wrapper size="sm" as="main">
        <Plate>
          <Styled.PlateWrapper>
            <Styled.TitleBox>
              <Typography
                size={{ all: "xxl", phone: "xl" }}
                weight="bold"
                component="h1"
              >
                404 - страница не найдена
              </Typography>
            </Styled.TitleBox>

            <Styled.SubtitleBox>
              <Typography>Такая страница больше не существует.</Typography>
            </Styled.SubtitleBox>

            <Button view="secondary" to={PATH.PizzaConfigurator}>
              На главную
            </Button>
          </Styled.PlateWrapper>
        </Plate>
      </Wrapper>
    </>
  );
}
