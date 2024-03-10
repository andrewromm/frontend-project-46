import _ from 'lodash';

export default function getDiff(data1, data2) {
    const keys1 = Object.keys(data1);
    const keys2 = Object.keys(data2);
    const keys = _.union(keys1, keys2).sort();

    const result = keys.map((key) => {
        if (!_.has(data1, key)) {
            return `  + ${key}: ${data2[key]}`;
        }
        if (!_.has(data2, key)) {
            return `  - ${key}: ${data1[key]}`;
        }
        if (data1[key] === data2[key]) {
            return `    ${key}: ${data1[key]}`;
        }
        return `  - ${key}: ${data1[key]}\n  + ${key}: ${data2[key]}`;
    });
    return `{\n${result.join('\n')}\n}`;
}