import { ReactElement } from "react";

export function ItemList({ item, index ,selectItem }: {item: any, index?:number, selectItem: Function}): ReactElement {
  return (
    <tr className="stripe-dark">
      <td className="pa3">
        <input
          className="mr2"
          type="checkbox"
          id={item.id}
          value={item.dessert}
          onClick={(event) => selectItem(event, index)}
        />
      </td>
      <td className="pa3">{item.dessert}</td>
      <td className="pa3">{item.nutritionInfo.calories}</td>
      <td className="pa3">{item.nutritionInfo.carbs}</td>
      <td className="pa3">{item.nutritionInfo.fat}</td>
      <td className="pa3">{item.nutritionInfo.protein}</td>
    </tr>
  );
}
