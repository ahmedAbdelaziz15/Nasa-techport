import { type Projects } from "~/types";

export default defineEventHandler(async (event) => {
    const query: { updatedSince: string } = getQuery(event);
    const data: Projects = await $fetch(`https://techport.nasa.gov/api/projects?updatedSince=${query.updatedSince}`);
    return data;
});