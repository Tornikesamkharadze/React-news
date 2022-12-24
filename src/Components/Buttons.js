import React from "react";
import { useGlobalContext } from "../Global/context";

const Buttons = () => {
  const { handlePage, page, nbPages, isLoading } = useGlobalContext();
  return (
    <div className="btn-container">
      <button disabled={isLoading} onClick={() => handlePage("prev")}>
        prev
      </button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button disabled={isLoading} onClick={() => handlePage("next")}>
        next
      </button>
    </div>
  );
};

export default Buttons;
