"use client"

// import { register } from "../../actions/register"
import Auth from "../components/Login"

// import { TipLink } from "@tiplink/api";

// TipLink.create().then(tiplink => {
//   console.log("link: ", tiplink.url.toString());
//   console.log("publicKey: ", tiplink.keypair.publicKey.toBase58());
//   console.log("secretKey: ", tiplink.keypair.secretKey);
//   return tiplink;
// });

const Main = () => {

  // const create = () => {
    // const user = {
    //   name: "Chichi",
    //   email: "chiamaka.ezemba@flexisaf.com",
    //   password: "adaeze1995"
    // }
  //   register()
  // }
  return (
    <div>


        {/* <form>
            <input type="text" onChange={(e) => sessionStorage.setItem("callId", e.target.value)}/> <br/>
            <input type="date" onChange={(e) => sessionStorage.setItem("scheduledDate", e.target.value)}/>
        </form> */}

        {/* <button onClick={create}>Create User</button> */}
        {/* <button onClick={}>Create User</button> */}
<Auth/>
    </div>
  )
}

export default Main