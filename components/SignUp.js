import { useRef } from "react";
// import { useRouter } from "next/router";
// import { useStateContext } from "../context/StateContext";
import useForm from "../lib/use-form";

const FORM_ENDPOINT = "/api/newEntry";

export default function Signup({ serverRoles }) {
  // Skyrim and some random ideas :D
  const bloodTypes = [
    "Altmer",
    "Dunmer",
    "Orsimer",
    "Bosmer",
    "Fluorescent",
    "Blue",
    "Red",
  ];

  const formElement = useRef();

  const { handleSubmit, status, message } = useForm({
    form: formElement.current,
  });

  if (status === "success") {
    // or change some states
    console.log("All went well! prob");
  }

  if (status === "error") {
    // or change some states
    console.log("Some error happened");
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
      ref={formElement}
      className="container"
    >
      {/* name */}
      <div>
        <label htmlFor="bloodType">First name:</label>
        <input
          type="text"
          placeholder="Write your first name"
          name="name"
          required
          defaultValue={"Jotaro"}
        />
      </div>

      {/* age */}
      <div>
        <label htmlFor="bloodType">Age:</label>
        <input
          type="number"
          placeholder="Write your age"
          name="age"
          required
          defaultValue={18}
        />
      </div>

      {/* email */}
      <div>
        <label htmlFor="bloodType">Email:</label>
        <input
          type="email"
          placeholder="Your email"
          name="email"
          required
          defaultValue={"email@gummymail.com.mu"}
        />
      </div>

      {/* psw */}
      <div>
        <label htmlFor="bloodType">Password:</label>
        <input
          type="text"
          placeholder="Your psw"
          name="psw"
          required
          defaultValue={"my psw is..."}
        />
      </div>

      {/* rol */}
      {/* <div>
        <label htmlFor="rol">Label yourself:</label>
        <select name="rol" id="rol">
          {serverRoles.map((role) => (
            <option defaultValue={role.name} key={role._id}>
              {role.name}
            </option>
          ))}
        </select>
      </div> */}

      {/* favourtie movie */}
      <div>
        <label htmlFor="bloodType">Fav movie:</label>
        <input
          type="text"
          placeholder="Your psw"
          name="psw"
          required
          defaultValue={"Violet Evergarden"}
        />
      </div>

      {/* Blood type */}
      {/* <div>
        <label htmlFor="bloodType">Blood Type:</label>
        <select name="bloodType" id="bloodType">
          {bloodTypes.map((type, i) => (
            <option defaultValue={type} key={i}>
              {type}
            </option>
          ))}
        </select>
      </div> */}

      {status !== "loading" && (
        <div>
          <button type="submit">SIGN UP</button>
        </div>
      )}
    </form>
  );
}
