import { createChatBotMessage } from 'react-chatbot-kit';


let options = {}

const config = {
  initialMessages: [createChatBotMessage(`Hello world`, options)],
  state: {},
};

export default config;