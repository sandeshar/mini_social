import TopNav from "@/components/spark/TopNav";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-surface text-on-surface selection:bg-primary-container selection:text-on-primary-container">
            <TopNav />
            {children}
        </div>
    );
}
