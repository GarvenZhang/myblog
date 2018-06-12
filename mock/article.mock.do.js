/**
 * node ./index.js to create xxx.mock.js
 */

const fs = require('fs')
const mock = require('../client/mock/article').article

fs.writeFileSync('./article.mock.js', `const articleMock = ${JSON.stringify(mock)}; export default articleMock;`)
