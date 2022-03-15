# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @arismink/lotide`

**Require it:**

`const _ = require('@arismink/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: function that confirms two arrays are equal
* `assertEqual(...)`: function that confirms two inputs are equal
* `assertObjectsEqual(...)`: function that confirms two objects are equal
* `eqArrays(...)`: function that checks if two arrays are equal
* `eqObjects(...)`: function that checks if two objects are equal

* `countLetters(...)`: function that counts the number of letters in an input
* `countOnly`: function that counts only for the specified parameter in a given array
* `findKey`: function that returns the keys of an object using a callback function
* `findKeyByValue`: function that returns the key of a specified value in an object 
* `flatten`: function that 'flattens' an array
* `head`: function that returns the element at index 0
* `letterPositions`: function that returns an object containing the positions of all the characters in a given string
* `map`: function that returns a new array with each element having been modified by the specified callback function
* `middle`: function that returns the middle value of an array
* `tail`: function that returns all elements after index 0 
* `takeUntil`: function that performs a callback function on each element of an array until specified element
* `without`: function that returns a subset of a given array with all unwanted elements removed
