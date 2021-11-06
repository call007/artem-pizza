import { СheckoutForm } from "./СheckoutForm";

export function Сheckout() {
  return (
    <div>
      <h1>Оформление заказа</h1>

      <СheckoutForm formSubmit={(data) => console.log(data)} />
    </div>
  );
}
