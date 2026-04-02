import Link from "next/link";

export interface Post {
  id: string;
  narrative: string;
  imageURL: string | null;
  isPublic: boolean;
  feeling: string | null;
  createdAt: string | null;
  author: {
    id: string;
    name: string;
  };
  isOwner: boolean; // Optional property to indicate if the current user is the owner of the post
}

export default function PostFeed({ posts, handleDelete }: { posts: Post[]; handleDelete: (postId: string) => Promise<void> }) {

  return (
    <div className="mt-8">
      {posts.map((post) => (
        <article key={post.id} className="group mb-6 overflow-hidden rounded-xl bg-surface-container-lowest shadow-[0_8px_40px_-12px_rgba(49,41,80,0.06)]">
          <div className="p-6">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-primary-container text-on-primary-container font-bold text-lg">
                  {post.author.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h3 className="headline-font font-bold leading-tight text-on-surface">{post.author.name}</h3>
                  <p className="text-xs font-medium text-on-surface-variant">{post.createdAt ? new Date(post.createdAt).toLocaleDateString() : ''} {post.feeling ? `• Feeling ${post.feeling}` : ''}</p>
                </div>
              </div>
              {post.isOwner && (
                <div className="relative group/dropdown">
                  {/* The Button */}
                  <button className="flex items-center justify-center h-8 w-8 rounded-full text-on-surface-variant transition-colors hover:bg-surface-variant hover:text-primary focus:bg-surface-variant focus:text-primary outline-none">
                    <span className="material-symbols-outlined">more_horiz</span>
                  </button>

                  {/* The Dropdown: Hidden by default, shown when the dropdown container has focus */}
                  <div className="invisible opacity-0 group-focus-within/dropdown:visible group-focus-within/dropdown:opacity-100 absolute right-0 mt-1 w-32 bg-surface-container-low border border-outline-variant rounded-xl shadow-xl transition-all duration-200 z-50 overflow-hidden">
                    <div className="flex flex-col py-1">
                      <Link
                        href={`/edit/${post.id}`}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-on-surface hover:bg-surface-variant transition-colors text-left"
                      >
                        <span className="material-symbols-outlined text-sm">edit</span>
                        Edit
                      </Link>
                      <button
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-error hover:bg-error-container/10 transition-colors text-left"
                        onMouseDown={(e) => {
                          e.preventDefault(); // Prevent focus loss before click
                          handleDelete(post.id);
                        }}
                      >
                        <span className="material-symbols-outlined text-sm">delete</span>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <p className="mb-6 leading-relaxed text-on-surface font-body whitespace-pre-wrap">
              {post.narrative}
            </p>
          </div>
          {post.imageURL && (
            <div className="px-6 pb-4">
              <div className="h-64 sm:h-80 w-full overflow-hidden rounded-xl shadow-md bg-surface-container-low">
                <img
                  alt="Post image"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={post.imageURL}
                />
              </div>
            </div>
          )}
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center gap-6">
              <button className="group/btn flex items-center gap-2 transition-transform active:scale-90">
                <span className="material-symbols-outlined text-outline transition-transform group-hover/btn:scale-110">
                  favorite
                </span>
                <span className="text-sm font-bold text-on-surface">0</span>
              </button>
              <button className="group/btn flex items-center gap-2 transition-transform active:scale-90">
                <span className="material-symbols-outlined text-on-surface-variant transition-colors group-hover/btn:text-primary">
                  chat_bubble
                </span>
                <span className="text-sm font-bold text-on-surface">0</span>
              </button>
              <button className="group/btn flex items-center gap-2 transition-transform active:scale-90">
                <span className="material-symbols-outlined text-on-surface-variant transition-colors group-hover/btn:text-primary">
                  share
                </span>
              </button>
            </div>

            <button className="rounded-full bg-surface-container-low p-2 text-on-surface-variant transition-all hover:bg-secondary-container hover:text-on-secondary-container">
              <span className="material-symbols-outlined">bookmark</span>
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
