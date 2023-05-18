import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Ottrmate",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const authResponse = await fetch(
          "https://ottrmate-hub.herokuapp.com/users/sign_in",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ user: credentials }),
          }
        );
        const user = await authResponse.json();
        console.log("auth response: ", user);
        if (authResponse.ok && user) return user;
        else return null;
      },
    }),
  ],
  // callbacks: {
  //   session({ session, token, user }) {
  //     return session; // The return type will match the one returned in `useSession()`
  //   },
  // },
};