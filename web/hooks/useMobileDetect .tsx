import { useState, useEffect } from "react";

/**
 * Custom hook to detect if the user is on a mobile or desktop device.
 * @returns {boolean} - True if the user is on a mobile device, false otherwise.
 */
const useMobileDetect = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile = Boolean(
      userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );
    setIsMobile(mobile);
  }, []);

  return isMobile;
};

export default useMobileDetect;
