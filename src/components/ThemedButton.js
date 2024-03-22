import React from "react";
import PropTypes from "prop-types";

function ThemedButton({ buttonTheme = "", ...props }) {
  return <button className={buttonTheme} {...props} />;
}

ThemedButton.propTypes = {
  buttonTheme: PropTypes.string,
};

export default ThemedButton;
