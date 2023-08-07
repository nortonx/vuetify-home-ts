import {mount} from '@vue/test-utils';
import Box from './Box.vue';
import { describe, it, expect } from "vitest";


describe("Box Component", () => {
  it("Should render and match snapshot", () => {
    const title = "Paragraphs";
    const textCounter = 0;
    const wrapper = mount(Box, { propsData: { title, text: textCounter }});
    expect(wrapper.props().title).toBe(title);
    expect(wrapper.props().text).toBe(textCounter)
    expect(wrapper).toMatchSnapshot();
  });
});
