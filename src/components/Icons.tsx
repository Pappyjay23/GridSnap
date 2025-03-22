export const HeartIcon = ({ filled = false }) => (
	<svg
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill={filled ? "currentColor" : "none"}
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
		className={filled ? "text-red-500" : "text-gray-400"}>
		<path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'></path>
	</svg>
);

export const MapPinIcon = () => (
	<svg
		width='16'
		height='16'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'>
		<path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'></path>
		<circle cx='12' cy='10' r='3'></circle>
	</svg>
);

export const BedIcon = () => (
	<svg
		width='20'
		height='20'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'>
		<path d='M2 9V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5'></path>
		<path d='M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5'></path>
		<path d='M4 11h16'></path>
		<path d='M12 4v7'></path>
	</svg>
);

export const BathIcon = () => (
	<svg
		width='20'
		height='20'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'>
		<path d='M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3a1 1 0 0 1 1-1z'></path>
		<path d='M6 12V5a2 2 0 0 1 2-2h3v2.25'></path>
	</svg>
);

export const SquareIcon = () => (
	<svg
		width='20'
		height='20'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'>
		<rect x='3' y='3' width='18' height='18' rx='2' ry='2'></rect>
	</svg>
);

export const ChevronLeftIcon = () => (
	<svg
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'>
		<polyline points='15 18 9 12 15 6'></polyline>
	</svg>
);

export const ChevronRightIcon = () => (
	<svg
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'>
		<polyline points='9 18 15 12 9 6'></polyline>
	</svg>
);

export const CameraIcon = () => (
	<svg
		width='16'
		height='16'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		className='mr-1'>
		<rect x='3' y='3' width='18' height='18' rx='2' ry='2'></rect>
		<circle cx='8.5' cy='8.5' r='1.5'></circle>
		<polyline points='21 15 16 10 5 21'></polyline>
	</svg>
);

export const CloseIcon = () => (
	<svg
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'>
		<line x1='18' y1='6' x2='6' y2='18'></line>
		<line x1='6' y1='6' x2='18' y2='18'></line>
	</svg>
);
