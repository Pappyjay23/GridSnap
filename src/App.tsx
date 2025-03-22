import { useState, useEffect } from "react";
import ProjectGrid from "./components/ProjectGrid";
import Pagination from "./components/Pagination";
import ErrorMessage from "./components/ErrorMessage";
import LoadingSpinner from "./components/LoadingSpinner";
import { adaptApiResponseArray, type ProjectData } from "./utils/apiAdapter";

function App() {
	const [projects, setProjects] = useState<ProjectData[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [currentPage, setCurrentPage] = useState(0);
	const [totalPages, setTotalPages] = useState(0);
	const pageSize = 9;

	useEffect(() => {
		const fetchProjects = async () => {
			setLoading(true);
			setError(null);

			try {
				const response = await fetch(
					`https://crm.server.pro-part.es/api/v1/secondary-projects/integration/projects?accessKey=A7gjfjj0WdBynt8d&secretKey=tGH5UlZcgNtAPrfq9MnmMhWji9j5vYXn&isPagination=true&size=${pageSize}&page=${currentPage}`,
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({}),
					}
				);

				if (!response.ok) {
					throw new Error(`Server responded with status: ${response.status}`);
				}

				const data = await response.json();

				const adaptedData = adaptApiResponseArray(data);

				setProjects(adaptedData.projects);
				setTotalPages(adaptedData.totalPages);
			} catch (err) {
				setError(
					err instanceof Error ? err.message : "An unknown error occurred"
				);
				console.error("Error fetching projects:", err);
			} finally {
				setLoading(false);
			}
		};

		fetchProjects();
	}, [currentPage, pageSize]);

	const handlePageChange = (newPage: number) => {
		setCurrentPage(newPage);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div className='min-h-screen bg-gray-900 text-white p-4 md:p-8'>
			<div className='max-w-7xl mx-auto'>
				<h1 className='text-3xl font-bold mb-8'>Real Estate Projects</h1>

				{loading && <LoadingSpinner />}

				{error && <ErrorMessage message={error} />}

				{!loading && !error && projects.length === 0 && (
					<ErrorMessage message='No projects found' />
				)}

				{!loading && !error && projects.length > 0 && (
					<>
						<ProjectGrid projects={projects} />
						<Pagination
							currentPage={currentPage}
							totalPages={totalPages}
							onPageChange={handlePageChange}
						/>
					</>
				)}
			</div>
		</div>
	);
}

export default App;
