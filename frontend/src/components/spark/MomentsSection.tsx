/* eslint-disable @next/next/no-img-element */

type Story = {
  name: string;
  image: string;
  alt: string;
  bubbleClass: string;
  textClass?: string;
};

const stories: Story[] = [
  {
    name: "Elena",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDyj1_6JBLL9EWt_VpaIDLgbYSYb2ht7eTGASsCX-AmnLs_cMM07k1rPuZb0hwkZ3r8-cI81SMUVfBNgsrSiEOz7rVsSfttV9GMMwKuK3Jm7s074Yd0gI8bYUUY-h1UTTRbJ-y_LrnRgBNVEJcWhw3IAwy0htYsIFlyZ98kg5ncIiGe8iiEVjVppbyUW29PCZ8p_9ljV3dFpoAIVpg-Jv_5h6nGG-Oucwf3mJ4J5wOUYtjqQvJP0KA-PcJZsTYq8knRB3sRvAZYyNcn",
    alt: "Portrait of a creative young woman with artistic lighting and soft purple background tones",
    bubbleClass: "bg-gradient-to-tr from-primary to-tertiary group-hover:rotate-12",
  },
  {
    name: "Marcus",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAXVK6pzqkdH_C1RHrs_yAwgmEY9QhkUaYtqS-9507Xty-W-2Qp8bi3ck4VZU3L2_vxrK6siPSqtRkvoSJ3OhuGvy4iWENFo3lgYME8WnJ739Va6BD6AoF_t5UQgj8AL6o2y5gBzhxRCUWAXPwJ4snII5J24Kc4vnbxWhzjvRWRHQZqJL3wDcL9lVaNUpGyEQhcOsynIQ3eAiCtvtVobHtTeqIjn-3Oc_2SyYnB8FT0b5gSiFo5dUdd25iI7xXPjVrG5QkmAeN53LWH",
    alt: "Close up of a smiling man with modern glasses in a bright outdoor urban setting",
    bubbleClass: "bg-gradient-to-tr from-primary to-tertiary group-hover:-rotate-12",
  },
  {
    name: "Julian",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCqI-dBCgF8c5twjqPphmTXXc2pdu_rC6vZn4dWOW2iH16vOGFnYxfQ5tOmJIBKwZ1XGFU8AJY9owqPTj-C7tDAfXZTADnc7s2H53stqD6CXqSbz9HcAmgKdeWR0QdtGSefRkIeVKSOBZmQtKQxBqjQoqMDG4q5cPDDl4D3U_WykoYajGrNoUtNSxvA2tU_BE0Ey9q7yG6Ps4yDpKjV6j4ShD_W5z5zhZ697vlZbD_NTP42sa1u-TFIaLV7MagbXxWV8Vo8aXVv9Vl9",
    alt: "Minimalist black and white portrait of a man looking thoughtfully into the distance",
    bubbleClass: "bg-surface-container-high group-hover:rotate-6",
    textClass: "text-on-surface-variant",
  },
];

export default function MomentsSection() {
  return (
    <section className="mb-12 overflow-hidden">
      <h2 className="headline-font mb-6 px-2 text-xl font-bold tracking-tight text-on-surface">Moments</h2>
      <div className="no-scrollbar -mx-2 flex gap-6 overflow-x-auto px-2 pb-4">
        <div className="flex shrink-0 flex-col items-center gap-3">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-dashed border-primary bg-surface-container-lowest p-1 shadow-sm transition-transform active:scale-95">
            <span className="material-symbols-outlined text-3xl text-primary">add</span>
          </div>
          <span className="text-xs font-medium text-on-surface-variant">Post</span>
        </div>

        {stories.map((story) => (
          <div key={story.name} className="group flex shrink-0 flex-col items-center gap-3">
            <div
              className={`story-bubble h-20 w-20 p-1 shadow-lg transition-all duration-300 ${story.bubbleClass}`}
            >
              <div className="h-full w-full overflow-hidden rounded-full border-4 border-surface">
                <img src={story.image} alt={story.alt} className="h-full w-full object-cover" />
              </div>
            </div>
            <span className={`text-xs font-medium ${story.textClass ?? "text-on-surface"}`}>
              {story.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
