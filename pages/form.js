import { useRef } from "react";
import useForm from "../lib/use-form.js";

const FORM_ENDPOINT = "/api/newEntry";

const Form = () => {
  const formElement = useRef();
  const additionalData = {
    sent: new Date().toISOString(),
  };

  const { handleSubmit, status, message } = useForm({
    form: formElement.current,
    additionalData,
  });

  if (status === "success") {
    // or change some states
    return (
      <>
        <div>Thank you!</div>
        <div>{message}</div>
      </>
    );
  }

  if (status === "error") {
    // or change some states
    return (
      <>
        <div>Something bad happened!</div>
        <div>{message}</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
      ref={formElement}
    >
      <div>
        <input
          type="text"
          placeholder="Your name"
          name="name"
          required
          defaultValue={"my name is..."}
        />
      </div>
      {status !== "loading" && (
        <div>
          <button type="submit">Send a message</button>
        </div>
      )}
    </form>
  );
};

export default Form;
