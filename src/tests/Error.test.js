import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Error from "../components/Error";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: { primary: "#faf4e4", secondary: "#195188", tertiary: "#d1e7e1" },
  fontSizes: { title: "clamp(1.25rem, 5vw, 4rem)", body: "1rem" },
};

describe("<Error />", () => {
  test("Renders error message and back home button", () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Error />
        </ThemeProvider>
      </BrowserRouter>
    );

    const id = document.querySelector("#Error");
    expect(id).toBeInTheDocument();

    const errorMessage = screen.getByText(
      "Error occured"
    );
    expect(errorMessage).toBeInTheDocument();

    const backButton = screen.getByText("Back Home");
    expect(backButton).toBeInTheDocument();
  });
});
