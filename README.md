# HTML-CHAT AI ✨🤖💻🗃️

An AI-powered HTML chat built with Next.js 13, Vercel's AI SDK, Langchain, Python and PineconeDB

## 👷🏾‍♂️ Want to Learn How to Build It?

Subscribe to my YT [channel](https://www.youtube.com/@raj_talks_tech/) as I will be releasing a video soon on this one.

## Demo

## How does it work ?

This project is similar to the `pdf-chat-ai-sdk` project but the secret sauce is that how the HTML content is split into chunks. It uses a library called `unstructured`.

And another special ability is that there is an intermediate step to prepare metadata-filers for our pineconeDB under `lib/prompt-tempate.ts`

I have used https://ui.shadcn.com/docs/ to prepare my data.

## Setup

### Data-preparation using Python

- First we scrape all the relevant urls from the target HTML document and prepare a urls.text file
- Then we use the urls.txt file to go through all the pages and use `unstructured` api to split the pages into context-aware HTML chunks.
- And finally we prepare the chunks and create our `data.ts` file
- Full code is on my [google-collab](https://colab.research.google.com/drive/1ZZHsblrieO4yDv3iodolAnELZ9oSlZp8?usp=sharing)

### Data-loading using Node.js

- We download the `data.ts` file and format it in our IDE and run `npm run prepare:data` to populate our pineconeDB

### Talking to our HTML

- Then we run our Next.js app using `npm run dev` to run our app and talk to our HTML doc. And for each answer a relevant link will also be provided.

## 👩‍🚀 Description

Built with:

- ✅ Next.js 13
- ✅ Vercel's AI SDK
- ✅ Python
- ✅ Shadcn-ui
- ✅ Langchain TypeScript integration
- ✅ PineconeDB as the knowledge store
- ✅ Dark Mode with persistent theme-switching

## 🗃️ Pre-requisites

- Create a free account and get an OPEN_AI key from platform.openai.com
- Create a free account and get access to PineconeDB
- And populate your `.env` file with the required information.

## 💬 Good to know

- The PineconeDB index creation happens when we run `npm run prepare:data`, but its better to create it manually if you dont want the command to fail.
- If the command fails, then give sometime for pinecone index to get initialized and try to run the command again, it should work eventually.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                            |
| :--------------------- | :------------------------------------------------ |
| `npm install`          | Installs dependencies                             |
| `npm run prepare:data` | Loads your HTML chunks from data.ts to PineconeDB |
| `npm run dev`          | Starts the local dev server at `localhost:3000`   |

## 👏🏽 Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.
