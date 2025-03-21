import { ProjectData } from "../utils/apiAdapter";
import ProjectCard from "./ProjectCard";

interface ProjectGridProps {
	projects: ProjectData[];
}

const ProjectGrid = ({ projects }: ProjectGridProps) => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
			{projects.map((project) => (
				<ProjectCard key={project.id} project={project} />
			))}
		</div>
	);
};

export default ProjectGrid;
