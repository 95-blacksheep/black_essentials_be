import React, { useEffect, useState } from "react";

const SuccessMessage = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false); 
    }, 20000);

    return () => clearTimeout(timer); 
  }, []);

  if (!visible) return null; 

  return (
    <div className="alert_message error" id="alert_message">
      <p>This is a success message.</p>
    </div>
  );
};

export default SuccessMessage;
