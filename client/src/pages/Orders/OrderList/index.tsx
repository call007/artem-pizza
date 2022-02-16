import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../../api";
import { OrderCard } from "../../../components";
import { PATH } from "../../../consts";
import {
  getIngredients as selectorGetIngredients,
  getIngredientsByCategory,
} from "../../../state/ingredients/selectors";
import { fetchIngredients } from "../../../state/ingredients/thunk";
import { orderSlice } from "../../../state/order/slice";
import { AppDispatch } from "../../../store";
import { Category, Order, Pizza } from "../../../types";
import { Typography, TypographyLink } from "../../../ui-kit";
import {
  calculatePrice,
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

  const ingredients = useSelector(selectorGetIngredients);

  const size = useSelector(getIngredientsByCategory(Category.Size));
  const dough = useSelector(getIngredientsByCategory(Category.Dough));
  const sauce = useSelector(getIngredientsByCategory(Category.Sauce));
  const cheese = useSelector(getIngredientsByCategory(Category.Cheese));
  const meat = useSelector(getIngredientsByCategory(Category.Meat));
  const vegetables = useSelector(getIngredientsByCategory(Category.Vegetables));

  useEffect(() => {
    dispatch(fetchIngredients());

    getOrders()
      .then((data) => {
        setOrders(data);
      })
      .catch((error) => setError(new Error(error)))
      .finally(() => setIsLoading(false));
  }, [dispatch]);

  const handleRepeatOrderClick = (order: Order) => () => {
    const pizza: Pizza = {
      size: order.size.toString(),
      dough: order.dough,
      sauce: order.sauce,
      cheese: order.cheese,
      vegetables: order.vegetables,
      meat: order.meat,
    };

    dispatch(orderSlice.actions.setPizza(pizza));
    dispatch(orderSlice.actions.setPrice(calculatePrice(pizza, ingredients)));
  };

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

        const pizzaSauce = getIngredient(order.sauce, sauce)?.name;

        const pizzaCheese = getIngredients(order.cheese, cheese)
          .map((ingredient) => ` • ${ingredient.name}`)
          .join("");

        const pizzaVegetables = getIngredients(order.vegetables, vegetables)
          .map((ingredient) => ` • ${ingredient.name}`)
          .join("");

        const pizzaMeat = getIngredients(order.meat, meat)
          .map((ingredient) => ` • ${ingredient.name}`)
          .join("");

        return (
          <Styled.Item key={order.id}>
            <OrderCard
              size="base"
              date={order.date}
              title={order.name}
              price={+order.price}
              ingredients={`${pizzaSize} ${pizzaDough} • ${pizzaSauce} соус ${pizzaCheese} ${pizzaVegetables} ${pizzaMeat}`}
              cardNumber={order.card_number}
              control={
                <TypographyLink
                  to={PATH.Checkout}
                  size={{ all: "base", phone: "sm" }}
                  weight="medium"
                  icon="repeat"
                  onClick={handleRepeatOrderClick(order)}
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
