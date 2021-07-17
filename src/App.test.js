import { render } from "@testing-library/react"
import App from "./App"

describe("App", () => {
  it("Should render App component", () => {
    const { container } = render(<App/>);
    expect(container).toBeTruthy();
  })
})