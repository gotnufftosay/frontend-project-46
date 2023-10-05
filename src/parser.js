import YAML from 'js-yaml';
import { readFileSync } from 'fs';
import { extname, resolve } from 'node:path';

export default (filepath) => {
  const extenstionFile = extname(filepath);
  const readyFilePath = readFileSync(resolve(process.cwd(), filepath));

  return extenstionFile === '.json' ? JSON.parse(readyFilePath) : YAML.load(readyFilePath);
};
