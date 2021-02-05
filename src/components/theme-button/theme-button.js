import React from "react";
import "./theme-button.css";
import { Checkbox, Segment } from "semantic-ui-react";
import { THEME_DARK, THEME_LIGHT, useTheme } from "../../context/theme_context";
const ThemeButton = () => {
  const isTheme = useTheme();
  return (
    <div>
      <Segment compact inverted>
        <Checkbox
          slider
          checked={isTheme.theme === "dark"}
          onChange={() => {
            if (isTheme.theme === "light") {
              return isTheme.change(THEME_DARK);
            } else return isTheme.change(THEME_LIGHT);
          }}
        />
      </Segment>
    </div>
  );
};

export default ThemeButton;
