import { useContext, useRef } from "react";
import { InputForm } from "./InputForm";
import { ButtonForm } from "./ButtonForm";
import Icon from "./Icon";
import AppContext, { TypeContext } from "../context/context";
import { IDessert } from "../Interfaces/IDesserts";

export function Form() {
  const { addToDesserts, toggleForm } = (useContext(
    AppContext
  ) as unknown) as TypeContext;
  const formRef = useRef<HTMLFormElement>(null);

  const closeForm = () => () => toggleForm(false);

  const saveEntry = () => {
    if (formRef && formRef.current) {
      const data = new FormData(formRef.current);
      const payload: IDessert = {
        dessert: data.get("Dessert"),
        nutritionInfo: {
          calories: data.get("Calories"),
          fat: data.get("Fat"),
          carbs: data.get("Carbs"),
          protein: data.get("Protein")
        }
      };
      addToDesserts(payload);
      formRef.current.reset();
      closeForm();
    }
  };

  return (
    <div className="sans-serif w-90  black-80 mw6 center relative cover bg-top mt2">
      <div className="relative pa4 pa5-m">
        <div className="tracked  mb4 pv2 tc bg-gold">
          <Icon type="alert" /> Please fill the details before you submit
        </div>
        <form id="addDessert" ref={formRef}>
          <InputForm name="Dessert" type="text" required />
          <InputForm name="Calories" type="text" required />
          <InputForm name="Fat" type="text" required />
          <InputForm name="Carbs" type="text" required />
          <InputForm name="Protein" type="text" required />
          <ButtonForm
            label="Submit"
            type="button"
            action={saveEntry}
            classname="input-reset w-100 light-gray br2 tracked pv2 ph2 pointer bg-dark-green hover-bg-blue bn"
          >
            <Icon type="check" />
          </ButtonForm>
        </form>
      </div>
    </div>
  );
}
