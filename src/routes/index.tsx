import { Switch } from "react-router-dom";

import { Route } from "./Routes";
import { Auth } from "../pages/Auth";
import { Home } from "../pages/Home";
import { Courses } from "../pages/Courses";
import { Dashboard } from "../pages/Dashboard";
import { CreateAccount } from "../pages/CreateAccount";

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/calendar-lesson" component={Courses} />

      <Route exact path="/signin" component={Auth} />
      <Route exact path="/create-account" component={CreateAccount} />

      <Route exact path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
}
