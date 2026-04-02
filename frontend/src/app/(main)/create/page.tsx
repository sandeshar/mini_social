import CreatePostCard from "@/components/spark/create/CreatePostCard";
import Link from "next/link";

export default function CreatePage() {
    return (
        <main className="mx-auto max-w-3xl px-4 pb-32 pt-24">
            <div className="mb-8 flex items-center justify-between">
                <Link
                    href="/"
                    className="rounded-full p-2 transition-colors hover:bg-surface-container-high"
                >
                    <span className="material-symbols-outlined text-on-surface-variant">close</span>
                </Link>
                <h1 className="headline-font text-xl font-bold tracking-tight text-on-surface">New Perspective</h1>
                <div className="w-10" />
            </div>

            <CreatePostCard />
        </main>
    );
}
