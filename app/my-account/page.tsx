'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CatalogHeader from '@/components/catalog/CatalogHeader';
import LoginForm from '@/components/profile/LoginForm';
import RegisterForm from '@/components/profile/RegisterForm';
import ProfileLayout from '@/components/profile/ProfileLayout';

export default function MyAccountPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // If not logged in, show Login/Register side by side
    if (!isLoggedIn) {
        return (
            <div className="min-h-screen font-sans text-[#111111] bg-white">
                <Header />
                <main>
                    <CatalogHeader
                        title="Můj účet"
                        breadcrumbs={[{ label: 'Můj účet' }]}
                    />

                    <div className="max-w-[1140px] mx-auto px-4 lg:px-0 py-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <LoginForm />
                            <RegisterForm />
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    // If logged in, show Dashboard (default section)
    return (
        <ProfileLayout activeSection="dashboard">
            <div className="space-y-6">
                <p className="text-[16px] leading-relaxed text-gray-700">
                    Dobrý den, <span className="font-bold text-black">Ruslan</span> (nejste Ruslan? <button onClick={() => setIsLoggedIn(false)} className="text-[#E1B12C] hover:underline">Odhlásit se</button>)
                </p>

                <p className="text-[16px] leading-relaxed text-gray-700">
                    Na nástěnce svého účtu si můžete prohlédnout své <a href="/my-account/orders" className="text-[#E1B12C] hover:underline">nedávné objednávky</a>,
                    upravit <a href="/my-account/edit-address" className="text-[#E1B12C] hover:underline">fakturační a doručovací adresy</a> a
                    změnit své <a href="/my-account/edit-account" className="text-[#E1B12C] hover:underline">heslo a osobní informace</a>.
                </p>
            </div>
        </ProfileLayout>
    );
}
