"use client";

import { useState, useEffect, createContext } from "react";
import { SolanaWallet } from "@web3auth/solana-provider";
import { web3auth } from "../lib/auth";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [provider, setProvider] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [products, setProducts] = useState([]);
  const [authenicatedUser, setAuthenicatedUser] = useState(null)
  const solanaWallet = new SolanaWallet(provider);

  console.log({authenicatedUser})
  console.log({products})

  useEffect(() => {
    const init = async () => {
      try {
        await web3auth.init();
        setProvider(web3auth.provider);

        if (web3auth.connected) {
          setLoggedIn(true);
        }
      } catch (error) {
        console.error(error);
      }
    };

    init();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        provider,
        setProvider,
        loggedIn,
        setLoggedIn,
        authenicatedUser,
        products,
        setProducts,
        setAuthenicatedUser,
        solanaWallet
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
