import { useEffect, useState } from "react";
import { getOrders } from "../../../api";
import { Order } from "../../../types";
import { Item } from "../Item";

export function List() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    getOrders()
      .then((data) => {
        setOrders(data);
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  if (error) {
    return <>{error.message}</>;
  }

  if (isLoading) {
    return <>Загрузка...</>;
  }

  return (
    <div>
      {orders.map((order) => (
        <Item key={order.id} {...order} />
      ))}
    </div>
  );
}
