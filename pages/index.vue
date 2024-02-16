<script setup lang="ts">
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

import { computedAsync } from "@vueuse/core";

import type { Projects } from "~/types";

const itemsPerPage = ref<number>(25);
const currentPage = ref<number>(1);
const maxSearchDate = ref<Date>(new Date());
const searchDate = ref<Date>(getPreviousDate(7));

const { data, error, pending, refresh } = await useAsyncData<Projects>(
  "projects",
  () =>
    $fetch("/api/projects", {
      params: {
        updatedSince: formatDateToString(searchDate.value),
      },
    })
);
const projectsList = computedAsync(async () => {
  const { totalPages, currentProjects } = usePagination(
    itemsPerPage.value,
    currentPage.value,
    data.value!.projects
  );
  return {
    currentProjects,
    projectsTotalCount: data.value?.totalCount,
    totalPages,
  };
});

const onClickHandler = (page: number) => {
  currentPage.value = page;
};

const handleSearch = () => {
  currentPage.value = 1;
  refresh();
};

const handleChange = () => {
  currentPage.value = 1;
  refresh();
};
</script>

<template>
  <main class="flex flex-col gap-8 p-12 pt-0">
    <ClientOnly>
      <div class="flex items-center ml-auto">
        <VueDatePicker
          v-model="searchDate"
          :max-date="maxSearchDate"
          :enable-time-picker="false"
          :clearable="false"
          class="w-1/2"
        />
        <button
          @click="handleSearch"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
        >
          Search
        </button>
      </div>
      <template #fallback>
        <LoadingSpinner class="ml-auto h-10" />
      </template>
    </ClientOnly>
    <div v-if="pending" class="m-auto">
      <LoadingSpinner />
    </div>
    <div v-else class="flex flex-col gap-4">
      <div v-if="projectsList.currentProjects.length > 0">
        <section
          class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-10"
        >
          <NuxtLink
            v-for="project in projectsList.currentProjects"
            :to="`/details/${project.projectId}`"
          >
            <Suspense :key="project.projectId">
              <ProjectInfoCard :project="project" />
              <template #fallback>
                <LoadingCard />
              </template>
            </Suspense>
          </NuxtLink>
        </section>

        <ClientOnly>
          <div class="flex items-center justify-end mt-4 gap-4">
            <form class="max-w-sm">
              <select
                v-model="itemsPerPage"
                @change="handleChange"
                id="pageSize"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="10" selected>10</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </select>
            </form>
            <vue-awesome-paginate
              :total-items="projectsList?.projectsTotalCount || 0"
              :items-per-page="Number(itemsPerPage)"
              v-model="currentPage"
              :on-click="onClickHandler"
            />
          </div>
          <template #fallback>
            <LoadingSpinner class="ml-auto h-10" />
          </template>
        </ClientOnly>
      </div>
      <div v-else><p class="text-center">No projects found</p></div>
    </div>
  </main>
</template>

<style>
.pagination-container {
  display: flex;
  column-gap: 10px;
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: #3498db;
  border: 1px solid #3498db;
  color: white;
}
.active-page:hover {
  background-color: #2988c8;
}
</style>
