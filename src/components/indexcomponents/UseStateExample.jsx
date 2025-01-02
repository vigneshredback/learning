import { useState } from "react";

function UseStateExample() {
  let [info, setInfo] = useState({
    name: "irfan",
    age: 20,
    isMarried: false,
    hobbies: ["coding", "sleeping"],
  });

  function x() {
    setInfo((prev) => ({ ...prev, isMarried: true, age: info.age + 2 }));
    console.log(info);
  }

  return (
    <>
      <h1>hello {info.name}</h1>
      <br />
      <h1>age {info.age}</h1>
      <br />
      <h1>
        are u marry
        {info.isMarried ? "married" : "  not married"}
      </h1>

      <button onClick={x} className="bg-red-500">
        click
      </button>
    </>
  );
}

export default UseStateExample;
