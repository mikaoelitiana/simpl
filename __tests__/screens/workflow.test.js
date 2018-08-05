import React from "react";
import { mount } from "enzyme";
import Detail from "../../src/screens/workflow";

describe("Detail screen", () => {
  const rendered = mount(<Detail />)
  it("matches initial snapshot", () => {
    expect(rendered).toMatchSnapshot();
  });
})