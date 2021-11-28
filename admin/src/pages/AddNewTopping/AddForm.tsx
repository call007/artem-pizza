import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { addNewIngredient } from "../../api";
import { validators } from "../../validators";

type FormValues = {
  price: string;
  name: string;
  slug: string;
  category: string;
  image: string;
  thumbnail: string;
};

export function AddForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formError, setFormError] = useState<Error | null>(null);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const formData: FormData = new FormData();
    formData.append("price", data.price);
    formData.append("name", data.name);
    formData.append("slug", data.slug);
    formData.append("category", data.category);
    formData.append("image", data.image[0]);
    formData.append("thumbnail", data.thumbnail[0]);

    setIsLoading(true);
    setIsSuccess(false);
    setFormError(null);

    addNewIngredient(formData)
      .then(() => {
        setIsLoading(false);
        setIsSuccess(true);
      })
      .catch((error) => setFormError(error));
  };

  const name = watch("name");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="price">Цена:</label>
        <input
          type="text"
          id="price"
          {...register("price", {
            ...validators.required,
            ...validators.number,
            valueAsNumber: true,
          })}
        />
        {errors.price?.message}
      </div>

      <div>
        <label htmlFor="name">Название:</label>
        <input
          type="text"
          id="name"
          {...register("name", { ...validators.required })}
        />
        {errors.name?.message}
      </div>

      <div>
        <label htmlFor="slug">Идентификатор:</label>
        <input
          type="text"
          id="slug"
          {...register("slug", {
            ...validators.required,
            ...validators.latin,
          })}
        />
        {errors.slug?.message}
      </div>

      <div>
        <label htmlFor="category">Категория</label>
        <select {...register("category", { ...validators.required })}>
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
        <label htmlFor="picture">Картинка:</label>
        <input
          type="file"
          id="picture"
          {...register("image", { ...validators.required })}
        />
        {errors.image?.message}
      </div>

      <div>
        <label htmlFor="picture">Превью картинка:</label>
        <input
          type="file"
          id="picture"
          {...register("thumbnail", { ...validators.required })}
        />
        {errors.thumbnail?.message}
      </div>

      <button type="submit">
        {isLoading && !formError ? "Загрузка..." : "Отправить"}
      </button>
      {formError && <p style={{ color: "red" }}>{formError.message}</p>}
      {isSuccess && (
        <p style={{ color: "green" }}>
          Новый ингредиент <b>"{name}"</b> успешно создан!
        </p>
      )}
    </form>
  );
}
