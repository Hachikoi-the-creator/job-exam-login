import { useRef, useState } from "react";
// import useForm from "./handleSumbit";

const Form = () => {
  const formElement = useRef("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const ENDPOINT_URL = "/api/newEntry";

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    // if (form) {
    // }

    // const data = Array.from(form.elements)
    //   .filter((input) => input.name)
    //   .reduce(
    //     (obj, input) => Object.assign(obj, { [input.name]: input.value }),
    //     {}
    //   );

    // console.log(formElement.current.elements);
    // console.log(formElement.current.elements.name.value);

    const data = new Object();
    for (const el of formElement.current.elements) {
      console.log(el);
      if (el.hasAttribute("name")) {
        data[el.name] = el.value;
      }
    }
    // console.log("dataasa", data);

    fetch(ENDPOINT_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        return response.json();
      })
      .then(() => {
        setMessage("We'll be in touch soon.");
        setStatus("success");
      })
      .catch((err) => {
        setMessage(err.toString());
        setStatus("error");
      });
  };

  // const { handleSubmit, status, message } = useForm({
  //   form: formElement.current,
  // });

  if (status === "success") {
    return (
      <>
        <div>Thank you!</div>
        <div>{message}</div>
      </>
    );
  }

  if (status === "error") {
    return (
      <>
        <div>Something bad happened!</div>
        <div>{message}</div>
      </>
    );
  }

  return (
    <form
      action={ENDPOINT_URL}
      onSubmit={handleSubmit}
      method="POST"
      // target="_blank"
      ref={formElement}
    >
      <div>
        <input
          type="text"
          defaultValue={"Some cool name"}
          name="name"
          required
        />
      </div>
      <div>
        <input type="text" defaultValue={"69"} name="age" required />
      </div>
      {
        // (status !== "loading"
        true && (
          <div className="mb-3 pt-0">
            <button
              type="submit"
              // onClick={() => console.log(formElement.current)}
            >
              Send a message
            </button>
          </div>
        )
      }
      <div>{("MESSAGE: ", message)}</div>
      <div>{("STATUS: ", status)}</div>
    </form>
  );
};

export default Form;
