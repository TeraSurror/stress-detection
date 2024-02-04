import { createChatBotMessage } from 'react-chatbot-kit';


let options = {}

const botName = 'NapNinja.ai';


const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`, options)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#262730',
    },
    chatButton: {
      backgroundColor: '#3C4F56',
    },
  },
};

export default config;