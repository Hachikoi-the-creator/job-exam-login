import { useRef } from "react";
// import { useRouter } from "next/router";
// import { useStateContext } from "../context/StateContext";
import useForm from "../lib/use-form";

const FORM_ENDPOINT = "/api/newEntry";

export default function Login() {
  const formElement = useRef();

  const { handleSubmit, status, message } = useForm({
    form: formElement.current,
  });

  if (status === "success") {
    // or change some states
    console.log("All went well! prob - Login comp");
  }

  if (status === "error") {
    // or change some states
    console.log("Some error happened - Login comp");
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
      {/* email */}
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="Your email"
          name="email"
          id="email"
          required
          defaultValue={"email@gummymail.com.mu"}
        />
      </div>

      {/* psw */}
      <div>
        <label htmlFor="psw">Password:</label>
        <input
          type="text"
          placeholder="Your psw"
          name="psw"
          id="psw"
          required
          defaultValue={"my psw is..."}
        />
      </div>
      {status !== "loading" && (
        <div>
          <button type="submit">LOG IN</button>
        </div>
      )}
    </form>
  );
}
