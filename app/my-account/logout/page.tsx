'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LogoutPage() {
    const router = useRouter();

    useEffect(() => {
        // In a real app, clear auth tokens here
        // For now, just redirect to my-account (which will show login form)
        setTimeout(() => {
            router.push('/my-account');
        }, 1000);
    }, [router]);

    return (
        <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#E1B12C] mx-auto mb-4"></div>
                <p className="text-gray-600">Odhlašování...</p>
            </div>
        </div>
    );
}
