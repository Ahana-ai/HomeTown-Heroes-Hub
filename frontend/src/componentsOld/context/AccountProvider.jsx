import { createContext, useState } from "react";

export const AccountContext = createContext();

const AccountProvider = ({ chilren }) => {
  const [account, setAccount] = useState("Ahana");

  return (
    <>
      <AccountContext.Provider
        value={{
          account,
          setAccount,
        }}
      >
        {chilren}
      </AccountContext.Provider>
    </>
  );
};

export default AccountProvider;