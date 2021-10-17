import { FieldsName } from "./FieldsName";
import { Option } from "./Option";

type Payload = {
  name: FieldsName;
} & Option;

export type Action =
  | {
      type: "add-option";
      payload: Payload;
    }
  | {
      type: "remove-option";
      payload: Payload;
    };
