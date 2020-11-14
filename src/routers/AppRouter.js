import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ContactComponent from "../components/ContactComponent";
import Header from "../components/Header";
import NotFoundPage from "../components/NotFoundPage";
import PortfolioDashboardPage from "../components/PortfolioDashboardPage";
import PortfolioItem from "../components/PortfolioItem";
import PortfolioItemPage from "../components/PortfolioItemPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact={true} path="/" component={PortfolioDashboardPage} />
        <Route path="/portfolio/:id" component={PortfolioItemPage} />
        <Route exact={true} path="/portfolio" component={PortfolioItem} />
        <Route path="/contact" component={ContactComponent} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
