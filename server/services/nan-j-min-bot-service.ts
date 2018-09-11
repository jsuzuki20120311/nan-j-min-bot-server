import * as fs from 'fs';
import * as path from 'path';

import * as shelljs from 'shelljs';
import * as request from 'request-promise';

import { ngWordList } from '../configs/ng-word-list';
import { SlackGoingWebHookBody } from '../models/slack-going-webhook-body';


export class NanJMinBotService {

	postMessage(body: SlackGoingWebHookBody) {
		const srcTextFilePath = path.join(__dirname, '../../bot/text-files/src/' + body.timestamp + '.txt');
		const distTextFilePath = path.join(__dirname, '../../bot/text-files/dist/' + body.timestamp + '.txt');

		console.log(body);
		
		return this.writeFilePromise(srcTextFilePath, body.text.slice(body.trigger_word.length))
			.then(() => {
				return this.execDecodeShellScript(srcTextFilePath, distTextFilePath);
			})
			.then(() => {
				return this.readFilePromise(distTextFilePath);
			})
			.then((content: string) => {
				const message = `<@${body.user_id}> `
					+ this.filteringMessage(content.replace(/^>>[0-9]*/, ''));
				return this.postToSlack(message);
			});
	}

	private writeFilePromise(filePath: string, content: string) {
		return new Promise((resolve, reject) => {
			fs.writeFile(filePath, content, (error) => {
				if (error) {
					reject(error);
				} else {
					resolve();
				}
			})
		});
	}

	private readFilePromise(filePath: string) {
		return new Promise<string>((resolve, reject) => {
			fs.readFile(filePath, (error, data) => {
				if (error || !data || typeof data.toString !== 'function') {
					reject(error);
				} else {
					resolve(data.toString());
				}
			});
		});
	}

	private execDecodeShellScript(srcTextFilePath: string, distTextFilePath: string) {
		const shellScriptFilePath = path.join(__dirname, '../../bot/shell-scripts/decoder.sh');
		const command = shellScriptFilePath + ' ' + srcTextFilePath + ' ' + distTextFilePath;
		return new Promise((resolve, reject) => {
			shelljs.exec(command, (error) => {
				if (error) {
					reject(error);
				} else {
					resolve();
				}
			});
		});
	}

	private postToSlack(message: string) {
		const url = 'https://hooks.slack.com/services/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';
		const options = {
			headers: {
				"Content-type": "application/json",
			},
			json: {
				"text": message
			}
		};
		return request.post(url, options);
	}

	private filteringMessage(message: string) {
		ngWordList.forEach((word) => {
			message.replace(word, '●●●●');
		});
		return message;
	}

}
