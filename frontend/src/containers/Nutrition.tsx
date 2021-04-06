import { ReactElement, useContext } from "react";
import { List } from "../components/List";
import { Form } from "../components/Form";
import AppContext, { TypeContext } from "../context/context";

export function Nutrition(): ReactElement {
  const title = "Nutrition List";
  const headers = ["", "Dessert", "Calories", "Fat", "Carbs", "Protein"];
  const {
    state: { showForm }
  } = (useContext(AppContext) as unknown) as TypeContext;

  return (
    <div>
      <List title={title} headers={headers} />
      {showForm && <Form />}
    </div>
  );
}
