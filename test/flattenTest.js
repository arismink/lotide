const _ = require('../index');

_.assertArraysEqual(_.flatten([1, 2, [3, 4, 6], 5, [6]]), [1, 2, 3, 4, 6, 5, 6]);