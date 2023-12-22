import { useState } from "react";
function StateInput() {
  const [name, setName] = useState("Bedirhan");
  const [surname, setSurname] = useState("Balci");
  const [age, setAge] = useState(24);

  const onChangeName = event => setName(event.target.value);
  const onChangeSurname = event => setSurname(event.target.value);
  const onChangeAge = event => setAge(event.target.value);

  return (
    <div>
      <h1>StateInput</h1>
      <hr />
      <div>
        {name} {surname} {age}
      </div>
      <br />
      <div>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={onChangeName}
        />
        <input
          type="text"
          placeholder="surname"
          value={surname}
          onChange={onChangeSurname}
        />
        <input
          type="number"
          placeholder="age"
          value={age}
          onChange={onChangeAge}
        />
      </div>
      <br />
    </div>
  );
}

export default StateInput;
