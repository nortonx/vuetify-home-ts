import { mount } from '@vue/test-utils';
import WordCounter from './WordCounter.vue';
import { describe, it, expect } from "vitest";

describe("WordCounter View Component", () => {
  it("Should render and match snapshot", () => {
    const wrapper = mount(WordCounter);
    expect(wrapper).toMatchSnapshot();
  });

  it("Should trigger updateText when textContent changes", async () => {
    const wrapper = mount(WordCounter);
    const content = "Testing text content.";
    expect(wrapper.vm.textContent).toBe("");
    wrapper.vm.textContent = content;
    expect(wrapper.vm.textContent).toBe(content);
    // expect(wrapper.vm.onUpdateText).toHaveBeenCalledWith(content)
  });

})