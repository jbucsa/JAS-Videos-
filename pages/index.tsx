import { useCallback, useState } from 'react';
import axios from 'axios';
import '../styles/globals.css';
import Input from './components/Input';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router'

function Page() {
    //use the router to create dummy login bypass 
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    //Creates a state for logged in and not logged in
    const [variant, setVariant] = useState('login');

    //Simple two state toggle between logged in and not logged in (registered)
    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant == 'login' ? 'register' : 'login');
    }, [])



    //This code is for the Login function
    const login = useCallback(async () => {
        try {
            await signIn('credentials', {
                email,
                password,
                callbackUrl: '/profiles'
            });


        } catch (error) {
            console.log(error);
        }
    }, [email, password]);


    //This is for registeration verification with the api/[...nextauth].ts file. Use npm i axios for this part
    const register = useCallback(async () => {
        try {
            await axios.post('/api/register', {
                email,
                name,
                password
            });
            login();
        } catch (error) {
            console.log(error);
        }
    }, [email, name, password, login]);


    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <div>
                    <nav className="px-12 py-10">
                        <img src="/images/logo.png" alt="Logo Here" className="h-12">
                        </img>
                    </nav>
                </div>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 
                    lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            {variant == 'login' ? 'Sign in' : 'Register'}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {variant == 'register' && (
                                <Input
                                    label="Username"
                                    onChange={(event: any) => setName(event.target.value)}
                                    id="name"
                                    type="name"
                                    value={name} />)}
                            <Input
                                label="Email"
                                onChange={(event: any) => setEmail(event.target.value)}
                                id="email"
                                type="email"
                                value={email} />
                            <Input
                                label="Password"
                                onChange={(event: any) => setPassword(event.target.value)}
                                id="password"
                                type="password"
                                value={password} />
                        </div>

                        {/* This button is for testing. Not true functionality.         */}
                        <button onClick={() => router.push('/home')} className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                            {variant == 'login' ? 'Login Bypass' : 'Sign Up Bypass'}
                        </button>


                        {/* This button is for user verification and true functionality */}
                        <button onClick={variant == 'login' ? login : register} className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                            {variant == 'login' ? 'Login' : 'Sign Up'}
                        </button>


                        <p className="text-neutral-500 mt-12">
                            {variant == 'login' ? 'First time using Netflix?' : 'Already have an account?'}
                            <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                                {variant == 'login' ? 'Create an account' : 'Login In'}
                            </span>
                        </p>

                        

                    </div>
                </div>
                <div className="px-12 py-40">
                </div>
            </div>
        </div>
    );
}

export default Page;

