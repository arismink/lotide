const _ = require('../index');

const words = ["ground", "control", "to", "major", "tom"];

const results1 = _.map(words, word => word[0]);
console.log(results1);

_.assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);