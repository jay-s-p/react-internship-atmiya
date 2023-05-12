import React from "react";

function Button(props) {
  const { children, className, onClick } = props;

  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
