import React from "react";
import { mount } from "enzyme";
import Text from "./../../../src/components/text";

it("renders as snapshot", () => {
  const rendered = mount(<Text>Hello World</Text>);
  expect(rendered).toMatchSnapshot();
});