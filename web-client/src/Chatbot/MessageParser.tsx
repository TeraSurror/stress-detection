import React from 'react';

const MessageParser = ({ children, actions }) => {
    const parse = (message) => {
        if (message.toLowerCase().includes('hello') || message.includes('hey') || message.includes('hi')) {
            actions.handleHello();
        }else if(message.includes('Recommend')){
            actions.handleQuery();
        }else{
            actions.handleDefault();
        }
      }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;