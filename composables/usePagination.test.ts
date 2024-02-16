import { describe, expect, test } from 'vitest';
import { PROJECT_STATUS } from '~/types';
import { usePagination } from './usePagination';
describe('composables/usePagination', () => {
    test('should return number of pages and current projects to be rendered', () => {
        const mockedProjects = [
            {
                projectId: 1,
                statusDescription: PROJECT_STATUS.active
            },
            {
                projectId: 2,
                statusDescription: PROJECT_STATUS.canceled
            },
            {
                projectId: 3,
                statusDescription: PROJECT_STATUS.canceled
            }
        ];
        const result = usePagination(2, 1, mockedProjects);
        expect(result.totalPages).toBe(2);
        expect(result.currentProjects.length).toBe(2);
    });
});