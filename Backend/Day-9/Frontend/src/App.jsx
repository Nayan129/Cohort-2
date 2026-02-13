import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setusers] = useState([]);

  // fetch user method
  function fetchUsers() {
    axios.get("https://cohort-2-kv4u.onrender.com/api/users").then((res) => {
      setusers(res.data.users);
    });
  }

  // delete user method
  function deleteUser(id) {
    axios
      .delete(`https://cohort-2-kv4u.onrender.com/api/users/` + id)
      .then((res) => {
        fetchUsers();
      });
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  // create user when user click on create button
  function submitHandler(e) {
    e.preventDefault();

    const { name, role } = e.target.elements;
    console.log(name.value, role.value);

    axios
      .post("https://cohort-2-kv4u.onrender.com/api/users", {
        name: name.value,
        role: role.value,
      })
      .then((res) => {
        console.log(res.data);

        fetchUsers();
      });

    name.value = "";
    role.value = "";
  }

  return (
    <>
      <form className="create-user-form" onSubmit={(e) => submitHandler(e)}>
        <input name="name" type="text" placeholder="enter name" required />
        <input name="role" type="text" placeholder="enter role" required />
        <button>create user</button>
      </form>

      <div className="users">
        {users.map((user) => {
          return (
            <div className="user" key={user._id}>
              <h1>{user.name}</h1>
              <h5>{user.role}</h5>

              <div className="btn">
                <button
                  onClick={() => {
                    deleteUser(user._id);
                  }}
                >
                  delete
                </button>

                <button>update</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
