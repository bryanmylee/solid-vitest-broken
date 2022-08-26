import { render, screen } from "solid-testing-library";
import App from "../src/App";

it("renders", () => {
  render(() => <App />);
  const anchor = screen.getByTestId("anchor");
  console.log(anchor);
});
