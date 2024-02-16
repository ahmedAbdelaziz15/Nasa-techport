import { mount } from "@vue/test-utils";
import { describe, expect, test } from 'vitest';
import { CHIP_TYPE } from "~/types";
import Chip from '../Chip.vue';

describe('Components/Chip', () => {
    test('should render chip componenet', () => {
        const wrapper = mount(Chip, { props: { type: CHIP_TYPE.active } });
        expect(wrapper.find('p').classes('bg-orange-100')).toBe(true);

    });
})