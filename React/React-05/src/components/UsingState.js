import { useState } from "react";
function UsingState() {
  const [name, setName] = useState("Bedirhan");
  const [surname, setSurname] = useState("Balci");
  return (
    <div>
      <h1>Using State</h1>
      <hr />
      <div>
        {name} {surname}
      </div>
      <br />
      <br />
      <br />
      <button onClick={() => setName("Emirhan")}>Change Name</button>
      <button onClick={() => setSurname("BALCI")}>Change Surname</button>
    </div>
  );
}

export default UsingState;
