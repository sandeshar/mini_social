import FloatingCreateButton from "@/components/spark/FloatingCreateButton";
import MomentsSection from "@/components/spark/MomentsSection";
import PostFeed from "@/components/spark/PostFeed";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 pb-32 pt-24 sm:px-6">
      <MomentsSection />
      <PostFeed />
      <FloatingCreateButton />
    </main>
  );
}
