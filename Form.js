import React from "react";

export default function Form() {
  function handleSubmit(event) {
    event.preventDefault();
    const { firstname, lastname, age } = event.target.elements;
    if (!firstname.value || !lastname.value || !age.value) {
      alert("فرم را تکمیل کنید");
    } else if (Number(age.value) < 18) {
      alert("سن شما کم است");
    } else {
      alert(`${firstname.value} عزیزاطلاعات شما ثبت گردید`);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="firstname" placeholder="enter your firstnam" />
        <input name="lastname" placeholder="enter your firstnam" />
        <input name="age" type="number" placeholder="سن" />
        <input name="submit" type="submit" value="submit" />
      </form>
    </div>
  );
}
