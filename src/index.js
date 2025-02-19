// Main entry point
import { Router } from './core/router';
import { ComponentLoader } from './core/component';
import { TemplateEngine } from './core/template';

// Export for external use
export { Router, ComponentLoader, TemplateEngine };

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const router = new Router();
    router.loadPage();
}); 