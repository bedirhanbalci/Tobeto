import { useState } from "react";
function StateObject() {
  const [user, setUser] = useState({
    name: "Bedirhan",
    surname: "Balci",
    age: 24,
  });

  return (
    <div>
      <h1>State Array</h1>
      <hr />
      <div>
        {user.name} {user.surname} {user.age}
      </div>

      <br />
      <br />
      <button onClick={() => setUser({ ...user, age: 22 })}>Change Age</button>

      <button
        onClick={() =>
          setUser({ ...user, name: "Emirhan", surname: "BALCI", age: 22 })
        }
      >
        Change User Info
      </button>
    </div>
  );
}

export default StateObject;
