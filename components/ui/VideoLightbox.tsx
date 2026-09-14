"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";

export type VideoLightboxHandle = {
  open: (src: string, poster: string, label: string) => void;
};

type VideoLightboxProps = {
  closeLabel: string;
};

/**
 * Native <dialog> — free ESC-to-close, focus trap, and backdrop semantics,
 * no dependency. Video is only given a `src` (and starts loading/playing)
 * once the dialog actually opens; sound plays because the user explicitly
 * clicked to open this, not automatically.
 */
export const VideoLightbox = forwardRef<VideoLightboxHandle, VideoLightboxProps>(function VideoLightbox(
  { closeLabel },
  ref
) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useImperativeHandle(ref, () => ({
    open(src, poster, label) {
      const video = videoRef.current;
      const dialog = dialogRef.current;
      if (!video || !dialog) return;
      video.src = src;
      video.poster = poster;
      video.setAttribute("aria-label", label);
      dialog.showModal();
      video.play().catch(() => {});
    },
  }));

  const handleClose = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.removeAttribute("src");
      video.load();
    }
    dialogRef.current?.close();
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={handleClose}
      onClick={(e) => {
        if (e.target === dialogRef.current) handleClose();
      }}
      className="m-auto max-h-[92svh] max-w-[92vw] overflow-hidden bg-transparent p-0 backdrop:bg-olive-ink/90 sm:max-w-[420px]"
    >
      <div className="relative">
        <video ref={videoRef} controls playsInline className="max-h-[92svh] w-full bg-black" />
        <button
          type="button"
          onClick={handleClose}
          aria-label={closeLabel}
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-text-primary shadow-depth active:scale-[0.96]"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
            <path
              d="M5 5l14 14M19 5L5 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </button>
      </div>
    </dialog>
  );
});
