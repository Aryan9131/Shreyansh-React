import "./styles.css";
import useFetch from "./useFetch"; // adjust the path as needed

export default function App() {
  const url = "https://v2.jokeapi.dev/joke/Programming?type=single";
  const { data, loading, error, getJoke } = useFetch(url);

  // Display loading text here
  if (loading) return <h2>Loading...</h2>;

  // Display something went wrong here
  if (error) return <h2>Something went wrong</h2>;

  return (
    <div className="App">
      <h1>Joke Generator</h1>
      {/* Do not modify the below code */}
      <h2>{data.joke}</h2>
      <button className="btn" onClick={getJoke}>New Joke</button>
    </div>
  );
}
