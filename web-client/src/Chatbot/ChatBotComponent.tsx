import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import "./customStyle.css"

import config from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import { relative } from 'path';

const ChatBotComponent = () => {
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default ChatBotComponent;