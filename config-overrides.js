const { addBabelPlugin, override } = require('customize-cra');
const path = require('path');
console.log(__dirname)
let src  = path.join( __dirname , 'src/' )

module.exports = override(
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      "paths": [
        {
          "rootPathSuffix": `${src}`,
          "rootPathPrefix": "~/"
        },
        {
          "rootPathSuffix": `${src}/assets`,
          "rootPathPrefix": "@/"
        },
      ]
    },
  ])
);
