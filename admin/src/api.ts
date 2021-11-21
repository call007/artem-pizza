export const addNewIngredient = (formData: FormData) =>
  fetch(`${process.env.REACT_APP_API_URL}/ingredients`, {
    method: "POST",
    body: formData,
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response.statusText || "Something went wrong");
    }
  });
