import { createContext, useState, useContext, useCallback } from "react";
import {
  IAuthContextData,
  IAuthProviderProps,
  IAuthData,
} from "../../@Types/AuthorizationProvider";

import API from "../../Services/API";
import { useCart } from "../Cart";

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [data, setData] = useState<IAuthData>(() => {
    const user = localStorage.getItem("@KenzieBurger:user");
    const accessToken = localStorage.getItem("@KenzieBurger:accessToken");

    if (user && accessToken) {
      return { accessToken, user: JSON.parse(user) };
    }

    return {} as IAuthData;
  });

  const { setCart } = useCart();

  const signIn = useCallback(async (email: string, password: string) => {
    await API.post("/login", { email, password })
      .then((res) => {
        const { accessToken, user } = res.data;

        localStorage.setItem("@KenzieBurger:user", JSON.stringify(user));
        localStorage.setItem("@KenzieBurger:accessToken", accessToken);

        setData({ accessToken, user });
      })
      .catch((err) => console.log(err));
  }, []);

  const logOut = useCallback(() => {
    localStorage.removeItem("@KenzieBurger:user");
    localStorage.removeItem("@KenzieBurger:accessToken");
    localStorage.removeItem("@KenzieBurger:cart");
    setCart([]);
    setData({} as IAuthData);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, accessToken: data.accessToken, signIn, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
