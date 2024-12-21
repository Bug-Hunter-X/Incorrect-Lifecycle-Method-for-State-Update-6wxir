# React Lifecycle Method Bug

This repository demonstrates a common bug in React applications involving the incorrect use of lifecycle methods for updating component state. The `Bug.jsx` file contains the buggy code, while `Solution.jsx` provides the corrected implementation.

## Problem

The original component attempts to update its state within `componentDidMount`, leading to issues if the state needs to be updated dynamically based on props or other events after the initial mount. 

## Solution

The `Solution.jsx` file demonstrates the proper use of `useEffect` with cleanup function to handle state updates.  `useEffect` ensures that the state updates react to changes in props or other dependencies, making the component more robust and responsive.