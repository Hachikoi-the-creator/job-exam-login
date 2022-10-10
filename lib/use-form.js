// ? Custom hook
/*
 * intercept regular form submit and will send JSON data to the API endpoint.
 */
import { useState } from "react";
import Cryptr from "cryptr";

function useForm({ form, endpointUrl }) {
  const cryptr = new Cryptr("myTotallySecretKey");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    if (form) {
      e.preventDefault();
      setStatus("loading");
      setMessage("");

      const finalFormEndpoint = endpointUrl || form.action;
      console.log("hooks raw form", form.elements);

      const data = Array.from(form.elements)
        .filter((input) => input.name)
        .reduce(
          (obj, input) => Object.assign(obj, { [input.name]: input.value }),
          // {}, trying to remove the ` [Object: null prototype]`
          Object()
        );

      // encrypt psw before sending it to the server
      data.psw = cryptr.encrypt(data.psw);

      fetch(finalFormEndpoint, {
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
    }
  };

  return { handleSubmit, status, message };
}

export default useForm;
