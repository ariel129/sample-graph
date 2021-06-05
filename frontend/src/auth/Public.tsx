import React from "react";
import { Redirect, Route, RouteComponentProps } from "react-router-dom";

interface Props {
  Component: React.FC<RouteComponentProps>;
  path: string;
  exact?: boolean;
  isAuth: boolean;
}

export const PublicRoute = ({
  Component,
  path,
  exact = false,
  isAuth,
}: Props): JSX.Element => {
  return (
    <Route
      exact={exact}
      path={path}
      render={(props: RouteComponentProps) =>
        isAuth === false ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/dashboard",
              state: {
                requestedPath: path,
              },
            }}
          />
        )
      }
    />
  );
};
