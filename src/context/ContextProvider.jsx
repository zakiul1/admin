import axiosCall from "../../axios-client";
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
  const [updateHead, setupdateHead] = useState(1);
  const [expenseHeadParent, setexpenseHeadParent] = useState([]);
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
    console.log("Calling Function");
  }, [updateHead]);
  const getExpenseHeadData = async (url) => {
    await axiosCall
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
        updateHead,
        setupdateHead,
        getExpenseHeadData,
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
