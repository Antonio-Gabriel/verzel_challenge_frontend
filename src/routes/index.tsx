import { Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";

export function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/calendar-lesson" component={Home} />
    </Switch>
  );
}
