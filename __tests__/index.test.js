import { join, dirname } from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
console.log(__filename);
const __dirname = dirname(__filename);

const getPath = (filename) => join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getPath(filename), 'utf-8');

test('Check json flat objects', () => {
  expect(gendiff(getPath('file1.json'), getPath('file2.json'))).toBe(readFile('test1.txt'));
});

test('Check YAML/YML flat objects', () => {
  expect(gendiff(getPath('file1.yaml'), getPath('file2.yaml'))).toBe(readFile('test2.txt'));
  expect(gendiff(getPath('file1.yml'), getPath('file2.yml'))).toBe(readFile('test3.txt'));
});