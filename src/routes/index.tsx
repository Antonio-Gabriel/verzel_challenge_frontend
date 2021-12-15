import { Switch, Route } from "react-router-dom";
import { Courses } from "../pages/Courses";
import { Home } from "../pages/Home";

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/calendar-lesson" component={Courses} />
    </Switch>
  );
}
