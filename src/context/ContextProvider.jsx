import axios from "axios";
import { useContext, useState, createContext, useEffect } from "react";

const StateContext = createContext({
  user: null,
  token: null,
  setUser: () => {},
  setToken: () => {},
});

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, _setToken] = useState(1);
  const [expenseHeadParent, setexpenseHeadParent] = useState(null);
  const setToken = (token) => {
    _setToken(token);
    if (token) {
      localStorage.setItem("ACCESS_TOKEN", token);
    } else {
      localStorage.removeItem("ACCESS_TOKEN");
    }
  };

  //getExpenseHeadData
  useEffect(() => {
    getExpenseHeadData("/expense-head");
  }, []);
  const getExpenseHeadData = async (url) => {
    await axios
      .get(url)
      .then((res) => {
        setexpenseHeadParent(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //getExpenseHeadData
  //console.log(expenseHeadParent);
  return (
    <StateContext.Provider
      value={{
        expenseHeadParent,
        setexpenseHeadParent,
        user,
        setUser,
        setToken,
        token,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
