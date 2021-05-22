import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ListingsPage from "./pages/Listing";
import ErrorPage from "./pages/Error";

function ProtectedRoute({ children, ...rest }) {
  const isAuthed = true; //TODO: Implement this
  return (
    <Route
      {...rest}
      render={() => {
        return isAuthed ? children : <Redirect to="/" />;
      }}
    />
  );
}

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ListingsPage />
        </Route>
        <ProtectedRoute exact path="/submit">
          <ErrorPage />
        </ProtectedRoute>
        <ProtectedRoute exact path="/moderate">
          <ErrorPage />
        </ProtectedRoute>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
