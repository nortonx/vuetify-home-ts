import { mount } from '@vue/test-utils';
import Textarea from './Textarea.vue';
import { describe, it, expect } from 'vitest';

describe("Textarea component", () => {
  it("Should render and match snapshot", () => {
    const wrapper = mount(Textarea);
    expect(wrapper).toMatchSnapshot();
  });
})