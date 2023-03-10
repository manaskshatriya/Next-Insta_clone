import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      synchronize: false,
    
    }),
    // ...add more providers here
   
  ],
  secret: process.env.NEXT_PUBLIC_SECRET,
  pages:{
    signIn: '/auth/signin',
  },
  callbacks: {
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.accessToken = token.accessToken
      session.user.uid = token.id
      session.user.uid = token.sub
      session.user.username = session.user.name.split(" ").join("").toLowerCase();
      return session
    }
  }
}

export default NextAuth(authOptions)