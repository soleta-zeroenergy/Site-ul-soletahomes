/**
 * serve.mjs — starts Next.js dev server on port 3000
 * Usage: node serve.mjs
 */
import { spawn } from 'child_process';

const server = spawn('npx', ['next', 'dev', '--port', '3000'], {
  stdio: 'inherit',
  shell: true,
});

server.on('error', (err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});

process.on('SIGINT', () => {
  server.kill();
  process.exit(0);
});
