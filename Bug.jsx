This React component uses the wrong lifecycle method to update the state.  It attempts to update the state in `componentDidMount`, which is called only once when the component is mounted.  If props or state needs to be updated later, `useEffect` is usually the correct choice.