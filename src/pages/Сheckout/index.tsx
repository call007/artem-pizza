export function Сheckout() {
  return (
    <div>
      <h1>Оформление заказа</h1>

      <form>
        <fieldset>
          <legend>Адрес доставки</legend>

          <ul role="none">
            <li>
              <input
                type="text"
                placeholder="Введите адрес"
                name="address"
                autoComplete="street-address"
              />
            </li>

            <li>
              <label htmlFor="order-entrance">подъезд</label>{" "}
              <input type="number" id="order-entrance" name="entrance" />
            </li>

            <li>
              <label htmlFor="order-floor">этаж</label>{" "}
              <input type="number" id="order-floor" name="floor" />
            </li>

            <li>
              <label htmlFor="order-apartment">квартира</label>{" "}
              <input type="number" id="order-apartment" name="apartment" />
            </li>
          </ul>
        </fieldset>

        <fieldset>
          <legend>Данные для оплаты</legend>

          <ul role="none">
            <li>
              <input
                type="number"
                placeholder="Номер карты"
                name="card-number"
                inputMode="decimal"
                autoComplete="cc-number"
              />
            </li>

            <li>
              <input
                type="number"
                placeholder="MM/YYYY"
                name="card-expiration"
                inputMode="decimal"
                autoComplete="cc-exp"
              />
            </li>

            <li>
              <input
                type="number"
                placeholder="CVV"
                name="card-ccv"
                inputMode="decimal"
                autoComplete="cc-csc"
              />
            </li>

            <li>
              <input
                type="text"
                placeholder="Имя как на карте"
                autoComplete="cc-name"
              />
            </li>
          </ul>

          <p>
            Доставим пиццу в течение часа или вернем деньги. Артем слов на ветер
            не бросает.
          </p>

          <button type="submit" disabled>
            Заполните форму заказа
          </button>
        </fieldset>
      </form>
    </div>
  );
}
