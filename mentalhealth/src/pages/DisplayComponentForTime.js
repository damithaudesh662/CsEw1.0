import React, { useState, useEffect } from 'react';

const DisplayComponentForTime = ({ component, displayTime }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, displayTime);

    return () => {
      clearTimeout(timer);
    };
  }, [displayTime]);

  return isVisible ? component : null;
};

export default DisplayComponentForTime;