<script setup lang="ts">
import { CHIP_TYPE } from "~/types";

defineProps<{
  type?: CHIP_TYPE;
}>();

const getChipColor = (type: CHIP_TYPE = CHIP_TYPE.default): string => {
  switch (type) {
    case CHIP_TYPE.primary:
      return "bg-blue-200";
    case CHIP_TYPE.active:
      return "bg-orange-100";
    case CHIP_TYPE.success:
      return "bg-green-100";
    case CHIP_TYPE.error:
      return "bg-red-100";
    case CHIP_TYPE.default:
    default:
      return "bg-gray-100";
  }
};
</script>

<template>
  <p :class="['self-end text-sm rounded-full py-1 px-2', getChipColor(type)]">
    <slot />
  </p>
</template>
