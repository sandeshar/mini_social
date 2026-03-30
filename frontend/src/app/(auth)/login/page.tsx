"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPending, setIsPending] = useState(false);

    const submitForm = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsPending(true);

        try {
            const response = await fetch("/api/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (!response.ok) {
                toast.error(data.error ?? "Login failed");
                return;
            }

            toast.success("Welcome back!");

            router.replace("/");
            router.refresh();
        } catch {
            toast.error("Unable to reach server. Please try again.");
        } finally {
            setIsPending(false);
        }
    };

    return (
        <div className="grid min-h-[80vh] w-full max-w-7xl grid-cols-1 overflow-hidden rounded-2xl lg:grid-cols-2">
            <div className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-indigo-600 to-violet-500 p-12 lg:flex">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent)] opacity-20" />
                <div className="relative z-10">
                    <div className="mb-12 flex items-center gap-2">
                        <span className="headline-font text-3xl font-extrabold tracking-tight text-white">Spark</span>
                    </div>
                    <h1 className="headline-font mb-6 text-5xl leading-tight font-extrabold tracking-tight text-white">
                        Capture the <br />
                        <span className="text-primary-container">unseen rhythm</span> <br />
                        of your world.
                    </h1>
                    <p className="max-w-sm text-lg leading-relaxed text-on-primary/80">
                        Join a curated community of creators who prioritize atmosphere over noise.
                    </p>
                </div>
                <div className="relative z-10">
                    <div className="mb-4 flex -space-x-3">
                        <img className="h-10 w-10 rounded-full border-2 border-indigo-400" data-alt="portrait of a young woman with a serene expression and soft lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhn1QK8ZeVHCS3QY-rL-V3T5ncL1EQh0Gn55Tx2gy8-g1bg-XkSnrq3Z3Se1KL-xV3ruO1mLN2EUgBbYwtYUAalBdL0_vP70IB-X6dNDQAM5SmK61-vy6eLaSc5R43wzj-i--MCjQiAnw4eDcQJOji5LzzaL-CRr0JOYqg7MlnWtGZVC9zrAcqIYZcamvWwa3VAs7v0d2FHORz1thhoyVqKiMMmj9PJ9htHOj4xxYCkcYlRF9KyXVqxGuXuSQas_-qcb2bGW_ytyPL" alt="" />
                        <img className="h-10 w-10 rounded-full border-2 border-indigo-400" data-alt="portrait of a young man with a slight smile in soft natural outdoor lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaxXO1_OVflZhJwFqkeBVd-DrzL-BuGKcxMOONW0AOjxQubOAPxCuYdeRPMEJMCJH2hG2MwPBMTvu12liLwDweCBl44pOgX9EnBQ6NwC-VPvqXcNgMmSDBAjQqB2Jh-ctwKg1j4oDhIoOgnQshn_3M04w7TICXq2Vj3mEqzNsmFM4V9pSxu00Qo23nJgimFU2RUlfLlVMiY9nWyYSZU08ghTCMcHpIBEipAStiCbo3nHZG5zGM1S8N0Rb-lAflkdzMAZV1OJr-cnBq" alt="" />
                        <img className="h-10 w-10 rounded-full border-2 border-indigo-400" data-alt="smiling woman with glowing skin in professional studio portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuXcI7utWCj5Le8wTPAe-WpbOjjaR-X9BEca8-jwmTVE1KzYmlHXCkBnWmhHYSCTJf5hcLZrHZUgqpkHKNVskZKBtaglOYPRw-72wvqSfp54s875mCNYSRnPvQIC-q7XfqWKYhJguEODHopa7pbpsIDwhsjvfZgCUTfmLOko-EPKLhKHoumjie7M9Z34ufE0YzuOGCdN8C8D292dPDd02aCxMJ-shFEG6YeGgdzvQ_iGJPTuQrRjKkDSOj15aR5keZ26E-Y3f98X73" alt="" />
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-indigo-400 bg-indigo-400/50 text-xs font-bold text-white backdrop-blur-sm">+12k</div>
                    </div>
                    <p className="text-sm font-medium text-indigo-100">Trusted by creators worldwide</p>
                </div>
                <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-[4rem_10rem_6rem_8rem] bg-tertiary-container/30 blur-3xl" />
            </div>

            <div className="flex flex-col items-center justify-center bg-surface-container-lowest p-8 lg:p-16">
                <div className="w-full max-w-md">
                    <div className="mb-10 text-center lg:text-left">
                        <h2 className="headline-font mb-2 text-3xl font-extrabold tracking-tight text-on-surface">Welcome back</h2>
                        <p className="text-on-surface-variant">Enter your details to access your account</p>
                    </div>
                    <form className="space-y-6" onSubmit={submitForm}>
                        <div className="space-y-2">
                            <label className="ml-1 block text-sm font-semibold text-on-surface-variant font-label" htmlFor="email">Email</label>
                            <div className="group relative">
                                <input
                                    className="w-full rounded-md border-none bg-surface-container-low px-5 py-4 font-body text-on-surface placeholder:text-outline-variant/60 transition-all focus:ring-2 focus:ring-primary/20"
                                    id="email"
                                    name="email"
                                    placeholder="name@spark.art"
                                    type="email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    required
                                />
                                <span className="material-symbols-outlined absolute top-1/2 right-4 -translate-y-1/2 text-outline-variant transition-colors group-focus-within:text-primary">alternate_email</span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="ml-1 flex items-center justify-between">
                                <label className="block text-sm font-semibold text-on-surface-variant font-label" htmlFor="password">Password</label>
                                <a className="text-sm font-semibold text-primary transition-colors hover:text-primary-dim font-label" href="#">Forgot password?</a>
                            </div>
                            <div className="group relative">
                                <input
                                    className="w-full rounded-md border-none bg-surface-container-low px-5 py-4 font-body text-on-surface placeholder:text-outline-variant/60 transition-all focus:ring-2 focus:ring-primary/20"
                                    id="password"
                                    name="password"
                                    placeholder="••••••••"
                                    type="password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    required
                                />
                                <span className="material-symbols-outlined absolute top-1/2 right-4 -translate-y-1/2 text-outline-variant transition-colors group-focus-within:text-primary">lock</span>
                            </div>
                        </div>
                        <button className="headline-font mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-container px-6 py-4 font-bold text-on-primary shadow-lg shadow-indigo-200 transition-all active:scale-95 disabled:cursor-not-allowed disabled:opacity-70" type="submit" disabled={isPending}>
                            {isPending ? "Signing in..." : "Sign in to account"}
                            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                        </button>
                    </form>
                    <div className="mt-8 border-t border-surface-container-high pt-8 text-center">
                        <p className="font-medium text-on-surface-variant">
                            Don&apos;t have an account?
                            <a className="ml-1 font-bold text-primary underline-offset-4 hover:underline" href="/signup">Sign up</a>
                        </p>
                    </div>
                </div>
                <div className="mt-auto flex gap-6 pt-10 text-[11px] font-bold tracking-widest text-outline-variant/60 uppercase">
                    <a className="transition-colors hover:text-primary" href="#">Privacy</a>
                    <a className="transition-colors hover:text-primary" href="#">Terms</a>
                    <a className="transition-colors hover:text-primary" href="#">Support</a>
                </div>
            </div>
        </div>
    );
};

export default Login;
