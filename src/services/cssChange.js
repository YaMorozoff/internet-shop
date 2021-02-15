export const cssChange = (theme) => {
  const root = document.querySelector(":root");

  const cssVariables = ["font", "bgimage"];

  cssVariables.forEach((element) => {
    root.style.setProperty(
      `--theme-default-${element}`,
      `var(--theme-${theme}-${element})`
    );

    // console.log(
    //   `--theme-default-${element}`,
    //   `var(--theme-${theme}-${element})`
    // );
  });
};
