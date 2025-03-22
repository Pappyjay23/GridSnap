# Real Estate Projects Grid

A responsive grid for displaying real estate project cards with custom pagination and image slider.

## Snapshot
![image](https://github.com/user-attachments/assets/d2923f9a-28cd-4ded-9797-41dbc2b4820b)


## Features

- **Responsive Design**: Grid layout adapts to different screen sizes (mobile, tablet, desktop)
- **Custom Pagination**: Implemented manually using React state (no external libraries)
- **Image Slider**: Custom implementation with navigation controls that appear on hover
- **API Integration**: Data fetched from the provided API endpoint
- **Error Handling**: Proper handling of API errors and loading states
- **No External Libraries**: Built using only React and Tailwind CSS

## Implementation Details

### Components

1. **App**: Main component that handles API calls, pagination state, and error handling
2. **ProjectGrid**: Displays the grid of project cards
3. **ProjectCard**: Individual card component with image slider functionality
4. **Pagination**: Custom pagination component with dynamic page number display
5. **ErrorMessage**: Displays error messages
6. **LoadingSpinner**: Shows loading state
7. **Icons**: SVG icons used throughout the application

### Technical Highlights

- **Custom Image Slider**: Implemented with useState and onClick events
- **Responsive Grid**: Uses Tailwind CSS grid classes for different screen sizes
- **Error Handling**: Comprehensive error handling for API requests
- **Pagination Logic**: Smart pagination that adapts to the total number of pages

## How to run locally 💻

Follow these steps to run GridSnap on your local machine.

### Clone this repository

```bash
git clone https://github.com/Pappyjay23/GridSnap.git
```

### Navigate to the directory

```bash
cd GridSnap
```

### Install Dependencies

```bash
npm install
```

### Run

Run the development server to view the app.

```bash
npm run dev
```

Now, you can navigate to http://localhost:5173/ to view the app.

### Build

```bash
npm run build
```

## Credits ✍

Implementation by [@Pappyjay23](https://github.com/Pappyjay23)

