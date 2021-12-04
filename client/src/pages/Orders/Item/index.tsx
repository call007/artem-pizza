import { Order } from "../../../types";

export function Item({
  address,
  card_number,
  dough,
  id,
  ingredients,
  name,
  price,
  sauce,
  size,
}: Order) {
  return (
    <section>
      <span>Заказ {id}</span>
      <h2>{name}</h2>
      <p>{card_number}</p>
      <p>
        <small>
          {size} см • {dough} • {sauce} • {ingredients?.join(" •")}
        </small>
      </p>
      <p>{address}</p>
      <strong>{price} руб</strong>
      <br />
      <br />
      <br />
    </section>
  );
}
