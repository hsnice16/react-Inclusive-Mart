import React, { useEffect, useReducer } from "react";
import axios from "axios";
import { HomeHeading } from "./shared";
import { getEmptyArrayOfObjects, ROUTE_HOME } from "../../utils";
import { ProductCard } from "../../components";
import {
  sharedInitialReducerState,
  sharedReducer,
  ACTION_TYPE_ERROR,
  ACTION_TYPE_LOADING,
  ACTION_TYPE_SUCCESS,
} from "../../reducer";

const ShopNowSection = () => {
  const [products, dispatch] = useReducer(
    sharedReducer,
    sharedInitialReducerState
  );
  const { status, data } = products;

  useEffect(() => {
    (async () => {
      dispatch({ type: ACTION_TYPE_LOADING });

      try {
        const response = await axios.get("/api/products/home");

        dispatch({
          type: ACTION_TYPE_SUCCESS,
          payload: response.data.products,
        });
      } catch (error) {
        dispatch({
          type: ACTION_TYPE_ERROR,
          payload: "Error: Something is Wrong",
        });
      }
    })();
  }, []);

  return (
    <section className="py-2">
      <HomeHeading headingText="Shop now, Best Deal only for You" />

      <ul className="align-i-ctr flex flex-wrap justify-c-sa">
        {status === "loading" &&
          getEmptyArrayOfObjects(5).map(({ _id }) => (
            <li key={_id} className="my-1">
              <ProductCard loading={true} />
            </li>
          ))}

        {status === "success" &&
          data.map(({ _id, ...details }) => (
            <li key={_id} className="my-1">
              <ProductCard details={details} cardIsOnPage={ROUTE_HOME} />
            </li>
          ))}
      </ul>
    </section>
  );
};

export { ShopNowSection };
