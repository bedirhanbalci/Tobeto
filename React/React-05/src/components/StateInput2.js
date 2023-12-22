import { useState } from "react";

function StateInput2() {
  const [user, setUser] = useState({
    name: "Bedirhan",
    surname: "Balci",
    age: 24,
  });

  const onChangeValue = event => {
    var inputName = event.target.name;

    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <h1>StateInput2</h1>
      <hr />
      <div>
        {user.name} {user.surname} {user.age}
      </div>
      <br />
      <div>
        <input
          name="name"
          type="text"
          placeholder="name"
          value={user.name}
          onChange={onChangeValue}
        />
        <input
          name="surname"
          type="text"
          placeholder="surname"
          value={user.surname}
          onChange={onChangeValue}
        />
        <input
          name="age"
          type="number"
          placeholder="age"
          value={user.age}
          onChange={onChangeValue}
        />
      </div>
      <br />
    </div>
  );
}

export default StateInput2;
