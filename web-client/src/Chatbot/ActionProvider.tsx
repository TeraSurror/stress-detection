import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const handleHello = () => {
        const botMessage = createChatBotMessage('Hello. Nice to meet you.');
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
      };

    const handleQuery = async (message) => {
        const apiResponse = async () => {

            const data = {
              'input_text' : message
            }

            console.log(JSON.stringify(data))

            try {
              const response = await fetch('https://109e-34-31-41-113.ngrok-free.app/api', {
              mode:  'no-cors', 
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