import _ from 'lodash';

const getValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  return typeof value === 'string' ? `'${value}'` : value;
};

const getPath = (path) => path.flat().join('.');

function makePlainDiff(tree) {
  const iter = (node, path) => node.map((child) => {
    const currentPath = getPath([path, child.key]);
    switch (child.type) {
      case 'nested': {
        return iter(child.children, currentPath);
      }
      case 'added': {
        return `Property '${currentPath}' was added with value: ${getValue(child.value)}`;
      }
      case 'removed': {
        return `Property '${currentPath}' was removed`;
      }
      case 'changed': {
        return `Property '${currentPath}' was updated. From ${getValue(child.value)} to ${getValue(child.value2)}`;
      }
      case 'unchanged': {
        return null;
      }
      default: {
        throw Error('Uncorrect data');
      }
    }
  });
  return iter(tree.children, []);
}

const makePlain = (tree) => {
  const result = makePlainDiff(tree);
  return _.flattenDeep(result)
    .filter((el) => el)
    .join('\n');
};

export default makePlain;
