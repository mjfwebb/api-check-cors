import { gql, useQuery } from "@apollo/client";
import "./App.css";

function App() {
  const SEARCH_MOVIE = `
  query  {
    movies {
      title
    }
  }
`;

  const { loading, error, data } = useQuery(
    gql`
      ${SEARCH_MOVIE}
    `
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if (data) console.log(data);

  return (
    <>
      <h1>Check the console for the result</h1>
    </>
  );
}

export default App;
