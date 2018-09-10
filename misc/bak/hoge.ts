//
//
// class Hoge {
//	
// 	fuga(): Promise<string> {
// 		return new Promise((resolve, reject) => {
// 			resolve("aaaaa");
// 		});
// 	}
// }
//
// const hoge = new Hoge();
//
// async function hogehoge() {
// 	const tmp: string = await hoge.fuga;
// 	console.log(tmp);
// }

import * as path from 'path';
import * as shelljs from 'shelljs';

const shellScriptFilePath = path.join(__dirname, '../bot/shell-scripts/decoder.sh');
const command = shellScriptFilePath
	+ ' '
	+ '/Users/junsuzuki/src/github.com/jsuzuki20120311/nan-j-min-bot-server/bot/text-files/src/test.txt'
	+ ' '
	+ '/Users/junsuzuki/src/github.com/jsuzuki20120311/nan-j-min-bot-server/bot/text-files/dist/test.txt';

shelljs.exec(command, (code, stdout, stderr) => {
	console.log(code);
	console.log(stdout);
	console.log(stderr);
});
