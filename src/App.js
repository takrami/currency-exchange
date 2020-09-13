import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "./pages/main/main.component";
import NotFound from "./pages/not-found/not-found.component";

function App() {
  return (
    <Switch>
      <Route path="/" component={Main} exact />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
