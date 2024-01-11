import useJsonFetch from "../hooks/useJsonFetch";

export default function CustomHook({ url, opts }) {
  const [data, isLoading, hasError] = useJsonFetch(url, opts);
  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <h1>{isLoading && 'Is Loading'}</h1>
      <h1>{hasError && 'Has Error'}</h1>
    </div>
  );
}
