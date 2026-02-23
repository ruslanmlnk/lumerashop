'use client';

const LoginForm = () => {
    return (
        <div className="bg-[#F9F9F9] p-8 rounded-sm border border-gray-100">
            <h2 className="text-[32px] font-normal mb-8 leading-tight">Přihlášení</h2>

            <form className="space-y-6">
                <div>
                    <label className="block text-[14px] mb-2 font-medium">Uživatelské jméno nebo e-mail <span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        className="w-full bg-white border border-gray-200 h-[50px] px-4 focus:outline-none focus:border-gray-500 rounded-sm"
                        required
                    />
                </div>

                <div>
                    <label className="block text-[14px] mb-2 font-medium">Heslo <span className="text-red-500">*</span></label>
                    <input
                        type="password"
                        className="w-full bg-white border border-gray-200 h-[50px] px-4 focus:outline-none focus:border-gray-500 rounded-sm"
                        required
                    />
                </div>

                <div className="flex items-center gap-2">
                    <input type="checkbox" id="remember" className="w-4 h-4 border-gray-300 rounded" />
                    <label htmlFor="remember" className="text-[14px]">Zapamatujte si mě</label>
                </div>

                <button
                    type="submit"
                    className="bg-[#E1B12C] text-white px-8 h-[50px] font-bold text-[14px] hover:bg-[#c79a24] transition-colors rounded-sm"
                >
                    PŘIHLÁSIT SE
                </button>

                <div className="pt-2">
                    <a href="#" className="text-[14px] text-gray-500 hover:text-black transition-colors underline underline-offset-4">
                        Zapomněli jste heslo?
                    </a>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
