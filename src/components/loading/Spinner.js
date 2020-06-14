import React from "react";

const Spinner = () => {
  return (
    <div className="jumbotron pb-5 pt-5">
      <div className="text-center">
        <div className="spinner-border spinner-color" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
