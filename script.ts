import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({ log: ["query"]})

const main = async () => {
  // CREATE COMMANDS
  // await prisma.user.create(
  //   {
  //     data: {
  //       name: "Kevin",
  //       email: "kevin@test.com",
  //       age: 27,
  //       userPreference: {
  //         create: {
  //           emailUpdates: true,
  //         }
  //       }
  //     },
  //     include: {                                => only include OR select is allowed
  //       userPreference: true
  //     },
  //     select: {
  //       name: true,
  //       userPreference: { select: { id: true }},
  //     }
  //   }
  // )

  // createMany() takes [] and cannot have include | select

  // -------------------------------------------------------------
  // QUERY COMMANDS
  // const user = await prisma.user.findUnique({    
     // => can use include | select as well
  //   where: {
  //     age_name: {
  //       age: 27,
  //       name: "Kevin"
  //     }
  //   }
  // })

  // const user = await prisma.user.findMany(
  //   {
  //     where: {
  //       name: { not: "Kevin"}
      // the not can be other attribute like equal, in, notIn,lt, gt,lte, gte, contains, endsWith, startsWith, is, isNot
  //     }
  //   }
  // )

  // const user = await prisma.user.findMany(
  //   {
  //     where: {
  //       AND: [{ email: { startsWith: "ke" }}, { name: "Kevin" }],
      // the AND can be OR, NOT,
  //     }
  //   }
  // )

  // const user = await prisma.user.findMany({
  //   where: {
  //     writtenPosts: {
  //       none: {
  //         title: "Test",
  //       }
      // the none keyword can be some, every, basically checking the contents in that array whether meet the conditions or not
  //     }
  //   }
  // })

  // findFirst() works like findUnique()
  // findMany()  works like findUnique()

  // const user = await prisma.user.findMany({
  //   where: {
  //     name: "Kevin"
  //   },
  //   distinct: ["name", "age"],   => distinct basically means the results should be distinct in term of name and age, if let say only specifying name, and there are multiple users with same name, then only first result will show out
  //   take: 2, => pagination, will limit how many results return
  //   skip: 1, => will skip the first one result
  //   orderBy: {
  //     age: "desc" | "asc"
  //   }
  // })

  // -------------------------------------------------------
  // UPDATE COMMANDS
  // const user = await prisma.user.update({
  //   where: {
  //     email: "kevin@test.com",
  //   },
  //   data: {
  //     email: "kevin1@test.com",
  //     userPreference: {
  //       connect: {
  //         id: 123567
      //   => connect bascially allow the object to connect a relation with other object from other table, same with disconnect
  //       },
  //     }
  //   }
  // })

  // updateMany()

  // -------------------------------------------------------
  // DELETE COMMANDS
  // const user = await prisma.user.deleteMany({
  //   where: {
  //     age: { gt: 1 }
  //   },
  // })

  // delete()
}

main()
  .catch(e => {
    console.error(e.message)
  })
  .finally(async () => {
    await prisma.$disconnect()
      .then(() => console.log('Database disconnect successfully.'))
  })