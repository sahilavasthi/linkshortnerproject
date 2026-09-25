---
agent: instructions-generator
name: create-instructions
description: Use this prompt when you need to generate a new instructions file for the /docs directory based on a specific layer of architecture or coding standard within the application.
---

<!-- Tip: Use /create-prompt in chat to generate content with agent assistance -->
Take the information below and generate an agent instructions .md file for it in the /docs directory. if the file already exists, use that otherwise generate an appropiate filename based on the generated content. Make sure the content is clear, concise, and follows the specified architecture or coding standard and not too long. Make sure to update AGENTS.md file accordingly to reference the new docs file. If no information is provided below, prompt the user to give the necessary details about the layer of architecture or coding standards to document.