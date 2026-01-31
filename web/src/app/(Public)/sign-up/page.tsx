"use client"

import Image from "next/image"
import { useState } from "react"

const SignUp = () => {
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        phone: "",
        gender: "",
        birth_date: "",
        city_of_birth: "",
        country_of_birth: "",
        password: "",
        address: "",
        city: "",
        state: "",
        zip_code: "",
        country: "Ethiopia", // Default as per image
    })
    const [paymentMethod, setPaymentMethod] = useState("card")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target
        setFormData(prev => ({ ...prev, [id]: value }))
    }

    const nextStep = () => setStep(prev => Math.min(prev + 1, 3))
    const prevStep = () => setStep(prev => Math.max(prev - 1, 1))

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (step < 3) {
            nextStep()
        } else {
            console.log("Submitting form:", formData, "Payment Method:", paymentMethod)
            // Final submission logic
        }
    }

    return (
        <div className="h-screen flex flex-col md:flex-row overflow-hidden bg-[#F5F9FA]">
            {/* Section Gauche - Image de fond */}
            <section
                className="hidden md:flex md:w-[40%] relative bg-cover bg-center"
                style={{ backgroundImage: "url('/sharinglove.jpg')" }}
                aria-hidden="true"
            >
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-end p-12">
                    <div className="text-white">
                        <h2 className="text-4xl font-black mb-4 font-epilogue leading-tight">Join the<br />PayShare Community</h2>
                        <p className="text-lg opacity-90 font-inter">Start sharing and growing together with 50,000+ users worldwide.</p>
                    </div>
                </div>
            </section>

            {/* Section Droite - Formulaire */}
            <section className="flex-1 flex flex-col bg-[#F5F9FA] relative">
                {/* Navigation Back */}
                <div className="p-6">
                    {step > 1 && (
                        <button
                            onClick={prevStep}
                            className="flex items-center gap-2 text-dark font-bold text-sm hover:opacity-70 transition-opacity cursor-pointer"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                            Back
                        </button>
                    )}
                </div>

                <div className="flex-1 flex items-center justify-center p-6 md:p-12 overflow-y-auto">
                    <div className="w-full max-w-xl">
                        <div className="mb-8">
                            <div className="flex items-center gap-2 mb-2">
                                <div className={`h-1.5 w-12 rounded-full ${step >= 1 ? 'bg-accent' : 'bg-gray-200'}`}></div>
                                <div className={`h-1.5 w-12 rounded-full ${step >= 2 ? 'bg-accent' : 'bg-gray-200'}`}></div>
                                <div className={`h-1.5 w-12 rounded-full ${step >= 3 ? 'bg-accent' : 'bg-gray-200'}`}></div>
                            </div>
                            <h1 className="text-3xl font-black text-dark font-epilogue">
                                {step === 1 && "Create your account"}
                                {step === 2 && "Personal Details"}
                                {step === 3 && "Location & Payment"}
                            </h1>
                            <p className="text-gray-500 text-sm">Step {step} of 3</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {step === 1 && (
                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label htmlFor="first_name" className="text-xs font-bold text-dark uppercase tracking-wider">First Name</label>
                                            <input type="text" id="first_name" value={formData.first_name} onChange={handleChange} required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent/50 focus:border-accent transition outline-none text-dark" placeholder="John" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label htmlFor="last_name" className="text-xs font-bold text-dark uppercase tracking-wider">Last Name</label>
                                            <input type="text" id="last_name" value={formData.last_name} onChange={handleChange} required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent/50 focus:border-accent transition outline-none text-dark" placeholder="Doe" />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label htmlFor="username" className="text-xs font-bold text-dark uppercase tracking-wider">Username</label>
                                        <input type="text" id="username" value={formData.username} onChange={handleChange} required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent/50 focus:border-accent transition outline-none text-dark" placeholder="johndoe_123" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label htmlFor="email" className="text-xs font-bold text-dark uppercase tracking-wider">Email Address</label>
                                        <input type="email" id="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent/50 focus:border-accent transition outline-none text-dark" placeholder="john@example.com" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label htmlFor="phone" className="text-xs font-bold text-dark uppercase tracking-wider">Phone Number</label>
                                        <input type="tel" id="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent/50 focus:border-accent transition outline-none text-dark" placeholder="+229 00 00 00 00" />
                                    </div>

                                    <div className="relative py-4">
                                        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
                                        <div className="relative flex justify-center text-xs uppercase tracking-widest"><span className="px-3 bg-[#F5F9FA] text-gray-400 font-bold">Or register with</span></div>
                                    </div>

                                    <div className="flex gap-4">
                                        <button type="button" className="flex-1 flex items-center justify-center gap-3 py-3 border border-gray-200 rounded-xl bg-white hover:bg-gray-50 transition font-bold text-sm text-dark">
                                            <Image src="/paystack.svg" alt="Paystack" width={20} height={20} /> Paystack
                                        </button>
                                        <button type="button" className="flex-1 flex items-center justify-center gap-3 py-3 border border-gray-200 rounded-xl bg-white hover:bg-gray-50 transition font-bold text-sm text-dark">
                                            <Image src="/gpay.svg" alt="GPay" width={20} height={20} /> GPay
                                        </button>
                                    </div>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label htmlFor="gender" className="text-xs font-bold text-dark uppercase tracking-wider">Gender</label>
                                            <select id="gender" value={formData.gender} onChange={handleChange} required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent/50 focus:border-accent transition outline-none text-dark appearance-none">
                                                <option value="">Select...</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                        <div className="space-y-1.5">
                                            <label htmlFor="birth_date" className="text-xs font-bold text-dark uppercase tracking-wider">Birth Date</label>
                                            <input type="date" id="birth_date" value={formData.birth_date} onChange={handleChange} required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent/50 focus:border-accent transition outline-none text-dark" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label htmlFor="city_of_birth" className="text-xs font-bold text-dark uppercase tracking-wider">City of Birth</label>
                                            <input type="text" id="city_of_birth" value={formData.city_of_birth} onChange={handleChange} required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent/50 focus:border-accent transition outline-none text-dark" placeholder="Paris" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label htmlFor="country_of_birth" className="text-xs font-bold text-dark uppercase tracking-wider">Country of Birth</label>
                                            <input type="text" id="country_of_birth" value={formData.country_of_birth} onChange={handleChange} required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent/50 focus:border-accent transition outline-none text-dark" placeholder="France" />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label htmlFor="password" className="text-xs font-bold text-dark uppercase tracking-wider">Create Password</label>
                                        <input type="password" id="password" value={formData.password} onChange={handleChange} required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent/50 focus:border-accent transition outline-none text-dark" placeholder="••••••••" />
                                        <p className="text-[10px] text-gray-400">Must be at least 8 characters with a number and a symbol.</p>
                                    </div>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="space-y-4">
                                    <div className="space-y-1.5">
                                        <label htmlFor="address" className="text-xs font-bold text-dark uppercase tracking-wider">Street Address</label>
                                        <input type="text" id="address" value={formData.address} onChange={handleChange} required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent/50 focus:border-accent transition outline-none text-dark" placeholder="123 Main St" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label htmlFor="city" className="text-xs font-bold text-dark uppercase tracking-wider">City</label>
                                            <input type="text" id="city" value={formData.city} onChange={handleChange} required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent/50 focus:border-accent transition outline-none text-dark" placeholder="New York" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label htmlFor="state" className="text-xs font-bold text-dark uppercase tracking-wider">State/Region</label>
                                            <input type="text" id="state" value={formData.state} onChange={handleChange} required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent/50 focus:border-accent transition outline-none text-dark" placeholder="NY" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label htmlFor="zip_code" className="text-xs font-bold text-dark uppercase tracking-wider">Zip Code</label>
                                            <input type="text" id="zip_code" value={formData.zip_code} onChange={handleChange} required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent/50 focus:border-accent transition outline-none text-dark" placeholder="10001" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label htmlFor="country" className="text-xs font-bold text-dark uppercase tracking-wider">Country</label>
                                            <input type="text" id="country" value={formData.country} onChange={handleChange} required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent/50 focus:border-accent transition outline-none text-dark" placeholder="Ethiopia" />
                                        </div>
                                    </div>

                                    <div className="pt-2">
                                        <label className="text-xs font-bold text-dark uppercase tracking-wider block mb-3">Payment Method</label>
                                        <div className="grid grid-cols-2 gap-4">
                                            <button
                                                type="button"
                                                onClick={() => setPaymentMethod('card')}
                                                className={`flex flex-col items-center justify-center p-4 border rounded-xl transition-all ${paymentMethod === 'card' ? 'border-accent bg-accent/5 shadow-inner ring-1 ring-accent' : 'border-gray-200 bg-white hover:bg-gray-50'}`}
                                            >
                                                <div className="w-8 h-8 mb-2 flex items-center justify-center text-accent text-2xl">💳</div>
                                                <span className={`text-sm font-bold ${paymentMethod === 'card' ? 'text-accent' : 'text-gray-400'}`}>Credit Card</span>
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setPaymentMethod('cashapp')}
                                                className={`flex flex-col items-center justify-center p-4 border rounded-xl transition-all ${paymentMethod === 'cashapp' ? 'border-accent bg-accent/5 shadow-inner ring-1 ring-accent' : 'border-gray-200 bg-white hover:bg-gray-50'}`}
                                            >
                                                <div className="w-8 h-8 mb-2 flex items-center justify-center text-accent text-2xl">💵</div>
                                                <span className={`text-sm font-bold ${paymentMethod === 'cashapp' ? 'text-accent' : 'text-gray-400'}`}>Cash App</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="pt-4 flex items-center gap-4">
                                {step === 3 && (
                                    <button
                                        type="button"
                                        onClick={() => console.log("Added later")}
                                        className="text-gray-400 text-sm font-bold hover:text-dark transition-colors px-4"
                                    >
                                        Add later
                                    </button>
                                )}
                                <button
                                    type="submit"
                                    className="flex-1 bg-black text-white font-black py-4 rounded-full hover:bg-gray-900 shadow-xl hover:shadow-2xl transition-all active:scale-[0.98] font-epilogue"
                                >
                                    {step < 3 ? "Continue" : "Complete Registration"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Footer simple */}
                <div className="p-6 text-center text-xs text-gray-400">
                    Already have an account? <a href="/login" className="text-accent font-bold">Log in</a>
                </div>
            </section>
        </div>
    )
}

export default SignUp