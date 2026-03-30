/* eslint-disable @next/next/no-img-element */

const utilityActions = [
  { icon: "location_on", text: "Add Location", textColor: "text-primary" },
  { icon: "tag", text: "Topics", textColor: "text-tertiary" },
  { icon: "mood", text: "Feeling", textColor: "text-on-secondary-fixed-variant" },
];

const mediaSlots = [
  { icon: "image", title: "Add Image", iconColor: "text-primary", textColor: "text-on-secondary-fixed-variant" },
  { icon: "videocam", title: "Add Video", iconColor: "text-tertiary", textColor: "text-on-tertiary-fixed-variant" },
];

export default function CreatePostCard() {
  return (
    <div className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-6 shadow-[0_-8px_40px_-12px_rgba(49,41,80,0.06)] md:p-8">
      <div className="mb-6 flex items-center space-x-4">
        <div className="h-12 w-12 overflow-hidden rounded-full bg-tertiary-container ring-2 ring-surface">
          <img
            className="h-full w-full object-cover"
            alt="Elena Vance"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKxTSkd6RRjdu0lYpUTOxt_XVMxewniyeOTBpBdkuN0Ez6Iq5HeNscVReqEoDM4_gt0fQj0M6F-gudHSoGQ6CAOthrNrCH1MsrhmD-zwKsdcntPDR0llf7ETOUINSncMN5rFwK-Wz_Pm7v8blHshWoWPK97IU2G3OVRXUf8MP9uzmExh02bAQ2hQtZrl4UVOtRfm4UScj8FqdtRBAWnKCC1ymC_IK_nv-UkZ42WyNpdNem7u45_iX_sCtprdO6OM0X2M21iTVcQ-Dc"
          />
        </div>
        <div>
          <p className="font-bold leading-tight text-on-surface">Elena Vance</p>
          <div className="mt-1 flex items-center rounded-full bg-surface-container-low px-2 py-0.5 text-sm text-on-surface-variant">
            <span className="material-symbols-outlined mr-1 text-[14px]">public</span>
            <span className="text-[11px] font-medium uppercase tracking-wider">Public</span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <label className="ml-1 mb-3 block text-[11px] font-semibold uppercase tracking-widest text-on-surface-variant">
          The Narrative
        </label>
        <textarea
          placeholder="Share a piece of your world..."
          className="min-h-45 w-full resize-none rounded-md border-none bg-surface-container-low p-5 text-lg leading-relaxed text-on-surface placeholder:text-outline/60 focus:ring-2 focus:ring-primary-container"
        />
      </div>

      <div className="mb-8 grid grid-cols-2 gap-4">
        {mediaSlots.map((slot) => (
          <button
            key={slot.title}
            className="group col-span-1 flex h-48 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-outline-variant/30 bg-surface-container-high transition-all duration-300 hover:bg-surface-container-highest"
          >
            <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm transition-transform group-hover:scale-110 ${slot.iconColor}`}>
              <span className="material-symbols-outlined">{slot.icon}</span>
            </div>
            <span className={`text-xs font-semibold ${slot.textColor}`}>{slot.title}</span>
          </button>
        ))}
      </div>

      <div className="mb-10 flex flex-wrap items-center gap-3">
        {utilityActions.map((action) => (
          <button
            key={action.text}
            className="flex items-center space-x-2 rounded-full bg-surface-container-high px-4 py-2 transition-all hover:bg-surface-container-highest active:scale-95"
          >
            <span className={`material-symbols-outlined text-[18px] ${action.textColor}`}>{action.icon}</span>
            <span className="text-xs font-medium">{action.text}</span>
          </button>
        ))}
      </div>

      <div className="flex items-center justify-end border-t border-outline-variant/10 pt-6">
        <button className="flex items-center space-x-2 rounded-full bg-linear-to-br from-primary to-primary-container px-10 py-3.5 font-bold text-on-primary shadow-lg shadow-primary/20 transition-all hover:shadow-primary/30 active:scale-95">
          <span>Post Perspective</span>
          <span className="material-symbols-outlined text-[20px]">send</span>
        </button>
      </div>

      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-tertiary/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />
    </div>
  );
}
