import type { Project } from "~/types";

export default defineEventHandler(async (event) => {
    const id = parseInt(event.context.params!.id) as number;
    const data: { project: Project } = await $fetch(
        `https://techport.nasa.gov/api/projects/${id}`
    );
    return data.project;
});
