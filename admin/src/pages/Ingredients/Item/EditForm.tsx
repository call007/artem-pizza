import { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { updateIngredient } from "../../../api";
import { useIngredientsContext } from "../../../context";
import { Ingredient } from "../../../types";
import { validators } from "../../../validators";

type FormValues = {
  price: string;
  name: string;
  slug: string;
  category: string;
  image: string;
  thumbnail: string;
};

interface Props {
  ingredient: Ingredient;
  setIsEditing: (isEditing: boolean) => void;
}

export function EditForm({ ingredient, setIsEditing }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const { fetchIngredients } = useIngredientsContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onCancelEditIngredient = () => {
    setIsEditing(false);
  };

  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const formData: FormData = new FormData(formRef.current || undefined);

    setIsLoading(true);

    updateIngredient(ingredient.id, formData)
      .then(() => {
        alert(`Ингредиент "${ingredient.name}" успешно обновлен.`);

        fetchIngredients()
          .then(() => setIsEditing(false))
          .catch((error) => {
            setIsLoading(false);
            alert(error);
          });
      })
      .catch((error) => {
        setIsLoading(false);
        alert(error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
      <div>
        <label htmlFor="slug">slug:</label>
        <input
          type="text"
          id="slug"
          defaultValue={ingredient.slug}
          {...register("slug", { ...validators.required })}
        />
        {errors.slug?.message}
      </div>

      <div>
        <label htmlFor="name">name:</label>
        <input
          type="text"
          id="name"
          defaultValue={ingredient.name}
          {...register("name", { ...validators.required })}
        />
        {errors.name?.message}
      </div>

      <div>
        <label htmlFor="price">price:</label>
        <input
          type="text"
          id="price"
          defaultValue={ingredient.price}
          {...register("price", {
            ...validators.required,
            ...validators.number,
            valueAsNumber: true,
          })}
        />
        {errors.price?.message}
      </div>

      <div>
        <label htmlFor="category">category:</label>
        <select
          {...register("category", { ...validators.required })}
          defaultValue={ingredient.category}
        >
          <option value="size">size</option>
          <option value="dough">dough</option>
          <option value="vegetables">vegetables</option>
          <option value="sauces">sauces</option>
          <option value="meat">meat</option>
          <option value="cheese">cheese</option>
        </select>
        {errors.category?.message}
      </div>

      <div>
        <label htmlFor="picture">image:</label>
        <input
          type="file"
          id="picture"
          {...register("image", { ...validators.required })}
        />
        {errors.image?.message}
      </div>

      <div>
        <label htmlFor="picture">thumbnail:</label>
        <input
          type="file"
          id="picture"
          {...register("thumbnail", { ...validators.required })}
        />
        {errors.thumbnail?.message}
      </div>

      <p>
        <button type="button" onClick={onCancelEditIngredient}>
          <span>Отменить</span>
        </button>
        &nbsp;
        <button type="submit">{isLoading ? "Загрузка..." : "Сохранить"}</button>
      </p>
    </form>
  );
}
