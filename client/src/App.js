import RoutesMap from "./routes/RoutesMap";
import { Fragment } from "react";
import { NotificationContainer } from "react-notifications";

function App() {
  return (
    <Fragment>
      <RoutesMap />
      <NotificationContainer />
    </Fragment>
  );
}

export default App;
