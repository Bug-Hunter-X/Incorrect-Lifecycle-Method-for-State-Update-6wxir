import React, { useState, useEffect } from 'react';

function MyComponent(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Update state based on prop changes
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Cleanup function to prevent memory leaks
    return () => clearInterval(intervalId);
  }, [props.someProp]); // Add any dependencies here

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default MyComponent;