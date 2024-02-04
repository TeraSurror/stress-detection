import React from 'react';

const MessageParser = ({ children, actions }) => {
    const parse = (message) => {
        if (message.toLowerCase().includes('hello') || message.toLowerCase().includes('hey') || message.toLowerCase().includes('hi')) {
            actions.handleHello();
        }else if(message.toLowerCase().includes('recommend')){
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