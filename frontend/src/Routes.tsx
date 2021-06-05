import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "./pages/Layout";
import { AuthRoute, PublicRoute } from "./auth";
import { MainWrapper } from "./pages/Layout/MainWrapper";
import { Graph } from "./pages/Graph";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Context } from "./context/Context";
import { refresh } from "./services/user";
import { EnhancedToastify } from "./components/EnhancedToastify";

const DashboardPanel = () => (
  <Switch>
    <Route path="/dashboard" component={Graph} />
  </Switch>
);

const wrappedRoutes = () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Route path="/dashboard" component={DashboardPanel} />
    </div>
  </div>
);

export const Routes: React.FC = () => {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    (async function resources() {
      if (state.accessToken.length > 0) {
        const {
          data: { status, message },
        } = await refresh(state.accessToken);

        if (status === 201) {
          dispatch({
            type: "EXPIRED_STATE",
            id: "",
            username: "",
            accessToken: "",
            authenticated: false,
          });
          EnhancedToastify("error", message);
        }
      }
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <MainWrapper>
        <main>
          <Switch>
            <PublicRoute
              exact
              path="/"
              Component={SignIn}
              isAuth={state.authenticated}
            />
            <PublicRoute
              exact
              path="/login"
              Component={SignIn}
              isAuth={state.authenticated}
            />
            <PublicRoute
              exact
              path="/signup"
              Component={SignUp}
              isAuth={state.authenticated}
            />
            <AuthRoute
              path="/dashboard"
              Component={wrappedRoutes}
              isAuth={state.authenticated}
            />
          </Switch>
        </main>
      </MainWrapper>
    </Router>
  );
};
