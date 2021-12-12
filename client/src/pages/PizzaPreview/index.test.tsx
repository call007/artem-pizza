// import { render } from "@testing-library/react";
// import { createMemoryHistory } from "history";
// import { MemoryRouter, Router } from "react-router";
// import { PizzaPreview } from ".";
// import { PATH } from "../../consts";
// import { IngredientsProvider } from "../../context/IngredientsContext";
// import { PizzaContext, PizzaProvider } from "../../context/PizzaContext";

// describe("PizzaPreview", () => {
//   it("renders correctly", async () => {
//     const { getByText } = render(
//       <MemoryRouter>
//         <IngredientsProvider>
//           <PizzaContext.Provider
//             value={
//               {
//                 state: {
//                   pizza: {
//                     size: "30cm",
//                     dough: "thin",
//                     sauces: "tomato",
//                     cheese: [],
//                     vegetables: [],
//                     meat: [],
//                   },
//                 },
//               } as any
//             }
//           >
//             <PizzaPreview />
//           </PizzaContext.Provider>
//         </IngredientsProvider>
//       </MemoryRouter>
//     );

//     // expect(getByText("30 см на тонком тесте")).toBeInTheDocument();
//     // expect(getByText("Томатный соус")).toBeInTheDocument();
//   });

//   describe("if the user has not submitted PizzaConfigurator form", () => {
//     it("redirects to home page", () => {
//       const history = createMemoryHistory();

//       history.push(PATH.PizzaPreview);

//       render(
//         <Router history={history}>
//           <PizzaProvider>
//             <PizzaPreview />
//           </PizzaProvider>
//         </Router>
//       );

//       expect(history.location.pathname).toEqual("/");
//     });
//   });
// });
