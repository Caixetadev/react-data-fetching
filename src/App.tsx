import { useFetch } from "./hooks/useFetch";

interface Repository {
  full_name: string;
  description: string;
}

function App() {
  const { data: repositories, isFetching } = useFetch<Repository[]>(
    "users/caixetadev/repos"
  );

  return (
    <div>
      <ul>
        {isFetching && <p>Carregando...</p>}
        {repositories?.map((repo) => {
          return (
            <li key={repo.full_name}>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
