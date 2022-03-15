const _ = require('../index');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
_.assertEqual(_.eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
_.assertEqual(_.eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
_.assertEqual(_.eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
_.assertEqual(_.eqObjects(cd, cd2), false); // => false

// const cd = { c: ["1", 3], d: [3, 3] };
// const dc = { c: ["1", 3], d: [2, 3] };
// _.assertEqual(_.eqObjects(cd, dc), false); // => false

const ef = { c: "1", d: ["2", 3, 4, [1]] };
const fe2 = { c: "1", d: ["2", 3, 4, [1]] }
_.assertEqual(_.eqObjects(ef, fe2), true)

_.assertEqual(_.eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true) // => true

_.assertEqual(_.eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false) // => false

_.assertEqual(_.eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false) // => false

_.assertEqual(_.eqObjects({ a: { z: 1 , d: { f: 2 } }, b: 2 }, { a: { z: 1 , d: { f: 2 } }, b: 2 }), true) // => false