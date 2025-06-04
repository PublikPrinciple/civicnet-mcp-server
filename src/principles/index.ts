import fs from 'fs';
import path from 'path';

export function loadPrinciples() {
  const principlesPath = path.resolve(__dirname, 'principles.yaml');
  if (!fs.existsSync(principlesPath)) {
    return [];
  }
  const yaml = require('js-yaml');
  const fileContents = fs.readFileSync(principlesPath, 'utf8');
  return yaml.load(fileContents);
}

export function checkPrincipleAlignment(output: string, principles: any[]) {
  // Simple check: ensure output does not contain disallowed content based on principles
  // This is a placeholder for real principle alignment logic
  if (!output || output.length === 0) return false;
  // Example: check for equity principle keyword
  const equityPrinciple = principles.find((p: any) => p.id === 'equity');
  if (equityPrinciple && output.toLowerCase().includes('inequity')) {
    return false;
  }
  return true;
}
