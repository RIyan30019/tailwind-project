import React from 'react';

const SignInPage = () => {
    return (
        <div className="signIn-page">
            <br />
            <br />
            <div className="p-10">
                <h2 className="text-center text-3xl leading-9 
            font-extrabold text-gray-800"
                >
                    Sign In to your account
          </h2>
                <p className="text-center text-sm leading-5 
             text-gray-600"
                >
                    Or
            <span className="text-teal-400 mx-2">
                        Create an account
            </span>
            It's simple and easy
            <br />
                </p>
                <br />
                <br />
                <form >
                    <div className="flex justify-center">
                        <div className="lg:w-1/3 md:w-2/3 w-full">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="email"
                            >
                                Email
                </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="youremail@gmail.com"
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full 
                    py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex justify-center mt-4">
                        <div className="lg:w-1/3 md:w-2/3 w-full">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="password"
                            >
                                Password
                </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="*********"
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full 
                    py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                                required
                            />
                        </div>
                    </div>
                    {/** submit button */}
                    <div className="mt-4 flex justify-center">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignInPage;