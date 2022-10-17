import { useOnlineStatus } from "../../hooks/useOnlineStatus";
import "./networkCheck.css";

function NetworkCheck() {
  const isOnline = useOnlineStatus();

  return (
    <div className="networkCheck-container">
      {isOnline ? "✅ You're connected" : "❌ Check your connection"}
    </div>
  );
}

export default NetworkCheck;
