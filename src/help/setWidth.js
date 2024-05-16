import { setCurrentWidth } from "~/redux/slices/ResponsiveSlice";

export const setWidth = (e, dispatch) => {
  dispatch(setCurrentWidth(e.target.innerWidth));
  document.documentElement.style.setProperty(
    "--vw",
    `${e.target.innerWidth}px`
  );
};
