import chalk from 'chalk';
import validator from 'validator';


console.log(chalk.blue.inverse('Hello world!'));
validator.isEmail('foo@bar.com');
console.log(chalk.red.inverse(validator.isEmail('foo@bar.com')));