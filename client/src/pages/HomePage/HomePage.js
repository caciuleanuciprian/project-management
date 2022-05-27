import { useEffect, useState } from "react";

import HomePageIfNotAuthenticated from "./HomePageIfNotAuthenticated";
import HomePageIfAuthenticated from "./HomePageIfAuthenticated";

const HomePage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    if (document.cookie.includes("username=")) {
      setIsAuthenticated(true);
    }
    console.log("asd");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [document.cookie]);
  return isAuthenticated ? (
    <HomePageIfAuthenticated />
  ) : (
    <HomePageIfNotAuthenticated />
  );
};

export default HomePage;
