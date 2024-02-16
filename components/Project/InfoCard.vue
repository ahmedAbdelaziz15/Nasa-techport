<script setup lang="ts">
import { CHIP_TYPE, type Project, type ProjectDetails } from "~/types";
const props = defineProps<{
  project: Project;
}>();

const { data: projectData, pending } = await useFetch<ProjectDetails>(
  `/api/projects/${props.project.projectId}`
);
</script>
<template>
  <LoadingSpinner v-if="pending" />
  <section
    v-else="projectData"
    class="h-44 flex flex-col gap-2 p-4 rounded-lg overflow-hidden shadow-md hover:bg-gray-100 cursor-pointer trasition duration-300 ease-in"
  >
    <code>
      <span class="font-mono text-xs">#{{ projectData?.projectId }}</span>
    </code>
    <h1 class="font-bold text-md font-medium line-clamp-2">
      {{ projectData?.title }}
    </h1>
    <div class="flex justify-between mt-auto pt-2">
      <Chip :type="CHIP_TYPE.default">
        🕥 {{ projectData?.startDateString }} - {{ projectData?.endDateString }}
      </Chip>
      <Chip :type="getChipTypeFromStatus(projectData?.statusDescription!)">
        {{ projectData?.statusDescription }}
      </Chip>
    </div>
  </section>
</template>
