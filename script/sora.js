// Add this script if you want to dynamically add more messages
const messagesContainer = document.getElementById('messages-container');

// Example: Add a new message
const newMessage = document.createElement('div');
newMessage.className = 'message';
newMessage.textContent = 'New Message';
messagesContainer.appendChild(newMessage);

// Add more messages dynamically as needed
