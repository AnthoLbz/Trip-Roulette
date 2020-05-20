import React from "react";
import { Switch, Route } from "react-router-dom";
import TravelChoice from "./components/TravelChoice";
import GoTravel from './components/GoTravel'

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={TravelChoice} />
        <Route path="/travel" component={GoTravel} />


      </Switch>
    </>
  );
};

export default Router;
