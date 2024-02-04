import React from 'react';

import apiURL from '../config';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

    const handleQuery = async (message) => {

        const dummy = createChatBotMessage('...Generating Response')
        setState((prev: { messages: any; }) => ({
          ...prev,
          messages: [...prev.messages, dummy],
        }))
        const apiResponse = async () => {

      const data = {
        'input_text': message
      }

      console.log(JSON.stringify(data))

            try {
              const response = await fetch(`${apiURL}/api`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data)});
              const result = await response.json();
              return result["result"];
            } catch (error) {
              console.error('Error fetching data:', error);
              return "Some error ocurred, try again"
          }};
        const botMessage = createChatBotMessage(await apiResponse());
    
        setState((prev: { messages: any; }) => ({
          ...prev,
          messages: [...prev.messages.slice(0,-1), botMessage],
        }));
      };

  const handleDefault = async () => {

    const botMessage = createChatBotMessage("I didnt quite get it, can you try to reprashe your question ? Hint: Ask me Recommend.....");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleQuery,
            handleDefault,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;