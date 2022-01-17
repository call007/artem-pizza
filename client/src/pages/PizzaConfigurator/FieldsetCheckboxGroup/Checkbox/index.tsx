import { HTMLAttributes, useRef } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { Checkbox as UiKitCheckbox, Typography } from "../../../../ui-kit";
import * as Styled from "./styles";

interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
  id: string;
  category: string;
  register: UseFormRegister<FieldValues>;
  price?: number;
  thumbnail?: string;
}

export function Checkbox({
  id,
  label,
  price,
  thumbnail,
  category,
  register,
  ...restProps
}: CheckboxProps) {
  const { ref, ...restRegisterProps } = register(category);
  const checkboxRef = useRef<HTMLInputElement | null>(null);

  return (
    <Styled.Label htmlFor={id} isChecked={checkboxRef.current?.checked}>
      {thumbnail && (
        <Styled.ThumbnailCover>
          <Styled.Thumbnail
            src={`${process.env.REACT_APP_API_URL}/${thumbnail}`}
          />
        </Styled.ThumbnailCover>
      )}

      <Typography
        size={{ all: "base", phone: "sm" }}
        weight={checkboxRef.current?.checked ? "medium" : "normal"}
      >
        {label}
      </Typography>

      <Styled.Footer>
        <Typography weight="medium">{!!price && ` ${price} ₽`}</Typography>

        <UiKitCheckbox
          id={id}
          ref={(e) => {
            ref(e);
            checkboxRef.current = e;
          }}
          {...restProps}
          {...restRegisterProps}
        />
      </Styled.Footer>
    </Styled.Label>
  );
}
