import React from "react";
import "./htmlcss.css";
function Html() {
  return (
    <div>
      <h3>firs aududio</h3>
      {/* <audio controls>
        <source src="./su.mp3" type="audio/mp3" />
      </audio> */}
      <>
        <h4>music player</h4>
        <table border={1}>
          <tr className="aoudioe">
            <th>album image</th>
            <th>number</th>
            <th>play</th>
            <th>action</th>
          </tr>
          <tr>
            <td>album image1</td>
            <td>1</td>
            <td>
              <audio controls>
                <source src="./su.mp3" type="audio/mp3" />
              </audio>
            </td>
            <td>
              <button className="add">add</button>
              <button className="remov">remove</button>
            </td>
          </tr>
          <tr>
            <td>album image2</td>
            <td>2</td>
            <td>
              <audio controls>
                <source src="./su.mp3" type="audio/mp3" />
              </audio>
            </td>
            <td>
              <button className="add">add</button>
              <button className="remov">remove</button>
            </td>
          </tr>
        </table>
      </>
    </div>
  );
}

export default Html;
