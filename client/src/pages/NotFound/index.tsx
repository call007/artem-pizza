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
        <Plate as={Styled.Plate}>
          <Typography
            size={{ all: "xxl", phone: "xl" }}
            weight="bold"
            as={Styled.Title}
          >
            404 - страница не найдена
          </Typography>

          <Typography as={Styled.Subtitle}>
            Такая страница больше не существует.
          </Typography>

          <Button view="secondary" to={PATH.PizzaConfigurator}>
            На главную
          </Button>
        </Plate>
      </Wrapper>
    </>
  );
}
