import { afterAll, beforeAll, describe, expect, test, vi } from 'vitest';
import { formatDateToString, getPreviousDate } from './date';
describe('utils/date', () => {
    beforeAll(() => {
        vi.useFakeTimers();
    });

    afterAll(() => {
        vi.useRealTimers();
    });
    test('Should return 5 days before given date', () => {
        const mockedDate = new Date("2024-02-10");
        vi.setSystemTime(mockedDate)
        const result = getPreviousDate(5);
        expect(result.toISOString()).toContain('2024-02-05');

    });

    test('Should format date to string', () => {
        const mockedDate = new Date("2024-02-10")
        vi.setSystemTime(mockedDate)
        expect(formatDateToString(mockedDate)).toBe("2024-02-10")
    })
});