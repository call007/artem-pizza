import { format } from "date-fns";
import { ru } from "date-fns/locale";

export function getDateNow() {
  return format(new Date(), "d MMMM yyyy, kk:mm", { locale: ru });
}
