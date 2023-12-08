// ChatScreen.tsx
import React, { useState, useCallback } from "react";
import { GiftedChat, IMessage } from "react-native-gifted-chat";
import { Container } from "native-base";
import { Button, TextInput, View } from "react-native";

const petQuestionsAndAnswers = {
  // Add your pet-related questions and answers here
  // For example:
  "What type of pet is best for me?":
    "The best pet for you depends on your lifestyle and preferences. Consider factors like your living space, activity level, and time commitment.",
  "How do I care for a pet?":
    "The specific care needs will vary depending on your pet type. However, some general tips include providing a healthy diet, regular exercise, and plenty of love and attention.",
  "What are some common pet problems?":
    "Some common pet problems include behavior issues, health problems, and separation anxiety. If you're facing a pet problem, consult with a veterinarian or animal behaviorist.",
};

const ChatScreen: React.FC = () => {
  const [messages, setMessages] = useState([]);

  const styles = {
    sentMessage: {
      backgroundColor: "#2196F3",
      color: "#FFFFFF",
      padding: 10,
      borderRadius: 5,
    },
    receivedMessage: {
      backgroundColor: "#2196",
      color: "#FFFFFF",
      padding: 10,
      borderRadius: 5,
    },
  };

  const onSend = useCallback(
    (newMessages) => {
      const userMessage = newMessages[0].text;

      const updatedMessages = newMessages.map((message) => ({
        ...message,
        containerStyle:
          message.user === "you" ? styles.sentMessage : styles.receivedMessage,
      }));

      // Check if the user's message is a question
      if (userMessage.endsWith("?")) {
        const answer = petQuestionsAndAnswers[userMessage];

        // Send automatic response if question is found in the data
        if (answer) {
          setMessages([
            ...messages,
            { user: "you", text: userMessage },
            { user: "bot", text: answer },
          ]);
        } else {
          // Send "I don't understand" message if no answer is found
          setMessages([
            ...messages,
            { user: "you", text: userMessage },
            { user: "bot", text: "I don't understand your question." },
          ]);
        }
      } else {
        // Send a generic response for non-questions
        setMessages([
          ...messages,
          ...updatedMessages,
          { user: "you", text: userMessage },
          {
            user: "bot",
            text: "I'm still learning about pets. How can I help you today?",
          },
        ]);
      }
    },

    [messages, petQuestionsAndAnswers, styles]
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <GiftedChat messages={messages} onSend={onSend} user={{ _id: "bot" }} />
      <Button title="Send" onPress={() => onSend} />
    </View>
  );
};

export default ChatScreen;
