import React, { useState } from "react";

function Stet() {
  const [form, setform] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  function handlchenge(e) {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  }
  function handlsubmit() {
    alert("form submited");
  }
  return (
    <div>
      <form>
        <h3>Register form</h3>
        <input
          type="texte"
          name="name"
          placeholder="insert name"
          value={form.name}
          onChange={handlchenge}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="insert email"
          value={form.email}
          onChange={handlchenge}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="insert password"
          value={form.password}
          onChange={handlchenge}
        />
        <br />
        <input
          type="password"
          name="confirm"
          placeholder="confrim password"
          value={form.confirm}
          onChange={handlchenge}
        />{" "}
        <br />
      </form>
      <button onClick={handlsubmit} onChange={form}>
        submit
      </button>
    </div>
  );
}
export default Stet;
