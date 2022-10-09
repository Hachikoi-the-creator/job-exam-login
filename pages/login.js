import React, { useRef } from "react";
// import { useStateContext } from "../context/StateContext";
// import { useRouter } from "next/router";
import clientPromise from "../lib/mongodb";
import Signup from "../components/Signup";
import Login from "../components/LogIn";

export default function LoginPage({ serverRoles }) {
  // todo: May add max & min lenght to all inputs, may as well never not
  // TODO: Remove all the default values for better UX
  return (
    <div>
      <div>
        <Signup serverRoles={serverRoles} />
      </div>
      <br />
      <hr />
      <br />
      <div>
        <Login />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db("jobTest");

    const serverRoles = await db.collection("roles").find({}).toArray();

    return {
      props: { serverRoles: JSON.parse(JSON.stringify(serverRoles)) },
    };
  } catch (e) {
    console.error(e);
  }
}
