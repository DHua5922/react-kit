import { render, screen } from "@testing-library/react";
import Accordion from ".";

function renderAccordion(expanded: boolean) {
  return render(
    <Accordion activeKeys={expanded ? ["0"] : []} onSelect={() => { }}>
      
      <Accordion.Item eventKey="0">
        <Accordion.Header>Header</Accordion.Header>
        <Accordion.Body>Body</Accordion.Body>
      </Accordion.Item>

    </Accordion>,
  );
}

describe("Accordion", () => {
  it("collapses the body when its key is not active", () => {
    renderAccordion(false);

    expect(screen.getByRole("button", { name: "Header" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
    expect(screen.getByText("Body").parentElement).toHaveAttribute(
      "aria-hidden",
      "true",
    );
  });

  it("expands the body when its key is active", () => {
    renderAccordion(true);

    expect(screen.getByRole("button", { name: "Header" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    expect(screen.getByText("Body").parentElement).toHaveAttribute(
      "aria-hidden",
      "false",
    );
  });
});
