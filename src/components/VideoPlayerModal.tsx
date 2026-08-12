"use client";

interface VideoPlayerModalProps {
  embedUrl: string;
  title: string;
  onClose: () => void;
}

export default function VideoPlayerModal({
  embedUrl,
  title,
  onClose,
}: VideoPlayerModalProps) {
  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`播放影片：${title}`}
    >
      <div
        className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden border border-gold/20"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={`${embedUrl}?autoplay=1`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
          aria-label="關閉影片"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
