import { useOnlineStatus } from "../../hooks/useOnlineStatus";
import "./networkCheck.css";

function NetworkCheck() {
  const isOnline = useOnlineStatus();

  return (
    <div className="networkCheck-container">
      {isOnline ? "✅ Online" : "❌ Offline"}
    </div>
  );
}

export default NetworkCheck;
