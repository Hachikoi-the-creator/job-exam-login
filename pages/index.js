import { useRouter } from "next/router";
import { useEffect } from "react";
import RoleSpecific from "../components/RoleSpecific";
import { useStateContext } from "../context/StateContext";

export default function index() {
  const router = useRouter();
  const { user, role, updateUser, updateRole } = useStateContext();

  const logoutHandler = () => {
    localStorage.removeItem("role-info");
    localStorage.removeItem("name");
    router.reload();
  };

  useEffect(() => {
    // for some reason needs an useEffect (docs)
    (() => {
      if (!user && !localStorage.getItem("name")) {
        router.push("/login");
      } else {
        updateUser({
          name: JSON.parse(localStorage.getItem("name")),
        });

        updateRole(JSON.parse(localStorage.getItem("role-info")));
      }
    })();
  }, []);

  if (!user) {
    return "login pls";
  } else {
    return (
      <div>
        <p>Hello {user["name"]} have a nice day!</p>
        <h1>Main page</h1>
        <RoleSpecific roleValue={role} />
        <div>
          <button onClick={logoutHandler}>Log Out</button>
        </div>
      </div>
    );
  }
}
