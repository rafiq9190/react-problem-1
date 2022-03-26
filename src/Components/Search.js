import React, { useState, useEffect } from "react";

// `joiningDate` && `validityDate` format "yyyy-mm-dd"

function checkValidity(joiningDate, validityDate) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const [year, month, day] = joiningDate.split("-");
  console.log("🚀 ~ file: Search.js ~ line 9 ~ checkValidity ~ day", day);
  console.log("🚀 ~ file: Search.js ~ line 9 ~ checkValidity ~ month", month);
  console.log("🚀 ~ file: Search.js ~ line 9 ~ checkValidity ~ year", year);
  const [yyyy, mm, dd] = validityDate.split("-");
  const maxValid = new Date(yyyy, mm - 1, dd);
  const selected = new Date(year, month - 1, day);
  return maxValid >= selected && maxValid >= today;
}

function Search() {
  const [userInput, setUserInput] = useState([]);
  const [stdName, setStdName] = useState("");

  const [stdJoinDate, setStdJoinDate] = useState([]);

  const validityDate = (date, name) => {};

  const addStd = (name, joinDate) => {
    if (name != "" && joinDate != "") {
      let newStd = {
        name,
        joinDate,
      };
      setUserInput([newStd, ...userInput]);
      setStdName("");

      validityDate(joinDate, name);
    }
  };

  //   useEffect(() => {
  //     checkValidity(stdJoinDate);
  //   }, [checkValidity]);

  return (
    <div className="my-50 layout-row align-items-end justify-content-end">
      <label htmlFor="studentName">
        Student Name:
        <div>
          <input
            id="studentName"
            data-testid="studentName"
            type="text"
            onChange={(e) => setStdName(e.target.value)}
            className="mr-30 mt-10"
          />
        </div>
      </label>
      <label htmlFor="joiningDate">
        Joining Date:
        <div>
          <input
            id="joiningDate"
            data-testid="joiningDate"
            type="date"
            onChange={(e) => setStdJoinDate(e.target.value)}
            className="mr-30 mt-10"
          />
        </div>
      </label>
      <button
        type="button"
        data-testid="addBtn"
        onClick={addStd(stdName, stdJoinDate)}
        className="small mb-0"
      >
        Add
      </button>
    </div>
  );
}

export default Search;
