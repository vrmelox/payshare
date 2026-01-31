"use client"

import Image from "next/image"
import { useState } from "react"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        // Logique de connexion ici
        console.log({ email, password })
        setIsLoading(false)
    }

    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Section image de fond - Cachée sur mobile */}
            <section 
                className="hidden md:flex md:w-1/2 relative bg-cover bg-center bg-no-repeat"
                style={{backgroundImage: "url('/groups.jpg')"}}
                aria-hidden="true"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50 flex items-center justify-center">
                    <div className="text-white text-center px-8">
                        <h1 className="text-5xl font-bold mb-4">PayShare</h1>
                        <p className="text-xl text-gray-200">Share your expenses simply</p>
                    </div>
                </div>
            </section>

            {/* Section formulaire - Centrée */}
            <section className="flex-1 flex items-center justify-center p-6 md:p-12">
                <div className="w-full max-w-md space-y-8">
                    {/* Card du formulaire */}
                    <div className="bg-white border border-gray-300 rounded-lg p-8 shadow-sm">
                        {/* Logo et titre */}
                        <div className="text-center mb-8">
                            <div className="flex justify-center mb-4">
                                <Image 
                                    src="/logo.svg" 
                                    alt="Logo PayShare" 
                                    width={60} 
                                    height={60}
                                    priority
                                />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                Welcome back
                            </h2>
                            <p className="text-gray-600">Connect to your account</p>
                        </div>

                        {/* Formulaire */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="your.email@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition outline-none text-gray-900"
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-900 mb-2">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition outline-none text-gray-900"
                                />
                            </div>

                            <div className="flex items-center justify-between text-sm">
                                <label className="flex items-center cursor-pointer">
                                    <input type="checkbox" className="mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                    <span className="text-gray-600">Remember me</span>
                                </label>
                                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium transition">
                                    Forgot password?
                                </a>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? "Connecting..." : "Sign in"}
                            </button>

                            <p className="text-center text-sm text-gray-600">
                                Don't have an account?{" "}
                                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium transition">
                                    Create account
                                </a>
                            </p>
                        </form>
                    </div>


                </div>
            </section>
        </div>
    )
}

export default Login