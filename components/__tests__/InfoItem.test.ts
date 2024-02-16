import { mount } from "@vue/test-utils";
import { describe, expect, test } from 'vitest';
import InfoItem from '../InfoItem.vue';

describe('Components/InfoItem', () => {
    test('should render InfoItem componenet', () => {
        const wrapper = mount(InfoItem, {
            props: { title: "test title" }, slots: {
                default: 'main Content'
            }
        });
        expect(wrapper.find('h2').classes('font-medium')).toBe(true);
        expect(wrapper.html()).toContain('main Content')


    });
})