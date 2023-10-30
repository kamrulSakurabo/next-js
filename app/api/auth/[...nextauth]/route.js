import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';

import { conectToDB } from '@utils/database';
const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    async session({session}){

    },
    async signIn({ profile }){
        try {
            await conectToDB();
            //check if user already exists

            //if not create a new user
            return true;
        }catch (error){
            console.log(error)

        }

    }
})
export { handler as GET, handler as POST };