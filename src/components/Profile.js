import React, { useContext } from "react";
import { UserContext } from "../context/user";
import Interests from "./Interests";

function Profile({ theme }) {
  const { user } = useContext(UserContext);

  if (!user) {
    // Display a more descriptive message or UI when the user is not logged in
    return <h2>Please log in to view your profile.</h2>;
  }

  const { name, interests } = user;

  return (
    <div>
      <h2>{name}'s Profile</h2>
      {/* Handle case when user interests are not defined or empty */}
      {interests && interests.length > 0 ? (
        <Interests interests={interests} theme={theme} />
      ) : (
        <p>No interests to display.</p>
      )}
    </div>
  );
}

export default Profile;
