import { screen } from "@testing-library/dom";
import { render } from "solid-js/web";
import App from "../src/App";

it("renders", () => {
  render(() => <App />, document.body);
  const anchor = screen.getByTestId("anchor");
  console.log(anchor);
});
