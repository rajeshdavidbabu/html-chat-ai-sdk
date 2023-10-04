# HTML-CHAT AI ✨🤖💻🗃️

An AI-powered HTML chat built with Next.js 13, Vercel's AI SDK, Langchain, Python and PineconeDB

## 👷🏾‍♂️ Want to Learn How to Build It?

Subscribe to my YT [channel](https://www.youtube.com/@raj_talks_tech/) as I will be releasing a video soon on this one.

## Demo

<img width="1230" alt="Screenshot 2023-10-04 at 10 51 05" src="https://github.com/rajeshdavidbabu/html-chat-ai-sdk/assets/15684795/96ee79bf-f2f1-417d-b78d-fdeb784f9649">

## Architecture

![Uploading Screenshot 2023-10-04 at 10.51.05.png…]()


## 🔮 Quickstart

(Using https://ui.shadcn.com/docs/ scraped and prepared under `scripts/data.ts`)

### 🗃️ Pre-requisites

- Create a free account and get an OPEN_AI key from platform.openai.com
- Create a free account and get access to PineconeDB
- And populate your `.env` file with the required information.

```bash
npm run prepare:data
npm run dev
```

### Sample questions to ask this document:

(Feel free to ask you own)

- Give me a summary ?
- Is this a component library ?
- What this document about ?
- What are the FAQs ?
- How to install alert component ?
- How to build a login form ?
- Is there a frog component ?
- Is there a temperature component ?
- Build an e-commerce card component ?
- What is components.json file about ?
- How do I use the cli ?

## How does it work ?

This project is similar to the `pdf-chat-ai-sdk` project but the secret sauce is that how the HTML content is split into chunks. It uses a library called `unstructured`.

And another special ability is that there is an intermediate step to prepare metadata-filers for our pineconeDB under `lib/prompt-tempate.ts`.

I have used https://ui.shadcn.com/docs/ to prepare my data, under `scripts/data.ts`.

## Data-preparation using Python

- First we scrape all the relevant urls from the target HTML document and prepare a urls.text file.
- Then we use the urls.txt file to go through all the pages and use `unstructured` api to split the pages into context-aware HTML chunks.
- And finally we prepare the chunks and create our `data.ts` file
- Full code is on my [google-collab](https://colab.research.google.com/drive/1ZZHsblrieO4yDv3iodolAnELZ9oSlZp8?usp=sharing).

## Running the project

### Data-loading using Node.js

- We download the `data.ts` file and format it in our IDE and run `npm run prepare:data` to populate our pineconeDB.

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
