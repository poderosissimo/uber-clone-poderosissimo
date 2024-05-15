import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RideDetailsList } from "./rideDetails/RideDetailsList";
import { RideDetailsCreate } from "./rideDetails/RideDetailsCreate";
import { RideDetailsEdit } from "./rideDetails/RideDetailsEdit";
import { RideDetailsShow } from "./rideDetails/RideDetailsShow";
import { RideRequestList } from "./rideRequest/RideRequestList";
import { RideRequestCreate } from "./rideRequest/RideRequestCreate";
import { RideRequestEdit } from "./rideRequest/RideRequestEdit";
import { RideRequestShow } from "./rideRequest/RideRequestShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"RideService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="RideDetails"
          list={RideDetailsList}
          edit={RideDetailsEdit}
          create={RideDetailsCreate}
          show={RideDetailsShow}
        />
        <Resource
          name="RideRequest"
          list={RideRequestList}
          edit={RideRequestEdit}
          create={RideRequestCreate}
          show={RideRequestShow}
        />
      </Admin>
    </div>
  );
};

export default App;
