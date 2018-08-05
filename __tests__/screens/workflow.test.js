import React from "react";
import { mount } from "enzyme";
import Detail from "../../src/screens/workflow";

describe("Detail screen", () => {
  const navigation = {
    getParam: jest.fn().mockReturnValue({
      key: "2",
      title: "Afternoon workout",
      description: "A few minutes of workout in the afternoon to keep in good shape",
      steps: [
        {
          title: "Push-up",
          description: "💪🏼",
          timer: 3
        },
        {
          title: "Jumping",
          description: "⛹🏼‍♀️",
          timer: 20
        },
        
      ]
    })
  }
  const rendered = mount(<Detail navigation={navigation}/>)
  it("matches initial snapshot", () => {
    expect(rendered).toMatchSnapshot();
  });
})