import type { Project } from "~/types";

export const usePagination = (pageSize: number, currentPage: number, projects: Array<Project>) => {
    const offset = pageSize * (currentPage - 1) || 0;
    const totalPages = Math.ceil(projects.length / pageSize);
    const currentProjects = projects.slice(offset, pageSize * currentPage);
    return {
        totalPages,
        currentProjects,
    }
}