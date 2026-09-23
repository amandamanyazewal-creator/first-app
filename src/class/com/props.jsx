function Stud() {
  const students = [
    { id: 1, name: "Atwy", age: 30, department: "computer Since" },
    { id: 2, name: "Aman", age: 27, department: "computer Since" },
  ];

  function Student({ id, name, age, department }) {
    return (
      <>
        Id:{id}
        <br />
        Name:{name}
        <br />
        Age:{age}
        <br />
        Department:{department}
        <br />
      </>
    );
  }

  return (
    <>
      {students.map((s) => (
        <Student key={s.id} {...s} />
      ))}
    </>
  );
}
export default Stud;
