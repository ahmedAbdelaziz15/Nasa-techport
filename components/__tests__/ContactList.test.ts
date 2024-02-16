import { mount } from "@vue/test-utils";
import { describe, expect, test } from 'vitest';
import ContactsList from '../Project/ContactsList.vue';

describe('Components/Project/ContactsList', () => {
    const mockedContacts = [
        {
            contactId: 123,
            canUserEdit: false,
            firstName: 'Christopher',
            lastName: 'Baker',
            fullName: 'Christopher E Baker',
            fullNameInverted: 'Christopher E Baker',
            primaryEmail: 'Christopher@test.com',
            publicEmail: false,
            nacontact: true,
        },
        {
            contactId: 456,
            canUserEdit: false,
            firstName: 'Roger',
            lastName: 'Hunter',
            fullName: 'Roger Hunter',
            fullNameInverted: 'Roger Hunter',
            primaryEmail: 'Roger@test.com',
            publicEmail: false,
            nacontact: true,
        }
    ]
    test('should render contact list componenet', () => {
        const wrapper = mount(ContactsList, { props: { title: "Project Manager", contacts: mockedContacts } });
        expect(wrapper.html()).toContain('Project Manager')
        expect(wrapper.html()).toContain('Roger Hunter')

    });
})