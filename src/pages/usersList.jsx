import { useUsers } from "../users/custom-hooks";
import UserDetails from "./userDetails";

export function UsersListPage() {
  const { loading, error, data } = useUsers();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <>
      <table className="table-fixed w-100">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
        {data.getUsers.map((user) => (
          <tr key={user.id}>
          <td>{user.username}</td>
          <td>
            <button  onClick={() => console.log(user.id)}>
                Ver usuario
            </button>
          </td>
        </tr>
        ))}

        </tbody>
      </table>
    </>
  );
}

export default UsersListPage;
