<script setup lang="ts">
import { CHIP_TYPE, type ProjectDetails } from "~/types";

const projectId = useRoute().params.id;

const {
  data: project,
  pending,
  error,
} = await useFetch<ProjectDetails>(`/api/projects/${projectId}`);
</script>

<template>
  <section
    v-if="project"
    class="flex flex-col gap-12 p-12 max-w-6xl m-auto md:flex-row"
  >
    <div class="flex flex-col gap-2 flex-auto">
      <h1 class="font-bold text-2xl">{{ project.title }}</h1>
      <div v-html="project.description" />
      <div>
        <h2 class="font-bold text-xl">Benefits</h2>
        <div v-html="project.benefits" />
      </div>
    </div>

    <div class="flex flex-col gap-4 flex-auto shrink-0 md:w-1/3">
      <div class="flex flex-wrap gap-4">
        <Chip :type="CHIP_TYPE.primary">
          👁️ {{ project.viewCount }} views
        </Chip>
        <Chip :type="getChipTypeFromStatus(project.statusDescription)">
          {{ project.statusDescription }}
        </Chip>
        <Chip :type="CHIP_TYPE.active">
          🕥 {{ project.startDateString }} - {{ project.endDateString }}
        </Chip>
      </div>

      <div class="flex flex-col gap-1">
        <h1 class="font-bold">Project Leads</h1>
        <ProjectContactsList
          v-if="project?.principalInvestigators?.length > 0"
          title="Principal Investigator"
          :contacts="project?.principalInvestigators"
        />
        <ProjectContactsList
          v-if="project?.programDirectors?.length > 0"
          title="Program Directors"
          :contacts="project?.programDirectors"
        />
        <ProjectContactsList
          v-if="project?.programExecutives?.length > 0"
          title="Program Executives"
          :contacts="project?.programExecutives"
        />
        <ProjectContactsList
          v-if="project?.projectManagers?.length > 0"
          title="Program Managers"
          :contacts="project?.projectManagers"
        />
      </div>
      <div class="flex flex-col gap-2">
        <h1 class="font-bold">Organization</h1>
        <InfoItem title="Responsible Mission director">
          <p class="font-light">
            {{ project?.responsibleMd?.organizationName }}
            <span> ({{ project?.responsibleMd?.acronym }}) </span>
          </p>
        </InfoItem>
        <InfoItem title="Lead Organization">
          <p class="font-light">
            {{ project?.leadOrganization?.organizationName }}
          </p>
        </InfoItem>

        <InfoItem
          v-if="project?.supportingOrganizations?.length > 0"
          title="Supporting Organization"
        >
          <ul class="flex flex-wrap gap-2 mt-2">
            <li
              v-for="organization in project.supportingOrganizations"
              key="organization.organizationId"
            >
              <Chip>
                {{ organization.organizationName }}
              </Chip>
            </li>
          </ul>
        </InfoItem>
      </div>
    </div>
  </section>

  <div v-if="pending" class="flex justify-center"><LoadingSpinner /></div>
  <div v-if="error" class="flex justify-center">
    <p>{{ error }}</p>
  </div>
</template>
