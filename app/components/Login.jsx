"use client";
import { WALLET_ADAPTERS } from "@web3auth/base";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { web3auth } from "../../lib/auth";
import { register } from "../../actions/register";
import Modal from "./Modal";

const Login = () => {
  const { setProvider, setLoggedIn, solanaWallet, setAuthenicatedUser } =
    useContext(AuthContext);

  const login = async (provider) => {
    const web3authProvider = await web3auth.connectTo(
      WALLET_ADAPTERS.OPENLOGIN,
      {
        loginProvider: provider,
      }
    );
    setProvider(web3authProvider);
    if (web3auth.connected) {
      setLoggedIn(true);
    }

    const userInfo = await web3auth.getUserInfo();
    const accounts = await solanaWallet.requestAccounts();

    console.log({userInfo})

    const user = {
      name: userInfo?.name,
      email: userInfo?.email,
      image: userInfo?.profileImage,
      wallet: accounts[0],
    };
    console.log(user)
    const signedInUser = await register(user);

    setAuthenicatedUser(signedInUser);
    
    // setClose(false)
  };

  const logout = async () => {
    await web3auth.logout();
    setProvider(null);
    setLoggedIn(false);
    console.log("successful");
  };
  return (
    <Modal bgColor={"bg-white"}>
      <div className="w-[30%] mx-auto border mt-10 p-8 flex flex-col items-center justify-between rounded-lg">
        <p className="my-5 text-lg">Log in or Sign up</p>
        <button
          className="flex flex-row items-center  border rounded-lg w-[100%] p-3 shadow-md"
          onClick={() => login("google")}
        >
          <FcGoogle className="text-lg mx-5" /> Continue with Google
        </button>
        <button
          className="flex flex-row items-center border rounded-lg w-[100%] p-3 shadow-md my-5 content-center"
          onClick={() => login("twitter")}
        >
          <FaTwitter className="text-lg mx-5" /> 
          
          <p> Continue with Twitter</p>
        </button>
        <button
          className="flex flex-row items-center  border rounded-lg w-[100%] p-3 shadow-md mb-5"
          onClick={() => login("facebook")}
        >
          <BsFacebook className="text-lg mx-5" /> Continue with Facebook
        </button>
        <div className="flex flex-row items-center justify-between">
          <hr className="border w-full" />
          <p>Or</p>
          <hr className="border w-full" />
        </div>

        <div className="w-full">
          <input type="text" className="w-full border my-5 p-3 focus:outline-none rounded-md" placeholder="Enter your email"/>
          <button className="rounded-lg w-[100%] p-3 shadow-md mb-5 text-center bg-[#3B5390] text-white">
            Continue
          </button>
        </div>
        <button className="flex flex-row items-center justify-between border w-[100%] p-5 shadow-md" onClick={logout}>Logout</button> 
      </div>
    </Modal>
  );
};

export default Login;

{
  /* <button className="flex flex-row items-center justify-between border w-[100%] p-5 shadow-md" onClick={logout}>Logout</button> */
}
