<script setup lang="ts">
import type { ContactPerson } from "~/types";

defineProps<{
  title: string;
  contacts: ContactPerson[];
}>();
</script>

<template>
  <InfoItem :title="title">
    <ul>
      <li class="flex flex-wrap gap-2">
        <Chip
          v-for="{ fullName, contactId } in contacts"
          :key="contactId"
          data-testid="chip"
          >{{ fullName }}</Chip
        >
      </li>
    </ul>
  </InfoItem>
</template>
