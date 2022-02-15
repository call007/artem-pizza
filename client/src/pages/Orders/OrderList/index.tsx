import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../../api";
import { OrderCard } from "../../../components";
import { PATH } from "../../../consts";
import { getIngredientsByCategory } from "../../../state/ingredients/selectors";
import { fetchIngredients } from "../../../state/ingredients/thunk";
import { AppDispatch } from "../../../store";
import { Category, Order } from "../../../types";
import { Typography, TypographyLink } from "../../../ui-kit";
import {
  getIngredient,
  getIngredients,
  getPizzaDoughText,
} from "../../../utils";
import * as Styled from "./styles";

export function OrderList() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error>();
  const [orders, setOrders] = useState<Order[]>([]);
  const dispatch = useDispatch<AppDispatch>();

  const size = useSelector(getIngredientsByCategory(Category.Size));
  const dough = useSelector(getIngredientsByCategory(Category.Dough));
  const sauces = useSelector(getIngredientsByCategory(Category.Sauces));
  const cheese = useSelector(getIngredientsByCategory(Category.Cheese));
  const meat = useSelector(getIngredientsByCategory(Category.Meat));
  const vegetables = useSelector(getIngredientsByCategory(Category.Vegetables));

  const dataIngredients = [...sauces, ...cheese, ...meat, ...vegetables];

  useEffect(() => {
    dispatch(fetchIngredients());

    getOrders()
      .then((data) => {
        setOrders(data);
      })
      .catch((error) => setError(new Error(error)))
      .finally(() => setIsLoading(false));
  }, [dispatch]);

  if (error) {
    return (
      <Typography color={(color) => color.statusError}>
        {error.message}
      </Typography>
    );
  }

  if (isLoading) {
    return (
      <>
        {Array.from({ length: 3 }, (value, index) => (
          <Styled.Item key={index}>
            <OrderCard size="base" />
          </Styled.Item>
        ))}
      </>
    );
  }

  return (
    <>
      {orders.map((order) => {
        const pizzaSize = getIngredient(order.size.toString(), size)?.name;

        const pizzaDough = getPizzaDoughText(
          getIngredient(order.dough, dough)?.name
        );

        const pizzaIngredients = getIngredients(
          order.ingredients,
          dataIngredients
        ).map((ingredient) => ingredient.name);

        const ingredients = [
          `${pizzaSize} ${pizzaDough}`,
          ...pizzaIngredients,
        ].join(" • ");

        return (
          <Styled.Item key={order.id}>
            <OrderCard
              size="base"
              date={order.date}
              title={order.name}
              price={order.price}
              ingredients={dataIngredients.length > 0 ? ingredients : undefined}
              cardNumber={order.card_number}
              control={
                <TypographyLink
                  to={PATH.Checkout}
                  size={{ all: "base", phone: "sm" }}
                  weight="medium"
                  icon="repeat"
                >
                  Повторить заказ
                </TypographyLink>
              }
            />
          </Styled.Item>
        );
      })}
    </>
  );
}
