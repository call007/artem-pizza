import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  price: string;
  name: string;
  slug: string;
  picture: string;
};

function App() {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="price">Цена:</label>
        <input type="text" id="price" {...register("price")} />
      </div>

      <div>
        <label htmlFor="name">Название:</label>
        <input type="text" id="name" {...register("name")} />
      </div>

      <div>
        <label htmlFor="slug">Идентификатор:</label>
        <input type="text" id="slug" {...register("slug")} />
      </div>

      <div>
        <label htmlFor="picture">Картинка:</label>
        <input type="file" id="picture" {...register("picture")} />
      </div>

      <button type="submit">Оправить</button>
    </form>
  );
}

export default App;
