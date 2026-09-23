import React from "react";
function Course() {
  const cor = ["html", "php", "java", "python"];
  return (
    <>
      <ul>
        {cor.map((cors, index) => (
          <li key={index}>{cors}</li>
        ))}
      </ul>
    </>
  );
}
export default Course;
