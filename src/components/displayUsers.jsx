import { useState } from "react";
import DisplayUser from "./DisplayUser";
import { useUsers } from "../users/custom-hooks";

export function DisplayUsers() {
  const { loading, error, data } = useUsers();
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleUserClick = (userId) => {
    setSelectedUserId(userId);
  };

  const handleUserClose = () => {
    setSelectedUserId(null);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  if (selectedUserId) {
    return <DisplayUser userID={selectedUserId} onClose={handleUserClose} />;
  }

  return (
    <div>
      {data.getUsers.map((user) => (
        <div key={user.id}>
          <h3 onClick={() => handleUserClick(user.id)}>{user.username}</h3>
        </div>
      ))}
    </div>
  );
}

export default DisplayUsers;
