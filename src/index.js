import _ from 'lodash';
import fileParser from './parser.js';

export default (filepath1, filepath2) => {
  const data1 = fileParser(filepath1);
  const data2 = fileParser(filepath2);

  const keys1 = _.keys(data1);
  const keys2 = _.keys(data2);
  const unKeys = _.sortBy(_.union(keys1, keys2));

  const comparess = unKeys.reduce((acc, key) => {
    if (_.has(data1, key) && _.has(data2, key)) {
      if (data1[key] === data2[key]) {
        return [...acc, `     ${key}: ${data1[key]}`];
      }
      return [...acc, `   - ${key}: ${data1[key]}`, `   + ${key}: ${data2[key]}`];
    }
    if (_.has(data1, key)) {
      return [...acc, `   - ${key}: ${data1[key]}`];
    }
    return [...acc, `   + ${key}: ${data2[key]}`];
  }, []);
  const arr = comparess.join('\n');
  return `{\n${arr}\n}`;
};
