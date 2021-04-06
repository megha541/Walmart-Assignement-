import { useContext, useState, SyntheticEvent } from "react";
import { ItemList } from "./ItemList";
import AppContext, { TypeContext } from "../context/context";
import { nestedSort } from "../helpers/functions";
import { ButtonForm } from "./ButtonForm";
import Icon from "./Icon";

export function List({
  headers,
  title
}: {
  headers: string[];
  title?: string;
}) {
  const {
    state: { desserts },
    sortDesserts,
    toggleForm,
    removeFromDesserts
  } = (useContext(AppContext) as unknown) as TypeContext;

  const [order, setOrder] = useState(true);
  const [itemsSelected, setItemsSelected] = useState(0);
  const [indexSelected, setIndexSelected] = useState([]);

  const sortColumn = (column: string) => {
    const sortedDesserts = [...desserts].sort(
      nestedSort("nutritionInfo", column.toLowerCase(), order ? "asc" : "desc")
    );
    setOrder(!order);
    sortDesserts(sortedDesserts);
  };

  const selectAll = () => {
    //TODO
  };

  const selectItem = (event: SyntheticEvent, index: number) => {
    let target = event.target as HTMLInputElement;
    setItemsSelected(target.checked ? itemsSelected + 1 : itemsSelected - 1);
    // @ts-ignore
    setIndexSelected([...indexSelected, index]);
  };

  const handleDelete = () => {
    console.log('indexSelected', indexSelected);
    removeFromDesserts(indexSelected)
  };

  return desserts ? (
    <div className="pa4">
      <div className="overflow-auto">
        <div className="f6 w-100 mw8 center">
          <div className="f6 w-100 flex items-center">
            <div className="fl w-80">
              <h1>{title}</h1>
            </div>
            <div className="fl w-20 flex justify-end items-center">
              <ButtonForm
                label="reset data"
                classname=" f6 link dim br2 bn ph3 pv2 dib ttu white bg-dark-green"
                type="button"
                action={() => window.location.reload()}
              >
                <Icon styles={{ color: "white", size: "1.2em" }} type="reset" />
              </ButtonForm>
            </div>
          </div>
          <div className="fl w-100  bg-washed-red pa2">
            <div className="fl w-70 dark-pink pa2">
              {itemsSelected} selected
            </div>
            <div className="fl w-30 tc flex  justify-end">
              <div className="pr3">
                <ButtonForm
                  label="add new"
                  classname="f6 link dim br2 ba black bn bw1 ph3 pv2  dib ttu"
                  type="button"
                  action={() => toggleForm(true)}
                >
                  <Icon
                    styles={{ color: "black", size: "1.2em" }}
                    type="plus"
                  />
                </ButtonForm>
              </div>
              <div>
                <ButtonForm
                  label="delete"
                  classname="f6 link dim br2 white bw1 ph3 bn pv2 ttu  dib bg-light-red"
                  type="button"
                  action={handleDelete}
                >
                  <Icon
                    styles={{ color: "white", size: "1.2em" }}
                    type="trash"
                  />
                </ButtonForm>
              </div>
            </div>
          </div>
        </div>
        <table className="f6 w-100 mw8 center" cellSpacing="0">
          <thead>
            <tr className="stripe-dark">
              {headers.length > 0
                ? headers.map(head =>
                  head === "" ? (
                    <th className="fw6 tl pa3 bg-white" key={head}>
                      <input
                        className="mr2"
                        type="checkbox"
                        id="all"
                        value="all"
                        onClick={() => selectAll()}
                      />
                    </th>
                  ) : (
                    <th
                      className="fw6 tl pa3 bg-white pointer"
                      key={head}
                      onClick={() => sortColumn(head)}
                    >
                      {head}
                    </th>
                  )
                )
                : null}
            </tr>
          </thead>
          <tbody className="lh-copy">
            {desserts.length > 0
              ? desserts.map((item: any, index: number) => (
                <ItemList item={item} key={item.id} selectItem={selectItem} index={index} />
              ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  ) : null;
}
