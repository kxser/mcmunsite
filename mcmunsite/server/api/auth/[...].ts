import GoogleProvider from "next-auth/providers/google";
import { NuxtAuthHandler } from "#auth";
import { getToken } from '#auth'

export default NuxtAuthHandler({
  secret: "1234",
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GoogleProvider.default({
      clientId: useRuntimeConfig().googleClientId,
      clientSecret: useRuntimeConfig().googleClientSecret,
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account) {
        token.sessionToken = account.session_token
        token.profile = profile
      }
      return token
    },
    async session({ session, user, token }) {
        return session
      }},
});
