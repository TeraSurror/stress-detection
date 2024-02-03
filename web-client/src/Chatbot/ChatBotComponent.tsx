import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

import config from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import { relative } from 'path';

const ChatBotComponent = () => {
  return (
    <div style={
      {
        position:'relative',
        top:"60%"
      }
    }>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default ChatBotComponent;