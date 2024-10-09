import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import UserModel from "./models/User";

const config = {
  providers: [
    CredentialsProvider({
      credentials: {
        username: { type: "text" },
        password: { type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        const user = await UserModel.findOne({
          username: credentials.username,
          password: credentials.password,
        });

        if (user) {
          return user;
        }
        return null;
      },
    }),
  ],
};

export const {
  handler: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(config);
