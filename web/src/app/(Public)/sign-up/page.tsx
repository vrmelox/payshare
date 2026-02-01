"use client"

import Image from "next/image"
import { useState } from "react"
import { registerUser } from "@/api/auth"

const SignUp = () => {
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({
        FirstName: "",
        LastName: "",
        Username: "",
        Email: "",
        Phone: "",
        Gender: "",
        BirthDate: "",
        CityOfBirth: "",
        CountryOfBirth: "",
        Password: "",
        ConfirmPassword: "",
        Address: "",
        City: "",
        State: "",
        ZipCode: "",
        Country: "Ethiopia",
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
            registerUser(formData)
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
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-end p-8">
                    <div className="text-white">
                        <h2 className="text-3xl font-black mb-3 font-epilogue leading-tight">Join the<br />PayShare Community</h2>
                        <p className="text-base opacity-90 font-inter">Start sharing and growing together with 50,000+ users worldwide.</p>
                    </div>
                </div>
            </section>

            {/* Section Droite - Formulaire */}
            <section className="flex-1 flex flex-col bg-[#F5F9FA] relative overflow-hidden">
                {/* Navigation Back */}
                <div className="px-6 py-4 flex-shrink-0">
                    {step > 1 && (
                        <button
                            onClick={prevStep}
                            className="flex items-center gap-2 text-dark font-bold text-sm hover:opacity-70 transition-opacity"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                            Back
                        </button>
                    )}
                </div>

                {/* Contenu principal - scrollable si nécessaire */}
                <div className="flex-1 flex items-center justify-center px-6 md:px-8 overflow-y-auto">
                    <div className="w-full max-w-xl py-4">
                        <div className="mb-6">
                            <div className="flex items-center gap-2 mb-2">
                                <div className={`h-1 w-10 rounded-full ${step >= 1 ? 'bg-accent' : 'bg-gray-200'}`}></div>
                                <div className={`h-1 w-10 rounded-full ${step >= 2 ? 'bg-accent' : 'bg-gray-200'}`}></div>
                                <div className={`h-1 w-10 rounded-full ${step >= 3 ? 'bg-accent' : 'bg-gray-200'}`}></div>
                            </div>
                            <h1 className="text-2xl md:text-3xl font-black text-dark font-epilogue">
                                {step === 1 && "Create your account"}
                                {step === 2 && "Personal Details"}
                                {step === 3 && "Location & Payment"}
                            </h1>
                            <p className="text-gray-500 text-xs">Step {step} of 3</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {step === 1 && (
                                <div className="space-y-3">
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="space-y-1">
                                            <label htmlFor="first_name" className="text-[10px] font-bold text-dark uppercase tracking-wider">First Name</label>
                                            <input type="text" id="first_name" value={formData.FirstName} onChange={handleChange} required className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent/50 focus:border-accent transition outline-none text-dark text-sm" placeholder="John" />
                                        </div>
                                        <div className="space-y-1">
                                            <label htmlFor="last_name" className="text-[10px] font-bold text-dark uppercase tracking-wider">Last Name</label>
                                            <input type="text" id="last_name" value={formData.LastName} onChange={handleChange} required className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent/50 focus:border-accent transition outline-none text-dark text-sm" placeholder="Doe" />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label htmlFor="username" className="text-[10px] font-bold text-dark uppercase tracking-wider">Username</label>
                                        <input type="text" id="username" value={formData.Username} onChange={handleChange} required className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent/50 focus:border-accent transition outline-none text-dark text-sm" placeholder="johndoe_123" />
                                    </div>
                                    <div className="space-y-1">
                                        <label htmlFor="email" className="text-[10px] font-bold text-dark uppercase tracking-wider">Email Address</label>
                                        <input type="email" id="email" value={formData.Email} onChange={handleChange} required className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent/50 focus:border-accent transition outline-none text-dark text-sm" placeholder="john@example.com" />
                                    </div>
                                    <div className="space-y-1">
                                        <label htmlFor="phone" className="text-[10px] font-bold text-dark uppercase tracking-wider">Phone Number</label>
                                        <input type="tel" id="phone" value={formData.Phone} onChange={handleChange} required className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent/50 focus:border-accent transition outline-none text-dark text-sm" placeholder="+229 00 00 00 00" />
                                    </div>

                                    <div className="relative py-3">
                                        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
                                        <div className="relative flex justify-center text-[10px] uppercase tracking-widest"><span className="px-2 bg-[#F5F9FA] text-gray-400 font-bold">Or register with</span></div>
                                    </div>

                                    <div className="flex gap-3">
                                        <button type="button" className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 transition font-bold text-xs text-dark">
                                            <Image src="/paystack.svg" alt="Paystack" width={16} height={16} /> Paystack
                                        </button>
                                        <button type="button" className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 transition font-bold text-xs text-dark">
                                            <Image src="/gpay.svg" alt="GPay" width={16} height={16} /> GPay
                                        </button>
                                    </div>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="space-y-3">
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="space-y-1">
                                            <label htmlFor="gender" className="text-[10px] font-bold text-dark uppercase tracking-wider">Gender</label>
                                            <select id="gender" value={formData.Gender} onChange={handleChange} required className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent/50 focus:border-accent transition outline-none text-dark text-sm">
                                                <option value="">Select...</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                        <div className="space-y-1">
                                            <label htmlFor="birth_date" className="text-[10px] font-bold text-dark uppercase tracking-wider">Birth Date</label>
                                            <input type="date" id="birth_date" value={formData.BirthDate} onChange={handleChange} required className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent/50 focus:border-accent transition outline-none text-dark text-sm" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="space-y-1">
                                            <label htmlFor="city_of_birth" className="text-[10px] font-bold text-dark uppercase tracking-wider">City of Birth</label>
                                            <input type="text" id="city_of_birth" value={formData.CityOfBirth} onChange={handleChange} required className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent/50 focus:border-accent transition outline-none text-dark text-sm" placeholder="Paris" />
                                        </div>
                                        <div className="space-y-1">
                                            <label htmlFor="country_of_birth" className="text-[10px] font-bold text-dark uppercase tracking-wider">Country of Birth</label>
                                            <input type="text" id="country_of_birth" value={formData.CountryOfBirth} onChange={handleChange} required className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent/50 focus:border-accent transition outline-none text-dark text-sm" placeholder="France" />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label htmlFor="password" className="text-[10px] font-bold text-dark uppercase tracking-wider">Create Password</label>
                                        <input type="password" id="password" value={formData.Password} onChange={handleChange} required className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent/50 focus:border-accent transition outline-none text-dark text-sm" placeholder="••••••••" />
                                        <p className="text-[9px] text-gray-400">Must be at least 8 characters with a number and a symbol.</p>
                                    </div>
                                    <div className="space-y-1">
                                        <label htmlFor="confirm_password" className="text-[10px] font-bold text-dark uppercase tracking-wider">Confirm Password</label>
                                        <input type="password" id="confirm_password" value={formData.ConfirmPassword} onChange={handleChange} required className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent/50 focus:border-accent transition outline-none text-dark text-sm" placeholder="••••••••" />
                                    </div>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="space-y-3">
                                    <div className="space-y-1">
                                        <label htmlFor="address" className="text-[10px] font-bold text-dark uppercase tracking-wider">Street Address</label>
                                        <input type="text" id="address" value={formData.Address} onChange={handleChange} required className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent/50 focus:border-accent transition outline-none text-dark text-sm" placeholder="123 Main St" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="space-y-1">
                                            <label htmlFor="city" className="text-[10px] font-bold text-dark uppercase tracking-wider">City</label>
                                            <input type="text" id="city" value={formData.City} onChange={handleChange} required className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent/50 focus:border-accent transition outline-none text-dark text-sm" placeholder="New York" />
                                        </div>
                                        <div className="space-y-1">
                                            <label htmlFor="state" className="text-[10px] font-bold text-dark uppercase tracking-wider">State/Region</label>
                                            <input type="text" id="state" value={formData.State} onChange={handleChange} required className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent/50 focus:border-accent transition outline-none text-dark text-sm" placeholder="NY" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="space-y-1">
                                            <label htmlFor="zip_code" className="text-[10px] font-bold text-dark uppercase tracking-wider">Zip Code</label>
                                            <input type="text" id="zip_code" value={formData.ZipCode} onChange={handleChange} required className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent/50 focus:border-accent transition outline-none text-dark text-sm" placeholder="10001" />
                                        </div>
                                        <div className="space-y-1">
                                            <label htmlFor="country" className="text-[10px] font-bold text-dark uppercase tracking-wider">Country</label>
                                            <input type="text" id="country" value={formData.Country} onChange={handleChange} required className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent/50 focus:border-accent transition outline-none text-dark text-sm" placeholder="Ethiopia" />
                                        </div>
                                    </div>

                                    <div className="pt-2">
                                        <label className="text-[10px] font-bold text-dark uppercase tracking-wider block mb-2">Payment Method</label>
                                        <div className="grid grid-cols-2 gap-3">
                                            <button
                                                type="button"
                                                onClick={() => setPaymentMethod('card')}
                                                className={`flex flex-col items-center justify-center p-3 border rounded-lg transition-all ${paymentMethod === 'card' ? 'border-accent bg-accent/5 ring-1 ring-accent' : 'border-gray-200 bg-white hover:bg-gray-50'}`}
                                            >
                                                <div className="w-6 h-6 mb-1 flex items-center justify-center text-xl">💳</div>
                                                <span className={`text-xs font-bold ${paymentMethod === 'card' ? 'text-accent' : 'text-gray-400'}`}>Credit Card</span>
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setPaymentMethod('cashapp')}
                                                className={`flex flex-col items-center justify-center p-3 border rounded-lg transition-all ${paymentMethod === 'cashapp' ? 'border-accent bg-accent/5 ring-1 ring-accent' : 'border-gray-200 bg-white hover:bg-gray-50'}`}
                                            >
                                                <div className="w-6 h-6 mb-1 flex items-center justify-center text-xl">💵</div>
                                                <span className={`text-xs font-bold ${paymentMethod === 'cashapp' ? 'text-accent' : 'text-gray-400'}`}>Cash App</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="pt-3 flex items-center gap-3">
                                {step === 3 && (
                                    <button
                                        type="button"
                                        onClick={() => console.log("Added later")}
                                        className="text-gray-400 text-xs font-bold hover:text-dark transition-colors px-3"
                                    >
                                        Add later
                                    </button>
                                )}
                                <button
                                    type="submit"
                                    className="flex-1 bg-black text-white font-black py-3 rounded-full hover:bg-gray-900 shadow-lg hover:shadow-xl transition-all active:scale-[0.98] font-epilogue text-sm"
                                >
                                    {step < 3 ? "Continue" : "Complete Registration"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 text-center text-[10px] text-gray-400 flex-shrink-0">
                    Already have an account? <a href="/login" className="text-accent font-bold">Log in</a>
                </div>
            </section>
        </div>
    )
}

export default SignUp