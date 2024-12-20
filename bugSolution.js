```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let intervalId;
    // Correct usage of the cleanup function
    intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Cleanup function should clear the interval
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```