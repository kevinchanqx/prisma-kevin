npx prisma init --datasource-provider mysql
npx prisma migrate dev --name init (after this process finish, it will run generate command, however, if prisma/client library not installed, client will not generated)
npm i prisma/client
npx prisma generate (to generate client)

*nodemon automatically use ts-node for typescript*