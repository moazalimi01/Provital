# ProVital - Lifestyle Medicine Platform

ProVital is a modern web application built with React and Vite that connects users with lifestyle medicine experts. The platform focuses on the six pillars of lifestyle medicine and helps users book appointments with healthcare professionals.

## Features

- Responsive navigation system
- Interactive hero section with image carousels
- Six pillars of lifestyle medicine showcase
- Mobile-responsive design
- Advanced search functionality

## Prerequisites

Before running this project, make sure you have:

- Node.js (v18.x or higher)
- npm (v9.x or higher)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/provital.git
cd provital
```

2. Install dependencies:
```bash
npm install
```

## Development

To start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Building for Production

To create a production build:
```bash
npm run build
```

## Dependencies

- React (v18.3.1)
- React DOM (v18.3.1)
- React Router DOM (v7.0.2)
- Lucide React (v0.468.0)
- React Icons (v5.4.0)
- SASS (v1.82.0)

## Dev Dependencies

- Vite (v6.0.1)
- ESLint (v9.15.0)
- Various ESLint plugins for React
- TypeScript types for React

## Project Structure

```
provital/
├── public/
│   ├── images/
│   └── logo.png
├── src/
│   ├── components/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── package.json
```

## Styling

The project uses a combination of:
- SCSS modules for component-specific styling
- CSS for global styles
- Custom CSS variables for theming

## Browser Support

The application is optimized for modern browsers and is fully responsive for mobile devices.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Vite Plugins

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## License

This project is licensed under the MIT License - see the LICENSE file for details
