import { useEffect, useState } from "react";

import HomePageIfNotAuthenticated from "./HomePageIfNotAuthenticated";
import HomePageIfAuthenticated from "./HomePageIfAuthenticated";

const HomePage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    if (document.cookie.includes("username=")) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [document.cookie]);

  const getUsernameCookie = () => {
    var username = "username=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(username) == 0)
        return c.substring(username.length, c.length);
    }
    return null;
  };

  const [currentUser, setCurrentUser] = useState(getUsernameCookie());

  return isAuthenticated ? (
    <HomePageIfAuthenticated currentAuthenticatedUser={currentUser} />
  ) : (
    <HomePageIfNotAuthenticated />
  );
};

export default HomePage;
