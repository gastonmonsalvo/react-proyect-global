import { useState } from "react";

const FoldeButton = ({ label, children }) => {
  const [button, setButton] = useState(false);

  return (
    <div>
      <button className="mt-auto px-4 py-2 bg-purple-700 text-white rounded font-bold text-sm shadow cursor-pointer hover:bg-green-700 transition" onClick={() => setButton(!button)}>
        {button ? `${label}` : `${label}`}
      </button>
      {button && <div className="mt-2">{children}</div>}
    </div>
  );
};

export default FoldeButton;
