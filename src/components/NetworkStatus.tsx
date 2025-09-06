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
        <img src="/gif-offline.gif" alt="No Internet" className={style.image} />
        <p className={style.text}>
          You are offline. Please check your connection.
        </p>
      </div>
    );
  }

  return null;
};

export default NetworkStatus;
