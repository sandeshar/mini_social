export default function FloatingCreateButton() {
  return (
    <button
      aria-label="Create post"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-600 to-violet-500 text-white shadow-lg shadow-indigo-500/30 transition-all hover:scale-110 active:scale-95 sm:bottom-8"
    >
      <span className="material-symbols-outlined block text-[32px] leading-none">add</span>
    </button>
  );
}
