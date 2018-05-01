import React from "react";


//meta has some properties of individual input fields
export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        {...input}
        style={{
          marginBottom: "5px"
        }}
      />
      <div
        className="red-text"
        style={{
          marginBottom: "20px"
        }}
      >
        {touched && error ? error : ""}
      </div>
    </div>
  );
};
