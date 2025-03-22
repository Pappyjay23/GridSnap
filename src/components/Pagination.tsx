interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

const Pagination = ({
	currentPage,
	totalPages,
	onPageChange,
}: PaginationProps) => {
	const getPageNumbers = () => {
		const pageNumbers = [];
		const maxPagesToShow = 5;

		if (totalPages <= maxPagesToShow) {
			// If total pages is less than max pages to show, display all pages
			for (let i = 0; i < totalPages; i++) {
				pageNumbers.push(i);
			}
		} else {
			// Always include first page
			pageNumbers.push(0);

			// Calculate start and end of page range
			let start = Math.max(1, currentPage - 1);
			const end = Math.min(start + 2, totalPages - 1);

			// Adjust start if end is at max
			if (end === totalPages - 1) {
				start = Math.max(1, end - 2);
			}

			// Add ellipsis after first page if needed
			if (start > 1) {
				pageNumbers.push(-1); // -1 represents ellipsis
			}

			// Add page range
			for (let i = start; i < end; i++) {
				pageNumbers.push(i);
			}

			// Add ellipsis before last page if needed
			if (end < totalPages - 1) {
				pageNumbers.push(-2); // -2 represents ellipsis
			}

			// Always include last page
			pageNumbers.push(totalPages - 1);
		}

		return pageNumbers;
	};

	return (
		<div className='flex justify-center mt-8'>
			<div className='flex items-center space-x-2'>
				<button
					onClick={() => onPageChange(currentPage - 1)}
					disabled={currentPage === 0}
					className={`px-3 py-1 rounded-md ${
						currentPage === 0
							? "bg-gray-700 text-gray-500 cursor-not-allowed"
							: "bg-gray-800 text-white hover:bg-gray-700 cursor-pointer"
					}`}>
					Previous
				</button>

				{getPageNumbers().map((pageNumber, index) => {
					if (pageNumber < 0) {
						return (
							<span key={`ellipsis-${index}`} className='px-3 py-1'>
								...
							</span>
						);
					}

					return (
						<button
							key={pageNumber}
							onClick={() => onPageChange(pageNumber)}
							className={`px-3 py-1 rounded-md ${
								currentPage === pageNumber
									? "bg-teal-600 text-white"
									: "bg-gray-800 text-white hover:bg-gray-700 cursor-pointer"
							}`}>
							{pageNumber + 1}
						</button>
					);
				})}

				<button
					onClick={() => onPageChange(currentPage + 1)}
					disabled={currentPage === totalPages - 1}
					className={`px-3 py-1 rounded-md ${
						currentPage === totalPages - 1
							? "bg-gray-700 text-gray-500 cursor-not-allowed"
							: "bg-gray-800 text-white hover:bg-gray-700 cursor-pointer"
					}`}>
					Next
				</button>
			</div>
		</div>
	);
};

export default Pagination;
