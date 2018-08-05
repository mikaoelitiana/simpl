import React from "react";
import { mount } from "enzyme";
import Home from "../../src/screens/home";

describe("Home screen", () => {
  const rendered = mount(<Home />)
  it("matches initial snapshot", () => {
    expect(rendered).toMatchSnapshot();
  });
})