'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useActionState, useState, useEffect } from "react";
import toast from "react-hot-toast";

interface EditPostCardProps {
    postId: string;
}

export default function EditPostCard({ postId }: EditPostCardProps) {
    const [preview, setPreview] = useState("");
    const [isPublic, setIsPublic] = useState(true);
    const [narrative, setNarrative] = useState("");
    const [feeling, setFeeling] = useState("");
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const canEditResponse = await fetch(`/api/posts/canEdit/${postId}`);
                if (!canEditResponse.ok) {
                    router.push("/");
                    toast.error("You do not have permission to edit this post.");
                    return;
                }
                const response = await fetch(`/api/posts/${postId}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch post");
                }
                const data = await response.json();
                setNarrative(data.narrative);
                setIsPublic(data.isPublic);
                setFeeling(data.feeling || "");
                if (data.imageURL) {
                    setPreview(data.imageURL);
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching post:", error);
                toast.error("Failed to load post data");
                router.push("/");
            }
        };

        fetchPost();
    }, [postId, router]);

    const handleFormSubmit = async (prevState: any, formdata: FormData) => {
        const narrativeValue = formdata.get("narrative") as string;
        if (!narrativeValue || narrativeValue.trim() === "") {
            toast.error("Narrative cannot be empty.");
            return prevState;
        }
        try {
            const response = await fetch(`/api/posts/${postId}`, {
                method: "PUT",
                body: formdata
            });
            if (!response.ok) {
                const errorData = await response.json();
                console.error("Server error:", errorData);
                toast.error(`Failed to update post: ${errorData.error || response.statusText}`);
                return prevState;
            } else {
                toast.success("Post updated successfully!");
                router.replace("/");
                router.refresh();
                return prevState;
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Failed to update post. Please try again.");
            return prevState;
        }
    }

    const [state, action, pending] = useActionState(handleFormSubmit, null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const objectUrl = URL.createObjectURL(file);
            setPreview(objectUrl);
        }
    };

    if (loading) {
        return <div className="flex justify-center p-12">Loading...</div>;
    }

    return (
        <form action={action} className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-6 shadow-[0_-8px_40px_-12px_rgba(49,41,80,0.06)] md:p-8">
            <div className="mb-6 flex items-center space-x-4">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-tertiary-container ring-2 ring-surface">
                    <img
                        className="h-full w-full object-cover"
                        alt="User"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKxTSkd6RRjdu0lYpUTOxt_XVMxewniyeOTBpBdkuN0Ez6Iq5HeNscVReqEoDM4_gt0fQj0M6F-gudHSoGQ6CAOthrNrCH1MsrhmD-zwKsdcntPDR0llf7ETOUINSncMN5rFwK-Wz_Pm7v8blHshWoWPK97IU2G3OVRXUf8MP9uzmExh02bAQ2hQtZrl4UVOtRfm4UScj8FqdtRBAWnKCC1ymC_IK_nv-UkZ42WyNpdNem7u45_iX_sCtprdO6OM0X2M21iTVcQ-Dc"
                    />
                </div>
                <div>
                    <p className="font-bold leading-tight text-on-surface">User</p>
                    <input type="hidden" name="isPublic" value={isPublic ? "true" : "false"} />
                    <p
                        onClick={() => setIsPublic(!isPublic)}
                        className="mt-1 flex items-center rounded-full hover:cursor-pointer bg-surface-container-low px-2 py-0.5 text-sm text-on-surface-variant transition-colors hover:bg-surface-container-medium"
                    >
                        <span className="material-symbols-outlined mr-1">
                            {isPublic ? "public" : "lock"}
                        </span>
                        <span className="text-[11px] font-medium uppercase tracking-wider">
                            {isPublic ? "Public" : "Private"}
                        </span>
                    </p>
                </div>
            </div>

            <div className="mb-6">
                <label className="ml-1 mb-3 block text-[11px] font-semibold uppercase tracking-widest text-on-surface-variant">
                    The Narrative
                </label>
                <textarea
                    name="narrative"
                    value={narrative}
                    onChange={(e) => setNarrative(e.target.value)}
                    placeholder="Share a piece of your world..."
                    className="min-h-45 w-full resize-none rounded-md border-none bg-surface-container-low p-5 text-lg leading-relaxed text-on-surface placeholder:text-outline/60 focus:ring-2 focus:ring-primary-container"
                />
            </div>

            <div className="mb-8 grid gap-4">
                {preview ? (
                    <div className="relative group/preview h-48 w-full overflow-hidden rounded-lg">
                        <Image
                            src={preview.startsWith('/') ? preview : preview}
                            alt="Preview"
                            fill
                            className="object-cover"
                        />
                        <button
                            type="button"
                            onClick={() => {
                                setPreview("");
                                const input = document.getElementById("media-upload") as HTMLInputElement;
                                if (input) input.value = "";
                            }}
                            className="absolute right-2 top-2 rounded-full bg-black/50 p-1 text-white hover:bg-black/70"
                        >
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>
                ) : null}
                <label
                    htmlFor="media-upload"
                    className={`group col-span-1 flex h-48 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-outline-variant/30 bg-surface-container-high transition-all duration-300 hover:bg-surface-container-highest ${preview ? 'hidden' : 'flex'}`}
                >
                    <input
                        name="imageURL"
                        type="file"
                        accept="image/*"
                        id="media-upload"
                        className="hidden"
                        onChange={handleImageChange}
                    />
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm transition-transform group-hover:scale-110 text-primary">
                        <span className="material-symbols-outlined">image</span>
                    </div>
                    <span className="text-xs font-semibold text-on-secondary-fixed-variant">Add Image</span>
                </label>
            </div>

            <div className="mb-10 flex flex-wrap items-center gap-3">
                <p
                    className="flex items-center space-x-2 rounded-full bg-surface-container-high px-4 py-2 transition-all hover:bg-surface-container-highest active:scale-95"
                >
                    <span className={`material-symbols-outlined text-[18px] text-on-secondary-fixed-variant`}>mood</span>
                    <select
                        className="text-xs font-medium"
                        name="feeling"
                        value={feeling}
                        onChange={(e) => setFeeling(e.target.value)}
                    >
                        <option value={''}>Feeling</option>
                        <option value={"Happy"}>Happy</option>
                        <option value={"Sad"}>Sad</option>
                        <option value={"Excited"}>Excited</option>
                    </select>
                </p>
            </div>

            <div className="flex items-center justify-end border-t border-outline-variant/10 pt-6">
                <button
                    type="submit"
                    disabled={pending}
                    className="flex items-center space-x-2 rounded-full bg-linear-to-br from-primary to-primary-container px-10 py-3.5 font-bold text-on-primary shadow-lg shadow-primary/20 transition-all hover:shadow-primary/30 active:scale-95"
                >
                    Update Perspective
                </button>
            </div>
        </form>
    );
}