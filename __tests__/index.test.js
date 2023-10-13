import { join, dirname } from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getPath = (filename) => join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getPath(filename), 'utf-8');

test('Check files with stylish format', () => {
  expect(gendiff(getPath('file1.json'), getPath('file2.json'))).toBe(readFile('test1.txt'));
  expect(gendiff(getPath('file1.yaml'), getPath('file2.yaml'))).toBe(readFile('test1.txt'));
  expect(gendiff(getPath('file1.yml'), getPath('file2.yml'))).toBe(readFile('test1.txt'));
});

test('Check files with plain format', () => {
  expect(gendiff(getPath('file1.json'), getPath('file2.json'), 'plain')).toBe(readFile('test2.txt'));
  expect(gendiff(getPath('file1.yaml'), getPath('file2.yaml'), 'plain')).toBe(readFile('test2.txt'));
  expect(gendiff(getPath('file1.yml'), getPath('file2.yml'), 'plain')).toBe(readFile('test2.txt'));
});

test('Check files with json format', () => {
  expect(gendiff(getPath('file1.json'), getPath('file2.json'), 'json')).toBe(readFile('test3.txt'));
  expect(gendiff(getPath('file1.yaml'), getPath('file2.yaml'), 'json')).toBe(readFile('test3.txt'));
  expect(gendiff(getPath('file1.yml'), getPath('file2.yml'), 'json')).toBe(readFile('test3.txt'));
});