import { Switch, Route } from "react-router-dom";

import { Courses } from "../pages/Courses";
import { Auth } from "../pages/Auth";
import { Home } from "../pages/Home";
import { CreateAccount } from "../pages/CreateAccount";

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/calendar-lesson" component={Courses} />

      <Route exact path="/signin" component={Auth} />
      <Route exact path="/create-account" component={CreateAccount} />
    </Switch>
  );
}
