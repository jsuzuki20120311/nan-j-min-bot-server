import { NanJMinBotService } from './services/nan-j-min-bot-service';

const sampleData = {

	token: 'ssss',

	team_id:  'sss',

	service_id:  'sss',

	channel_id:  'sss',

	channel_name:  'sss',

	timestamp:  '201809091550.0000',

	user_id:  '2311231',

	user_name:  '1321312312',

	text:  'こんにちは、こ ん に ち はーーーー、ちゃんと、「こんにちは」って返してくださいよーーー',

	trigger_word:  'Hey Bot'
};

export const test = () => {
	const service = new NanJMinBotService();
	service.postMessage(sampleData);
}
