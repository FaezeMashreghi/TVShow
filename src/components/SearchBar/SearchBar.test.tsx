import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";
import "@testing-library/jest-dom";

const mockOnSearch = jest.fn();

describe("SearchBar", () => {
  const renderComponent = () => {
    render(<SearchBar onSearch={mockOnSearch} />);
    const textField = screen.getByPlaceholderText("Search...");
    const searchButton = screen.getByRole("button", { name: /search/i });
    return { textField, searchButton };
  };

  beforeEach(() => {
    mockOnSearch.mockClear();
  });

  it("renders the search input and button", () => {
    const { textField, searchButton } = renderComponent();
    expect(textField).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  it("calls onSearch when search button is clicked", () => {
    const { textField, searchButton } = renderComponent();

    fireEvent.change(textField, {
      target: { value: "test query" },
    });

    fireEvent.click(searchButton);

    expect(mockOnSearch).toHaveBeenCalledWith("test query");
  });

  it("calls onSearch when Enter key is pressed", () => {
    const { textField } = renderComponent();

    fireEvent.change(textField, {
      target: { value: "test query" },
    });

    fireEvent.keyDown(screen.getByPlaceholderText("Search..."), {
      key: "Enter",
      code: "Enter",
      charCode: 13,
    });

    expect(mockOnSearch).toHaveBeenCalledWith("test query");
  });

  it("does not call onSearch with an empty query", () => {
    const { searchButton } = renderComponent();

    fireEvent.click(searchButton);

    expect(mockOnSearch).not.toHaveBeenCalled();
  });
});
