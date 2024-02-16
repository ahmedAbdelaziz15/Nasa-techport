import { describe, expect, test } from 'vitest';

import { CHIP_TYPE, PROJECT_STATUS } from "~/types";
import { getChipTypeFromStatus } from './getChipTypeFromStatus';
describe('utils/getChipTypeFromStatus', () => {

    test('Should return mapped typed from project status', () => {
        const result = getChipTypeFromStatus(PROJECT_STATUS.active);
        expect(result).toEqual(CHIP_TYPE.active)
    });
    test('Should get default type when project status is not not_started', () => {
        const result = getChipTypeFromStatus(PROJECT_STATUS.not_started);
        expect(result).toEqual(CHIP_TYPE.default)
    });

});