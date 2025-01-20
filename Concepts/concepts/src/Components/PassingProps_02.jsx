import React from "react";

function Parent({ children }) {
  return <div>{children}</div>;
}

export default function Children() {
  return (
    <div>
      <Parent>
        <div>
          {" "}
          <h1>DIV 1</h1>{" "}
        </div>
      </Parent>

      <Parent>
        <div>
          {" "}
          <h1>DIV 2</h1>{" "}
        </div>
      </Parent>
    </div>
  );
}
