import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  const updateUser = (obj = {}) => {
    setUser(obj);
  };

  const updateRole = (obj = {}) => {
    setRole(obj);
  };

  return (
    <Context.Provider
      value={{
        user,
        role,
        updateUser,
        updateRole,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
