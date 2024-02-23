import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { useUser } from "../users/custom-hooks";

DisplayUser.propTypes = {
  userID: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

function DisplayUser({ userID, onClose }) {
  const [getUser, { loading, data }] = useUser();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (userID) {
      getUser({ variables: { id: userID } });
    }
  }, [getUser, userID]);

  useEffect(() => {
    if (data) {
      setUser(data.getUser);
    }
  }, [data]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {user && (
        <div>
          <h2>User Details</h2>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Password: {user.password}</p>
          <button onClick={onClose}>Close</button>
        </div>
      )}
    </div>
  );
}

export default DisplayUser;
