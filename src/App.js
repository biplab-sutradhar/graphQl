import logo from "./logo.svg";
import { gql, useQuery } from "@apollo/client";
import './App.css'; // Import the CSS file

const query = gql`
  query GetTodosWithUser {
    getTodos {
      id
      title
      completed
      user {
        id
        name
      }
    }
  }
`;

function App() {
  const { data, loading } = useQuery(query);

  if (loading) return <h1 className="loading-text">Loading...</h1>;

  return (
    <div className="App container">
      <h1 className="header">Todo List</h1>
      <table className="table">
        <thead>
          <tr>
            <th className="th">Title</th>
            <th className="th">User</th>
          </tr>
        </thead>
        <tbody>
          {data.getTodos.map((todo) => (
            <tr key={todo.id} className="row">
              <td className="td">{todo.title}</td>
              <td className="td">{todo?.user?.name || "Unknown"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
