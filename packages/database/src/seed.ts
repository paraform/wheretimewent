
import { prisma } from "./client"

// TODO: Create a proper seed file
async function main() { }
//   const date = new Date()

//   // This is a dummy random session token
//   const sessionToken = "04456e41-ec3b-4edf-92c1-48c14e57cacd2"

//   // Create a user
//   const mockUser = await prisma.task.upsert({
//     where: {
//       email: "e2e@e2e.com",
//     },
//     create: {
//       name: "e2e",
//       email: "e2e@e2e.com",
//       tasks: {
//         create: {
//           name: "My first task",
//         },
//       },
//       // 2. We need a session which is used by NextAuth and represents this `e2e@e2e.com` user login session
//       sessions: {
//         create: {
//           // 2.1. Here we are just making sure the expiration is for a future date, to avoid NextAuth to invalidate our session during the tests
//           expires: new Date(date.getFullYear(), date.getMonth() + 1, 0),
//           sessionToken,
//         },
//       },
//       // 3. Here we are binding our user with a "Github fake account", this is needed since we are using OAuth, we don't have to worry about this data since we are gonna intercept and mock the direct Github API calls
//       accounts: {
//         create: {
//           type: "oauth",
//           provider: "github",
//           providerAccountId: "2222222",
//           access_token: "ggg_zZl1pWIvKkf3UDynZ09zLvuyZsm1yC0YoRPt",
//           token_type: "bearer",
//           scope: "read:org,read:user,repo,user:email",
//         },
//       },
//     },
//     update: {},
//   })
//   console.log("Created mock task:", mockUser)

//   // Create a task
//   const mockTask = await prisma.task.create({
//     data: {
//       name: "Hello World! First Task",
//       userId: 
//     },
//   })
//   console.log("Created mock task:", mockTask)
// }

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
