import { useState } from "react";

const FoldeButton = ({ label, children, className= '' }) => {
  const [button, setButton] = useState(false);

  return (
    <div className="flex flex-col items-center w-full gap-2">
      <button
        className={`px-5 py-2 mt-1 rounded-lg shadow bg-black/30 mb-2 text-white font-bold text-2x1 cursor-pointer hover:bg-black/20 hover:brightness-110 hover:text-white transition ${className}`}
        onClick={() => setButton(!button)}
      >
        {label}
      </button>
      {button && <div className="w-full">{children}</div>}
    </div>
  );
};

export default FoldeButton;
