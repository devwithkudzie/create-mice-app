#!/usr/bin/env node

import { promises as fs } from 'fs';
import { join, dirname } from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const projectName = process.argv[2];

// Add template type option
const templateType = process.argv[3] || 'default'; // Can be 'default' or 'react'

if (!projectName) {
    console.error('Please specify a project name:');
    console.error('  npm create mice-app my-app');
    process.exit(1);
}

// Create project directory
const projectPath = join(process.cwd(), projectName);
await fs.mkdir(projectPath, { recursive: true });

// Create directory structure
const dirs = [
    'src/components',
    'src/pages',
    'public/styles'
];

console.log('Creating directory structure...');
for (const dir of dirs) {
    await fs.mkdir(join(projectPath, dir), { recursive: true });
}

// Template files with actual content
const defaultTemplates = {
    'src/components/navbar.html': `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
        <a class="navbar-brand" href="/">My App</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/about">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/contact">Contact</a>
                </li>
            </ul>
        </div>
    </div>
</nav>`,

    'src/components/footer.html': `<footer class="bg-dark text-light py-4 mt-auto">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <p>&copy; 2025 My App. All rights reserved. Made with love @kudziemuks</p>
            </div>
            <div class="col-md-6 text-md-end">
                <a href="/about" class="text-light me-3">About</a>
                <a href="/contact" class="text-light">Contact</a>
            </div>
        </div>
    </div>
</footer>`,

    'src/pages/home.html': `<div class="container mt-4">
        <h1>Welcome to Mice.js</h1>
        <p>Start building your app!</p>
    </div>`,

    'src/pages/about.html': `<div class="container mt-4">
        <h1>About Us</h1>
        <p>This is the about page.</p>
    </div>`,

    'src/pages/contact.html': `<div class="container mt-4">
        <h1>Contact Us</h1>
        <p>Get in touch with us.</p>
    </div>`,

    'public/styles/main.css': `/* Add your custom styles here */`,

    'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Mice.js App</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="/public/styles/main.css">
</head>
<body>
    <div data-component="navbar.html"></div>
    <div id="app"></div>
    <div data-component="footer.html"></div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script type="module" src="/src/main.js"></script>
</body>
</html>`,

    'src/main.js': `import { Router } from '@micejs/core';

// Initialize the router
const router = new Router();
router.loadPage();`,

    'package.json': JSON.stringify({
        name: projectName,
        private: true,
        version: "0.0.0",
        type: "module",
        scripts: {
            "dev": "vite",
            "build": "vite build",
            "preview": "vite preview"
        },
        dependencies: {
            "@micejs/core": "^1.0.2"
        },
        devDependencies: {
            "vite": "^5.0.0"
        }
    }, null, 2)
};

// React template files
const reactTemplates = {
    'src/App.jsx': `import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Mice + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App`,

    'src/main.jsx': `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)`,

    'index.html': `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mice + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`,

    'package.json': JSON.stringify({
        name: projectName,
        private: true,
        version: '0.0.0',
        type: 'module',
        scripts: {
            "dev": "vite",
            "build": "vite build",
            "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
            "preview": "vite preview"
        },
        dependencies: {
            "react": "^18.2.0",
            "react-dom": "^18.2.0"
        },
        devDependencies: {
            "@types/react": "^18.2.43",
            "@types/react-dom": "^18.2.17",
            "@vitejs/plugin-react": "^4.2.1",
            "eslint": "^8.55.0",
            "eslint-plugin-react": "^7.33.2",
            "eslint-plugin-react-hooks": "^4.6.0",
            "eslint-plugin-react-refresh": "^0.4.5",
            "vite": "^5.0.8"
        }
    }, null, 2),

    'vite.config.js': `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})`
};

// Use appropriate templates based on type
const templates = templateType === 'react' ? reactTemplates : defaultTemplates;

// Write template files
console.log('Writing files...');
for (const [file, content] of Object.entries(templates)) {
    const filePath = join(projectPath, file);
    await fs.mkdir(dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, content);
}

// Initialize npm and install dependencies
console.log('Installing dependencies...');
execSync('npm install', { cwd: projectPath, stdio: 'inherit' });

console.log(`
Project ${projectName} created successfully!

To get started:
  cd ${projectName}
  npm run dev
`); 
