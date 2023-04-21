// ---> Custom hook usage
// import { useState, useEffect } from "react";
// <--- Custom hook usage
import { useSyncExternalStore } from "react";

function subscribe(callback) {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);

  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}

export function useOnlineStatus() {
  // ---> Custom hook usage
  // const [isOnline, setIsOnline] = useState(true);

  // useEffect(() => {
  //   function handleOnline() {
  //     setIsOnline(true);
  //   }

  //   function handleOffline() {
  //     setIsOnline(false);
  //   }

  //   window.addEventListener("online", handleOnline);
  //   window.addEventListener("offline", handleOffline);

  //   return () => {
  //     window.removeEventListener("online", handleOnline);
  //     window.removeEventListener("offline", handleOffline);
  //   };
  // }, []);

  // return isOnline;
  // <--- Custom hook usage

  // ---> Using useSyncExternalStore
  return useSyncExternalStore(
    subscribe,
    () => navigator.onLine,
    () => true
  );
  // <--- Using useSyncExternalStore
}
