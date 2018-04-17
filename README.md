# npm module for first task

> Js code.


#### Package

You can find a package details [npm](https://www.npmjs.com/package/jsmp-infra-first-task).

```bash
# With npm
npm install jsmp-infra-first-task
```

**Usage examples**

```js

// ES Modules
import {all} from 'jsmp-infra-first-task';
all([4, 2, 3], x => x > 1); // true
```

To import snippets with Node:

```js

const all  = require('jsmp-infra-first-task').all;
all([4, 2, 3], x => x > 1);
const  {all}  = require('jsmp-infra-first-task').all;
all([4, 2, 3], x => x > 1);
```


## Table of Contents

### Array

<details>
<summary>View contents</summary>

* [`all`](#all)
* [`any`](#any)

</details>


### String

<details>
<summary>View contents</summary>


* [`isLowerCase`](#isLowerCase)

</details>

 ## Array



### all

Returns true if the provided predicate function returns true for all elements in a collection, false otherwise.

Use Array.every() to test if all elements in the collection return true based on fn. Omit the second argument, fn, to use Boolean as a default.

```js
const all = (arr, fn = Boolean) => arr.every(fn);
```

<details>
<summary>Examples</summary>

```js
all([1, 2, 3]); // true ]
```

</details>

<br>[⬆ Back to top](#table-of-contents)



### any

Returns true if the provided predicate function returns true for at least one element in a collection, false otherwise.

Use Array.some() to test if any elements in the collection return true based on fn. Omit the second argument, fn, to use Boolean as a default.

```js
const any = (arr, fn = Boolean) => arr.some(fn);
```

<details>
<summary>Examples</summary>

```js
any([0, 1, 2, 0], x => x >= 2); // true
```

</details>

<br>[⬆ Back to top](#table-of-contents)

 ## String


### isLowerCase

Checks if a string is lower case.

Convert the given string to lower case, using String.toLowerCase() and compare it to the original.

```js
const isLowerCase = str => str === str.toLowerCase();
```

<details>
<summary>Examples</summary>

```js
isLowerCase('abc'); // true
isLowerCase('a3@$'); // true
isLowerCase('Ab4'); // false
```

</details>

<br>[⬆ Back to top](#table-of-contents)

