import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const handleHello = () => {
        const botMessage = createChatBotMessage('Hello. Nice to meet you.');
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
      };

    const handleQuery = async () => {
        const apiResponse = async () => {
            try {
              const response = await fetch('https://api.example.com/data');
              const result = await response.json();
              return result;
            } catch (error) {
              console.error('Error fetching data:', error);
              return "Some error ocurred, try again"
          }};
        const botMessage = createChatBotMessage(apiResponse);
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
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