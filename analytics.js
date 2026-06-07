/**
 * Vercel Web Analytics initialization for static site
 * This script initializes Vercel Analytics by injecting the tracking script
 */

// Import the inject function from @vercel/analytics
import { inject } from './node_modules/@vercel/analytics/dist/index.mjs';

// Initialize analytics
inject({
  mode: 'auto', // Auto-detect production/development environment
  debug: true   // Enable debug logging in development
});
