import { useState, useEffect } from "react";

function MountUnmount() {
  const [number, setNumber] = useState(10);
  const [text, setText] = useState("Lorem");

  // mount olayı için yapılacak işlemleri döndüğümüz metot.
  useEffect(() => {
    console.log("MountUnmount component DOM'a eklendi.");

    return () => {
      // unmount olayı için yapılacak işlemleri döndüğümüz metot.
      console.log("MountUnmount component DOM'dan kaldırıldı.");
    };
  }, []);

  return (
    <div>
      <h1>Using MountUnmount</h1>
      <hr />
      <div>
        <h2>{number}</h2>
        <button onClick={() => setNumber(number + 1)}>Increase</button>
      </div>

      <br />
      <br />
      <div>
        <h2>{text}</h2>
        <button onClick={() => setText("ipsum")}>Change Text</button>
      </div>
    </div>
  );
}
export default MountUnmount;
