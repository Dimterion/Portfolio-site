import { useState, useEffect } from "react";
import "./networkCheck.css";

function NetworkCheck() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }

    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div className="networkCheck-container">
      {isOnline ? "✅ You're connected" : "❌ Check your connection"}
    </div>
  );
}

export default NetworkCheck;
