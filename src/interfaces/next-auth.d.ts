import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user:
      | {
          message: string;
          authorization: JWT;
        }
      | JWT;
  }
}
