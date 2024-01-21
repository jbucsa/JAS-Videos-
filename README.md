<img align="center" src="/public/images/README_screenshot.jpg" width="700">


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, when starting the project install the following lines in the terminal to create the Next.js project. 

```bash
npm init
#This will create the inital package.json file

npm i -D ts-node

npm create-next-app --typescript

npm install next@latest react@latest react-dom@latest

npm i mongoose
```


After Next.js is installed, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Adding Tailwind to the project

```bash
 npm install -D tailwindcss

 npm install -D tailwindcss postcss autoprefixer

 npm install @heroicons/react

 npm install -D prisma

 npx prisma init

 npm install next-auth

 npm install bcrypt

 npm install -D @types/bcrypt

npm i axios

npm install swr

npm install @prisma/client

npx prisma generate

npm i lodash

pm i --save-dev @types/lodash

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Troubleshooting Steps for Command Problems

Error Code:

- Error No. -4058

```bash
npm run build
# this should run Next.js in the system if you are receiving an error code "errno: -4058, code: 'ENOENT', syscall: 'open', path : 'C:\\User\\USERNAME\\PROJECT LOCATION\\.next\\BUILD_ID"


```

## Files that used the database variables

These are the following files that will needed to change depending on the style of database used when designing this project.

- /pages/api/[...nextauth].ts
- /prisma/schema.prisma
- /lib/dbConnect.ts
- /lib/seedData.js


## Helpful Resources
using ['SWR'](https://refine.dev/blog/data-fetching-next-js-useswr/#introduction) to manage API callls


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Creating models

create an .env file with the proper connection string

```bash
npm prisma db push


## Building Using

Moelink is built using the following technologies:

- React.js - The library for web and native user interfaces
- React-Redux - For routing
- Next.js 14 - For application and layout
- TypeScript - Extends JavaScript by adding types to the language
- Tailwind - For styling and CSS
- Prisma - Used for database schema, and connections
- MongoDB Atlas - For database and cloud connection
- SWR - To connect hook functions through the application
- Axois - To assist in fetching out data
 


## Authors

Justin Bucsa
- https://github.com/jbucsa
- https://www.linkedin.com/in/justin-bucsa

Aldo Resendiz
- https://github.com/aldoresendiz
- https://www.linkedin.com/in/aldoresendiz/

Sam Cowdery 
- https://github.com/sjcowdery96
- https://www.linkedin.com/in/samuel-cowdery/



##  Contributing

Thanks to the following contributors for coding help and image design:
Creator Account: Code With Antonio 
Contribution: Coding and Design
Platform: Youtube
Webpage: https://www.youtube.com/@codewithantonio