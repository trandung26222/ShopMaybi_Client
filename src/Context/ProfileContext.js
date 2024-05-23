import { createContext } from "react";
import { useState } from "react";
export const ProfileContext = createContext({});

export const ProfileProvider = ({ children }) => {
  const [key, setKey] = useState("testcontext");
  return (
    <ProfileContext.Provider value={{ key, setKey }}>
      {children}
    </ProfileContext.Provider>
  );
};
