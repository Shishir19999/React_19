import { use, Suspense } from "react";

const fetchJoke = async () => {
  const res = await fetch("https://api.chucknorris.io/jokes/random");
  if (!res.ok) {
    throw new Error(`Request failed with status ${res.status}`);
  }
  return res.json();
};

// The promise must be created outside of render (or be cached), otherwise
// use() would receive a brand new promise on every render and suspend forever.
const jokePromise = fetchJoke();

const JokeItem = () => {
  const joke = use(jokePromise);
  return <p>{joke.value}</p>;
};

const UseHookExample = () => {
  return (
    <div>
      <h2>Random joke (React 19 use() + Suspense)</h2>
      <Suspense fallback={<p>Loading joke...</p>}>
        <JokeItem />
      </Suspense>
    </div>
  );
};

export default UseHookExample;
