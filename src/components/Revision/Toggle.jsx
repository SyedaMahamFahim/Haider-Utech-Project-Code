import React, { useState } from "react";

// we cant change value by simply using let,const or var

const Toggle = () => {
  const [toggle, setToggle] = useState(false);
  // false opposite == true // a/c to haider

  // toggle = false

  //toggle == true // 1st time clicked
  // toggle =false // 2nd time clicked
  // toggle == true // 3rd time clicked
  //true, false,true, false

  //opposite of toggle value

  // !toggle

  const handleToggle = () => {
    setToggle(!toggle);
  };

//   if (toggle === true) {
//     ("Gamer Haider");
//   } else {
//     ("Haider");
//   }
  // ?== if condition
  // : else

  // ternory operators ? :
  //if else
//   toggle === true ? "Gamer Haider" : "Haider";
  //   toggle === true ?
  //   if(){  ?

  //   }else :
  return (
    <>
      <h1>Toggle</h1>

      <p>{toggle===true ? "Gamer Haider" : "Haider"}</p>
      <button onClick={handleToggle}>Change me</button>
    </>
  );
};

export default Toggle;
