import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

const useRestaurantAuth = () => {
  const [auth, setAuth] = useState({ isLoggedIn: false, isRestaurant: false });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const id = localStorage.getItem("id");
    const role = localStorage.getItem("role");
    if (id && role === "RESTAURANT") {
      setAuth({ isLoggedIn: true, isRestaurant: true });
    }
    setIsLoading(false);
  }, []);

  return { auth, isLoading };
};

const RestaurantPrivateRoutes = () => {
  const { auth, isLoading } = useRestaurantAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return auth.isLoggedIn && auth.isRestaurant ? <Outlet /> : <Navigate to="/rlogin" />;
};

export default RestaurantPrivateRoutes; 