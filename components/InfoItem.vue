<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="pb-2 mx-2">
    <h2 class="font-medium">{{ title }}</h2>
    <slot />
  </div>
</template>
