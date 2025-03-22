import type React from "react";

import { useState } from "react";
import type { ProjectData } from "../utils/apiAdapter";
import {
	BathIcon,
	BedIcon,
	CameraIcon,
	HeartIcon,
	MapPinIcon,
	SquareIcon,
} from "./Icons";
import ImageModal from "./ImageModal";

interface ProjectCardProps {
	project: ProjectData;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
	const [isFavorite, setIsFavorite] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const firstImage =
		project.images && project.images.length > 0 ? project.images[0] : '';

	const toggleFavorite = (e: React.MouseEvent) => {
		e.stopPropagation();
		setIsFavorite(!isFavorite);
	};

	const openImageModal = () => {
		if (project.images && project.images.length > 0) {
			setIsModalOpen(true);
		}
	};

	return (
		<>
			<div className='flex flex-col h-full bg-white rounded-3xl overflow-hidden text-gray-900 transition-transform hover:scale-[1.02] cursor-pointer transition-all duration-500 ease-in-out'>
				<div
					className='relative h-64 overflow-hidden cursor-pointer'
					onClick={openImageModal}>
					<div className='absolute top-4 left-4 z-10'>
						<div className='bg-teal-600 text-white px-4 py-2 rounded-full font-medium uppercase tracking-wider'>
							{project.status}
						</div>
					</div>

					<button
						className='absolute top-4 right-4 z-10 bg-white p-2 rounded-full shadow-md cursor-pointer'
						onClick={toggleFavorite}>
						<HeartIcon filled={isFavorite} />
					</button>

					<img
						src={firstImage}
						alt={project.title}
						className='w-full h-full object-cover'
					/>

					{project.images && project.images.length > 1 && (
						<div className='absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm flex items-center'>
							<CameraIcon />
							<span className='ml-1'>{project.images.length} Photos</span>
						</div>
					)}
				</div>

				<div className='p-4 flex flex-col flex-grow'>
					<div className='flex justify-between gap-4 items-start min-h-[50px] mb-2'>
						<h3 className='text-xl font-bold'>{project.title}</h3>
						<p className='text-xl font-bold text-orange-500'>
							€{project.price.toLocaleString()}
						</p>
					</div>

					<div className='flex items-center text-gray-600 mb-4 min-h-[24px]'>
						<MapPinIcon />
						<span className='ml-1 truncate w-full'>{project.address}</span>
					</div>

					<div className='flex justify-between border-t border-gray-200 pt-4 mt-auto'>
						<div className='flex items-center text-gray-600'>
							<BedIcon />
							<span className='ml-2'>{project.bedrooms} Beds</span>
						</div>

						<div className='flex items-center text-gray-600'>
							<BathIcon />
							<span className='ml-2'>{project.bathrooms} Baths</span>
						</div>

						<div className='flex items-center text-gray-600'>
							<SquareIcon />
							<span className='ml-2'>{project.area} m²</span>
						</div>
					</div>
				</div>
			</div>

			<ImageModal
				images={project.images}
				initialIndex={0}
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
		</>
	);
};

export default ProjectCard;
