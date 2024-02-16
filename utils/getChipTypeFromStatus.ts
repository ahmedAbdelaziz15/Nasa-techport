import { CHIP_TYPE, PROJECT_STATUS } from "~/types";

export const getChipTypeFromStatus = (status: PROJECT_STATUS) => {
    switch (status) {
        case PROJECT_STATUS.active:
            return CHIP_TYPE.active;
        case PROJECT_STATUS.completed:
            return CHIP_TYPE.success;
        case PROJECT_STATUS.canceled:
            return CHIP_TYPE.error;
        case PROJECT_STATUS.not_started:
        default:
            return CHIP_TYPE.default;
    }
};