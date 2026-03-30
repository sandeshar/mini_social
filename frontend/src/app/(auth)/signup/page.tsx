const Signup = () => {
    return (
        <div className="grid min-h-[80vh] w-full max-w-7xl grid-cols-1 overflow-hidden rounded-2xl lg:grid-cols-2">
            <div className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-indigo-600 to-violet-500 p-12 lg:flex">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent)] opacity-20" />
                <div className="relative z-10">
                    <div className="mb-12 flex items-center gap-2">
                        <span className="headline-font text-3xl font-extrabold tracking-tight text-white">Spark</span>
                    </div>
                    <h1 className="headline-font mb-6 text-5xl leading-tight font-extrabold tracking-tight text-white">
                        Your digital <br />
                        <span className="text-primary-container">canvas</span> <br />
                        for curated thoughts.
                    </h1>
                    <p className="max-w-sm text-lg leading-relaxed text-on-primary/80">
                        Join a sophisticated community where design meets dialogue. Experience a social space that feels like a high-end magazine.
                    </p>
                </div>
                <div className="relative z-10">
                    <div className="mb-4 flex -space-x-3">
                        <img className="h-10 w-10 rounded-full border-2 border-indigo-400" data-alt="portrait of a creative professional woman with a soft natural lighting background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_mVGUbLTgeotzRj4k871yYjSkFR4jPbx_zlSoXw-wcmQEvLYQZ1UzrBHktAc7flUoe_yA_8_OjcXcGmDEnCad3NHUotUXKEFg0wIe4M0xXjqD0o9v_UZ42CrOjsoPiGOkoWg35tREq8iAmkJI1xEpeZ6W1ZW5ZOnxgpECTjieBZkIYj52DDly-ZnJPoDhcBumhkwohFoFA3mwivohzB4y6NPPLTNv-8PGc6p9SPXW8roJ4v1wlNJzd8s7-LkAETKhueatuC2JTvUc" alt="" />
                        <img className="h-10 w-10 rounded-full border-2 border-indigo-400" data-alt="portrait of a smiling young man in a minimalist studio setting with warm lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaTRiVg2kOcMx05hNXmGYvwA26Wfyl4FbpwbKVQ4LYMAVKilp8dd87_riszf3g_D6PABsRYALaBy4MuoxKowr5LOG_0WAG2yV7aainRQH2xvuOMydKcEuRWk7uCBOEnVjx7cnLBUf-9KcpxtUyUUVm-2sWMFIx1li_IpdO316FBT57sj7EQEWyYTpiWhN5idgqy-OVwHhEbS8QQK-6tWcMYwTn_0jDYWIF7Am95u6yVouP-D0F3UU1FXnCqJBF3XYlQiEAxrgwUOAf" alt="" />
                        <img className="h-10 w-10 rounded-full border-2 border-indigo-400" data-alt="profile shot of a stylish person against a soft lavender architectural background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSN_KzmB3N98B9W7wbpuqsy3wA-SetEjrZbcA6Xv0mLI3mS1izOxNIMEIisyFNcmRt59AmFfTFRhzBewColD-oV1YXzwA2MWHdofbjMw0XaHzzcar6t_Zkycd1ejlmLyf9psrAsBvcStVEAQre_t7N0ov2lguCghCQlEB0H7-3vSNgMEabALhfFutm7NHGiWLSDxOYrJx2zeR-QqJNB9THcni6YBqsOUoQuZ7J4wpz9mOcNYF17O5zgY8NMWpn9iFvTeC7teC3chS5" alt="" />
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-indigo-400 bg-indigo-400/50 text-xs font-bold text-white backdrop-blur-sm">+2k</div>
                    </div>
                    <p className="text-sm font-medium text-indigo-100">Join 2,000+ tastemakers</p>
                </div>
                <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-[4rem_10rem_6rem_8rem] bg-tertiary-container/30 blur-3xl" />
            </div>

            <div className="flex flex-col items-center justify-center overflow-y-auto bg-surface-container-lowest p-8 lg:p-12">
                <div className="my-auto w-full max-w-md">
                    <div className="mb-6 text-center lg:text-left">
                        <h2 className="headline-font mb-1 text-2xl font-extrabold tracking-tight text-on-surface">Create your account</h2>
                        <p className="text-sm text-on-surface-variant">Step into the Curated Cloud today.</p>
                    </div>
                    <form className="space-y-4">
                        <div className="space-y-1.5">
                            <label className="ml-1 block text-xs font-semibold text-on-surface-variant font-label" htmlFor="fullName">Full Name</label>
                            <div className="group relative">
                                <input className="w-full rounded-md border-none bg-surface-container-low px-4 py-3 pl-11 font-body text-on-surface placeholder:text-outline-variant/60 transition-all focus:ring-2 focus:ring-primary/20" id="fullName" name="fullName" placeholder="Alex Rivers" type="text" />
                                <span className="material-symbols-outlined absolute top-1/2 left-3.5 -translate-y-1/2 text-[20px] text-outline-variant transition-colors group-focus-within:text-primary">person</span>
                            </div>
                        </div>
                        <div className="space-y-1.5">
                            <label className="ml-1 block text-xs font-semibold text-on-surface-variant font-label" htmlFor="email">Email address</label>
                            <div className="group relative">
                                <input className="w-full rounded-md border-none bg-surface-container-low px-4 py-3 pl-11 font-body text-on-surface placeholder:text-outline-variant/60 transition-all focus:ring-2 focus:ring-primary/20" id="email" name="email" placeholder="alex@gmail.com" type="email" />
                                <span className="material-symbols-outlined absolute top-1/2 left-3.5 -translate-y-1/2 text-[20px] text-outline-variant transition-colors group-focus-within:text-primary">mail</span>
                            </div>
                        </div>
                        <div className="space-y-1.5">
                            <label className="ml-1 block text-xs font-semibold text-on-surface-variant font-label" htmlFor="password">Password</label>
                            <div className="group relative">
                                <input className="w-full rounded-md border-none bg-surface-container-low px-4 py-3 pl-11 font-body text-on-surface placeholder:text-outline-variant/60 transition-all focus:ring-2 focus:ring-primary/20" id="password" name="password" placeholder="••••••••" type="password" />
                                <span className="material-symbols-outlined absolute top-1/2 left-3.5 -translate-y-1/2 text-[20px] text-outline-variant transition-colors group-focus-within:text-primary">lock</span>
                            </div>
                        </div>
                        <button className="headline-font mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-container px-6 py-4 font-bold text-on-primary shadow-lg shadow-indigo-200 transition-all active:scale-95" type="submit">
                            Create account
                            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                        </button>
                    </form>
                    <div className="mt-6 border-t border-surface-container-high pt-6 text-center">
                        <p className="text-sm font-medium text-on-surface-variant">
                            Already have an account?
                            <a className="ml-1 font-bold text-primary underline-offset-4 hover:underline" href="/login">Sign in</a>
                        </p>
                    </div>
                    <p className="mt-6 px-4 text-center text-[10px] leading-relaxed text-outline">
                        By signing up, you agree to our <a className="underline" href="#">Terms</a> and <a className="underline" href="#">Privacy</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
