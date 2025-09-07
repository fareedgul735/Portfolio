import { useEffect, useState } from "react";
import style from "./NetworkStatus.module.css";

const NetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (!isOnline) {
    return (
      <div className={style.overlay}>
        <div className={style.icon}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p className={style.text}>
          You are offline. Please check your connection.
        </p>
      </div>
    );
  }

  return null;
};

export default NetworkStatus;
