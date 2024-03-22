import React from "react";

function Interests({ interests, theme }) {
  return (
    <div>
      <h4>Interests</h4>
      {interests && interests.length > 0 ? (
        <ul className={theme}>
          {interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      ) : (
        <p>No interests to display.</p>
      )}
    </div>
  );
}

export default Interests;
