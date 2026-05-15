import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
            {/* Optional: You can replace this emoji with a custom travel icon or image */}
            <div className="text-9xl mb-4 animate-bounce">📍</div>
            
            <h1 className="text-6xl font-extrabold text-slate-800 mb-2">404</h1>
            
            <h2 className="text-2xl font-bold text-slate-600 mb-4">
                Oops! You've Wandered Off the Map
            </h2>
            
            <p className="text-slate-500 max-w-md mb-8">
                The page you are looking for might have been removed, had its name changed, 
                or is temporarily unavailable. Let's get you back on track!
            </p>
            
            <Link
                href="/" 
                className="px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white font-medium rounded-lg shadow-md transition-colors duration-200"
            >
                Back to Home Base
            </Link>
        </div>
    );
};

export default NotFoundPage;