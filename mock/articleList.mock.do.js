/**
 * node ./index.js to create xxx.mock.js
 */

const fs = require('fs')
const mock = require('../client/mock/article').articleList

fs.writeFileSync('./articleList.mock.js', `const articleListMock = ${JSON.stringify(mock)}; export default articleMock;`)
