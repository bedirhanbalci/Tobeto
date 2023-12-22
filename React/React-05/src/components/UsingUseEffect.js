import { useState, useEffect } from "react";

function UsingUseEffect() {
  const [number, setNumber] = useState(10);
  const [text, setText] = useState("Lorem");

  //   useEffect(() => {
  //     console.log(
  //       "useEffect tüm state'e eklenmiş değişkenler için çalışır (değeri değişenler için)."
  //     );
  //   });

  useEffect(() => {
    console.log(
      "useEffect number veya text için çalışır (değeri değişenler için)."
    );
  }, [number, text]);

  return (
    <div>
      <h1>Using UseEffect</h1>
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
export default UsingUseEffect;
