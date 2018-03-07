import React from "react";

const Node = ({node}) => {
    return (
      <div className="initechNode" onClick={() => alert("You're contact: " + node)}><b>{ node.name }</b><br />{ node.title}<br />{ node.role }</div>
    );
  };

export default Node