import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { compare } from 'bcrypt';

import prismadb from '@/lib/prismadb';

export default NextAuth({
    providers: [
        Credentials({
            id: 'credentials',
            name: 'Credentials',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'text'
                },
                password: {
                    label: 'Password',
                    type: 'password'
                }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Email and password are required!');
                }

                // This const will need to change to reflect the proper database being used
                const user = await prismadb.users.findUnique({
                    where: {
                        email: credentials.email
                    }
                });
                if (!user || !user.hashedPassword) {
                    throw new Error('Email does not exist. Please try again.');
                }
                const isCorrectPassword = await compare(
                    credentials.password,
                    user.hashedPassword);

                if (!isCorrectPassword) {
                    throw new Error('Incorrect password. Try again.');
                }
                return user;
            }

                    if(!isCorrectPassword) {
                throw new Error('Incorrect password. Please try again.');
            }
                    return user;
        }
        })
    ],
pages: {
    signIn: '/auth'
},
debug: process.env.NODE_ENV === 'development',
    session: {
    strategy: 'jwt'
},
jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET
    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET,
    },
    secret: process.env.NEXTAUTH_SECRET
    secret: process.env.NEXTAUTH_SECRET,
});
