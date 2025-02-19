# Create Mice App

A lightweight and modern web application generator using Vite and component-based architecture.

## Quick Start
bash
Using npm
npm create mice-app my-app
Using yarn
yarn create mice-app my-app
Using pnpm
pnpm create mice-app my-app

## Features

- 🚀 Zero configuration setup
- ⚡️ Lightning fast with Vite
- 📦 Component-based architecture
- 🔄 Live reload during development
- 🎨 Bootstrap 5 integration
- 📱 Responsive by default
- 🛠 Simple and intuitive routing
- 🎯 Template engine with Handlebars-like syntax

## Project Structure
my-app/
├── components/ # Reusable components
│ ├── navbar.html # Navigation component
│ └── footer.html # Footer component
│
├── pages/ # Page templates
│ ├── home.html # Home page
│ ├── about.html # About page
│ └── contact.html # Contact page
│
├── public/ # Static assets
│ └── styles/
│ └── main.css # Custom styles
│
├── src/
│ ├── core/ # Core framework files
│ │ ├── component.js
│ │ ├── router.js
│ │ └── template.js
│ └── main.js # Application entry point
│
├── index.html # HTML entry point
└── vite.config.js # Vite configuration
html
<!-- components/card.html -->
<div class="card">
<h2>{{title}}</h2>
<p>{{description}}</p>
</div>
html
<!-- With parameters -->
<div data-component="card.html"
data-params='{"title": "Hello", "description": "World"}'>
</div>
<!-- Without parameters -->
<div data-component="navbar.html"></div>
html
<!-- pages/about.html -->
<div class="container">
<h1>About Us</h1>
<p>Welcome to our website!</p>
</div>
html
<a href="/about">About Us</a>
bash
cd my-app
npm run dev # Start development server
bash
npm run build # Create production build
npm run preview # Preview production build
The README now includes:
Proper code block formatting with language hints
Clear installation instructions
Detailed usage examples
Complete project structure
5. Development and build instructions
Contributing guidelines
Support section
License information
Would you like me to explain or modify any section?

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Requirements

- Node.js 14.18+ or 16+
- npm 7+, yarn, or pnpm

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT © [Kudzaishe Mukungurutse]

## Support

If you find this project helpful, please give it a ⭐️ on [GitHub](https://github.com/yourusername/create-mice-app)!

## Usage

### Creating Components

### Using Components

### Creating Pages