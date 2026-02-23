'use client';

const RegisterForm = () => {
    return (
        <div className="bg-[#F9F9F9] p-8 rounded-sm border border-gray-100">
            <h2 className="text-[32px] font-normal mb-8 leading-tight">Registrovat se</h2>

            <form className="space-y-6">
                <div>
                    <label className="block text-[14px] mb-2 font-medium">E-mailová adresa <span className="text-red-500">*</span></label>
                    <input
                        type="email"
                        className="w-full bg-white border border-gray-200 h-[50px] px-4 focus:outline-none focus:border-gray-500 rounded-sm"
                        required
                    />
                </div>

                <p className="text-[14px] text-gray-600 leading-relaxed">
                    Na váš e-mail bude zaslán odkaz pro nastavení nového hesla.
                </p>

                <p className="text-[14px] text-gray-600 leading-relaxed italic">
                    Vaše osobní údaje budou použity k podpoře vaší zkušenosti na tomto webu, ke správě přístupu k vašemu účtu a k dalším účelům popsaným v našich
                    <a href="/ochrana-osobnich-udaju" className="underline hover:text-black"> ochrana osobních údajů</a>.
                </p>

                <button
                    type="submit"
                    className="bg-[#E1B12C] text-white px-8 h-[50px] font-bold text-[14px] hover:bg-[#c79a24] transition-colors rounded-sm"
                >
                    REGISTROVAT SE
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;
