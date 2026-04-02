'use client';
import FloatingCreateButton from "@/components/spark/FloatingCreateButton";
import MomentsSection from "@/components/spark/MomentsSection";
import PostFeed, { Post } from "@/components/spark/PostFeed";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Home() {
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("/api/posts");
        if (response.ok) {
          const data = await response.json();
          setPosts(data);
        } else {
          console.error("Failed to fetch posts:", response.statusText);
          toast.error("Failed to load posts. Please try again later.");
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
        toast.error("An error occurred while loading posts. Please try again later.");
      }
    }
    fetchPosts();
  }, []);
  const handleDelete = async (postId: string) => {
    // Save current state for rollback
    const previousPosts = [...posts];

    // Optimistically update the UI
    setPosts(posts.filter((post: Post) => post.id !== postId));

    try {
      const response = await fetch(`/api/posts/${postId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        toast.success("Post deleted successfully!");
      } else {
        // Rollback if the server request fails
        setPosts(previousPosts);
        toast.error("Failed to delete post. Please try again.");
      }
    } catch (error) {
      // Rollback if there's a network error
      setPosts(previousPosts);
      console.error("Error deleting post:", error);
      toast.error("An error occurred while deleting the post.");
    }
  }
  return (
    <main className="mx-auto max-w-3xl px-4 pb-32 pt-24 sm:px-6">
      <MomentsSection />
      {posts.length > 0 ? (
        <PostFeed posts={posts} handleDelete={handleDelete} />
      ) : (
        <p>No posts available.</p>
      )}
      <FloatingCreateButton />
    </main>
  );
}
