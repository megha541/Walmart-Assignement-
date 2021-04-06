import { useEffect, useState } from "react";
import { IDessert } from "../Interfaces/IDesserts";
import { CustomClient } from "../lib/apollo-client";
import { gql } from "@apollo/client";

function useInitialState(): {
  addToDesserts: (payload: IDessert) => void;
  removeFromDesserts: (indexList: number[]) => void;
  toggleForm: (value: boolean) => void;
  sortDesserts: (payload: IDessert[]) => void;
  state: any;
} {
  const [state, setState] = useState({ desserts: [], showForm: false });

  useEffect(() => {
    const fetcher = (async () => {
      const query = await CustomClient().query({
        query: gql`
          query {
            getDesserts {
              _id
              dessert
              nutritionInfo {
                calories
                fat
                carbs
                protein
              }
            }
          }
        `
      });
      const data = query.data.getDesserts;
      setState({ ...state, desserts: data });
    });
    fetcher();
  }, [state]);

  const addToDesserts = (payload: IDessert): void => {
    setState({
      ...state,
      // @ts-ignore
      desserts: [...state.desserts, payload]
    });
  };

  const removeFromDesserts = (payload: number[]): void => {
    const newDesserts = [...state.desserts];
    payload.forEach(item => {
      newDesserts.splice(Number(item), 1);
    });

    setState({
      ...state,
      //@ts-ignore
      desserts: newDesserts
    });
  };

  const toggleForm = (value: boolean): void => {
    setState({
      ...state,
      showForm: value
    });
  };

  const sortDesserts = (payload: IDessert[]): void => {
    setState({
      ...state,
      // @ts-ignore
      desserts: payload
    });
  };

  return {
    addToDesserts,
    removeFromDesserts,
    toggleForm,
    sortDesserts,
    state
  };
}

export default useInitialState;
