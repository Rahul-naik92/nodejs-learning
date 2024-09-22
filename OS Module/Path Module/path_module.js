const path = require('path')


console.log(path.dirname('D:/node_learning/OS Module/Path Module/path_module.js'))

console.log(path.extname('D:/node_learning/OS Module/Path Module/path_module.js'))

console.log(path.basename('D:/node_learning/OS Module/Path Module/path_module.js'))

console.log(path.parse('D:/node_learning/OS Module/Path Module/path_module.js'))

const myPath = path.parse('D:/node_learning/OS Module/Path Module/path_module.js')

console.log(myPath.name)