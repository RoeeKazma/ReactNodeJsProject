import { useEffect } from "react";
import { useState } from "react";

const useInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    handleOnChange: (e) => setValue(e.target.value),
    clear: () => setValue(""),
    reset: () => setValue(initialValue),
  };
};

const useFetch = (url, options) => {
  console.log("useFetch: get", url, options);

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("useFetch: useEffect start");
    const fetchData = async () => {
      console.log("fetch data: ", url, options);
      if (!url) {
        return;
      }

      console.log("fetch data: fetching...", url, options);
      setIsLoading(true);
      setData(null);
      setError(null);
      try {
        const response = await fetch(url, options);
        const data = await response.json();

        console.log("fetch data: ok", url, options);
        setData(data);
      } catch (err) {
        console.log("fetch data: error", url, options);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();

    return () => {
      console.log("useFetch: useEffect -> cleanup");
    };
  }, [url, options]);

  return {
    data,
    isLoading,
    error,
  };
};

const usePost = (id) => {
  console.log("usePost: get", id);

  const fromUseFetch = useFetch(
    id ? `https://jsonplaceholder.typicode.com/posts/${id}` : null
  );
  console.log("useFetch: return", fromUseFetch);

  return fromUseFetch;
};

const PostWithHooks = () => {
  console.log("render");

  const { value, handleOnChange } = useInput();

  const fetchHook = usePost(value);
  console.log("usePost: return", fetchHook);

  return (
    <div>
      <input type="number" onInput={handleOnChange} value={value} />

      <pre>{JSON.stringify(fetchHook, null, 2)}</pre>
    </div>
  );
};

export default PostWithHooks;
