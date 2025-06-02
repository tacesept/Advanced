# REST Countries API with Color Theme Switcher

A modern web application that allows users to explore information about different countries around the world. Built with React and featuring a dark/light theme switcher for enhanced user experience.

## Live Preview

Check out the live demo: [REST Countries API](https://friendly-longma-23e65e.netlify.app/)

## Features

- Browse a comprehensive list of countries
- View detailed information about each country including:
  - Population
  - Region
  - Capital
  - Languages
  - Currencies
  - Border countries
- Search countries by name
- Filter countries by region
- Toggle between light and dark themes
- Responsive design for all device sizes
- Smooth animations and transitions

## Technologies Used

- React 19
- React Router DOM 7
- React Icons
- TailwindCSS 4
- Vite 6
- ESLint 9

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone [your-repository-url]
```

2. Navigate to the project directory:

```bash
cd rest-countries-api
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
├── src/              # Source files
├── public/           # Static assets
├── dist/            # Production build
├── index.html       # Entry HTML file
└── vite.config.js   # Vite configuration
```

## API Integration

This project uses the [REST Countries API](https://restcountries.com/) to fetch country data. The API is free to use and doesn't require authentication.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [REST Countries API](https://restcountries.com/) for providing the country data
- [Frontend Mentor](https://www.frontendmentor.io/) for the design inspiration
