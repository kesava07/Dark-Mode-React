import { render } from "@testing-library/react"
import Users from "./index"
import '@testing-library/jest-dom//extend-expect';
import { ThemeProvider } from "styled-components";
import getTheme from "../../Theme/theme";

describe("Users", () => {
    it("Should render Users component properly", () => {
        const { container } = render(<Users />)
        expect(container).toBeTruthy();
    });

    it("should render title properly", () => {
        const { getByTestId } = render(<ThemeProvider theme={getTheme('light')}>
            <Users />
        </ThemeProvider>)
        expect(getByTestId("title")).toHaveTextContent("Users");
    });

    // it("Should fetch data and display", async () => {
    //     axiosMock.get.mockResolvedValueOnce({ data: getUsersData() });
    //     const { getByTestId } = render(<ThemeProvider theme={getTheme()}><Users /></ThemeProvider>);
    //     expect(getByTestId("loader")).toHaveTextContent("Loading Users...");

    //     const resolvedCard = await waitForElement(() => {
    //         getByTestId("card");
    //     });
    //     expect(resolvedCard[0]).toBeTruthy();
    //     expect(axiosMock.get).toHaveBeenCalledTimes(1);
    // })
})