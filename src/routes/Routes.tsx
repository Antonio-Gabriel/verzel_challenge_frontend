import { ComponentType } from "react";
import { Redirect, Route as RouteRRD, RouteProps } from "react-router-dom";
import { useAuthentication } from "../hooks/useAuthentication";

interface IProps extends RouteProps {
  isPrivate?: Boolean;
  component: ComponentType;
}

export function Route({ isPrivate = false, component: Component, ...rest }: IProps) {
  const { user } = useAuthentication();
  return (
    <RouteRRD
      {...rest}
      render={({ location }) => {
        return isPrivate === (user !== undefined) ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? "/" : "/dashboard",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}
