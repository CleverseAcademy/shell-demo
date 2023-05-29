import foo from './foo';
import bar from './bar';
import dotenv from 'dotenv';

foo();
bar();

dotenv.config();
console.log(`MYENV is ${process.env.MYENV}`);
