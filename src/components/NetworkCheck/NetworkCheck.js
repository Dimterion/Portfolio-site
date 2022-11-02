import { useOnlineStatus } from "../../hooks/useOnlineStatus";
import "./networkCheck.css";

function NetworkCheck() {
  const isOnline = useOnlineStatus();

  return (
    <div className="networkCheck-container">
      {isOnline ? "✅ Connection status" : "❌ Check your connection"}
    </div>
  );
}

export default NetworkCheck;
