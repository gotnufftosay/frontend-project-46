import fileParser from './parser.js';
import buildAST from './buildAST.js';
import formatter from './formatters/index.js';

export default (filepath1, filepath2, option = 'stylish') => {
  const data1 = fileParser(filepath1);
  const data2 = fileParser(filepath2);

  const result = buildAST(data1, data2);
  return formatter(result, option);
};
