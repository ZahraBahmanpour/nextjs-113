import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import dbConnect from "./db/db-connect";
import UserModel from "./models/User";

const config = {
  providers: [
    CredentialsProvider({
      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials) {
        if (!credentials) return null;
        try {
          await dbConnect();
          const user = await UserModel.findOne({
            username: credentials.username,
            password: credentials.password,
          });
          if (user) {
            return user;
          }
          throw new Error("Email or Password incorrect");
        } catch (e) {
          console.log(e);
        }
        return null;
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(config);
