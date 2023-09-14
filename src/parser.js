import YAML from 'js-yaml';
import { readFileSync } from 'fs';
import { extname, resolve } from 'node:path';

export default (filepath) => {
  const extenstionFile = extname(filepath);
  const readyFilePath = readFileSync(resolve(process.cwd(), filepath));

  switch (extenstionFile) {
    case '.json':
      return JSON.parse(readyFilePath);
    case '.yml':
      return YAML.load(readyFilePath);
    case '.yaml':
      return YAML.load(readyFilePath);
    default:
      return null;
  }
}