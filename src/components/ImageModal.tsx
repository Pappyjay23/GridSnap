import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from "./Icons";

interface ImageModalProps {
	images: string[];
	initialIndex: number;
	isOpen: boolean;
	onClose: () => void;
}

const ImageModal = ({
	images,
	initialIndex,
	isOpen,
	onClose,
}: ImageModalProps) => {
	const [currentIndex, setCurrentIndex] = useState(initialIndex);

	useEffect(() => {
		if (isOpen) {
			setCurrentIndex(initialIndex);
		}
	}, [isOpen, initialIndex]);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (!isOpen) return;

			if (e.key === "Escape") {
				onClose();
			} else if (e.key === "ArrowLeft") {
				prevImage();
			} else if (e.key === "ArrowRight") {
				nextImage();
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		if (isOpen) {
			document.documentElement.classList.add("no-scroll");
		} else {
			document.documentElement.classList.remove("no-scroll");
		}

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			document.documentElement.classList.remove("no-scroll");
		};
	}, [isOpen, currentIndex, images.length]);

	const nextImage = () => {
		if (images.length <= 1) return;
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const prevImage = () => {
		if (images.length <= 1) return;
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + images.length) % images.length
		);
	};

	if (!isOpen) return null;

	return (
		<div
			className='fixed inset-0 z-50 bg-black/90 flex items-center justify-center'
			onClick={onClose}>
			<div
				className='relative w-full h-full flex items-center justify-center'
				onClick={(e) => e.stopPropagation()}>
				<button
					className='absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full cursor-pointer backdrop-blur'
					onClick={onClose}>
					<CloseIcon />
				</button>

				<div className='absolute top-4 left-4 text-white py-3 px-6 rounded-full text-sm bg-white/10 hover:bg-white/20 backdrop-blur'>
					{currentIndex + 1} / {images.length}
				</div>

				<div className='w-full h-full flex items-center justify-center p-4 md:p-10'>
					<img
						src={images[currentIndex]}
						alt={`Image ${currentIndex + 1}`}
						className='max-w-full max-h-full object-contain rounded-[20px]'
					/>
				</div>

				{images.length > 1 && (
					<>
						<button
							className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full cursor-pointer'
							onClick={prevImage}>
							<ChevronLeftIcon />
						</button>
						<button
							className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full cursor-pointer'
							onClick={nextImage}>
							<ChevronRightIcon />
						</button>
					</>
				)}
			</div>
		</div>
	);
};

export default ImageModal;
