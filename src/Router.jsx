import React from "react";
import { Switch, Route } from "react-router-dom";
import TravelChoice from "./components/TravelChoice";

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={TravelChoice} />
      </Switch>
    </>
  );
};

export default Router;
