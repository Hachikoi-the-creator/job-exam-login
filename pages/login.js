import React, { useRef } from "react";
import { useStateContext } from "../context/StateContext";
import { useRouter } from "next/router";
import clientPromise from "../lib/mongodb";

export default function LoginPage({ serverRoles }) {
  const { updateUser, updateRole } = useStateContext();
  const firstName = useRef();
  const userEmail = useRef();
  const userPsw = useRef();
  const rol = useRef();
  const bloodT = useRef();
  const favMovie = useRef();
  const age = useRef();
  // login
  const loginEmail = useRef();
  const loginPsw = useRef();

  const router = useRouter();

  // console.log(email.current.value);, example because I keep forgetting lol
  // TODO: Fix the form by adding the handler inside the form tag, as action
  const signupFormHandler = async (e) => {
    e.preventDefault();
    // console.log(rol.current.value);

    // TODO: make new entry to the DB whit user state
    const sendToDb = {
      email: userEmail.current.value,
      psw: userPsw.current.value,
      rol: rol.current.value,
      name: firstName.current.value,
      age: age.current.value,
      favMovie: favMovie.current.value,
      bloodType: bloodT.current.value,
    };
    console.log(sendToDb);

    // const data = new FormData();
    // data.append("json", sendToDb);
    const send = JSON.stringify(sendToDb);

    // worked on browser wth
    const rawResponse = await fetch("/api/newEntry", {
      method: "POST",
      body: send,
    });

    // console.log(rawResponse);

    // TODO: add external function to verify user inputs
    updateUser(sendToDb);

    const rolApi = await fetch(`/api/roles/${rol.current.value}`)
      .then((res) => res.json())
      .then((res) => res[0]);

    updateRole(rolApi);

    localStorage.setItem("name", JSON.stringify(sendToDb.name));
    localStorage.setItem("role-info", JSON.stringify(rolApi));
    if (true) {
      router.replace("/");
    }
  };

  const loginFormHandler = async (e) => {
    e.preventDefault();
    // TODO: check if the password && email in the db is correct, if not only say that one or botch are wrong
    const loginDB = {
      email: loginEmail.current.value,
      psw: loginPsw.current.value,
    };
    console.log(loginDB);
  };

  // todo: May add max & min lenght to all inputs, may as well never not
  // TODO: Remove all the default values for better UX
  return (
    <div>
      <h2>Sign Up Form</h2>
      <form action="#" method="post" className="container">
        <label htmlFor="userEmail">Email</label>
        <input
          type="text"
          placeholder="An Email"
          id="userEmail"
          ref={userEmail}
          defaultValue="email@gamil.com"
        />

        <label htmlFor="userPsw">Password</label>
        <input
          type="password"
          placeholder="A password"
          id="userPsw"
          ref={userPsw}
          defaultValue="psw123"
        />

        <label htmlFor="rol">Label yourself:</label>
        <select name="rol" id="rol" ref={rol}>
          {serverRoles.map((role) => (
            <option defaultValue={role.name} key={role._id}>
              {role.name}
            </option>
          ))}
        </select>

        <label htmlFor="firstName">Name</label>
        <input
          type="text"
          placeholder="yor firstName"
          ref={firstName}
          defaultValue="Jotaro Joestar"
        />

        <label htmlFor="age">Age</label>
        <input
          type="number"
          placeholder={22}
          id="age"
          ref={age}
          defaultValue={13}
        />

        <label htmlFor="favMovie">Favourite Movie</label>
        <input
          type="text"
          placeholder="Your fav movie"
          id="favMovie"
          ref={favMovie}
          defaultValue="back from the future"
        />

        <label htmlFor="bloodT">Blood Type</label>
        {/* UPDATE: may do another dropdown here, may not */}
        <input
          type="text"
          placeholder="A blood type"
          id="bloodT"
          ref={bloodT}
          defaultValue="maybe A+"
        />

        <button onClick={signupFormHandler}>Sign Up</button>
      </form>

      {/* ------------ Login ---------------- */}

      <h2>Login Form</h2>
      <form action="#" method="get" className="container">
        <label htmlFor="loginEmail">Email</label>
        <input
          type="text"
          placeholder="An Email"
          id="loginEmail"
          ref={loginEmail}
          maxLength={30}
          defaultValue="mailto@mailg.mxn"
        />

        <label htmlFor="loginPsw">Password</label>
        <input
          type="password"
          placeholder="An Email"
          id="loginPsw"
          ref={loginPsw}
          maxLength={20}
          defaultValue="secure psw 123"
        />

        <button onClick={loginFormHandler}>Log In</button>
      </form>
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
