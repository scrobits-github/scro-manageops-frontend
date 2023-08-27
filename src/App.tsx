import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/app/store";
import { LoggedOutRouteConfig } from "./routes/RouteConfig";
import LayoutComponent from "./components/layout";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("loggedIn") === "true") {
      console.log("user true");
      setIsLoggedIn(!isLoggedIn);
    } else {
      console.log("user not true");
      setIsLoggedIn(isLoggedIn);
    }
  }, []);
  if (!isLoggedIn) {
    return (
      <BrowserRouter>
        <LoggedOutRouteConfig />
      </BrowserRouter>
    );
  } else {
    return (
      <>
        <Provider store={store}>
          <BrowserRouter>
            <LayoutComponent />
          </BrowserRouter>
        </Provider>
      </>
    );
  }
}

export default App;
