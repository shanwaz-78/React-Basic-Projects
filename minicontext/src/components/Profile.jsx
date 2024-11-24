import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const Profile = () => {
  const {user} = useContext(UserContext);

  return (
    <div>
      {user.length === 0 ? (
        <div>Please Login</div>
      ) : (
        <div>
          Welcome
        </div>
      )}
    </div>
  );
};

export default Profile;
