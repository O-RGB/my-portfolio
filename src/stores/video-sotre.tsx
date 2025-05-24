import { create } from "zustand";

type VideoTypes =
  | "b-banner"
  | "karaoke-iphone-remote"
  | "karaoke-ipad-screen"
  | "gaysorn-preview"
  | "skills-frontend"
  | "skills-backend-bg-2";

export const videoPaths: Record<VideoTypes, string> = {
  "b-banner": "/images/banner/b-banner.mp4",
  "skills-frontend": "/images/skills/frontend/skills-frontend.mp4",
  "skills-backend-bg-2": "/images/skills/backend/skills-backend-bg-2.mp4",
  "gaysorn-preview": "/images/project/gaysorn/gaysorn-preview.mp4",
  "karaoke-iphone-remote": "/images/project/karaoke/karaoke-iphone-remote.mp4",
  "karaoke-ipad-screen": "/images/project/karaoke/karaoke-ipad-screen.mp4",
};

// Simple interface and store
interface VideoStore {
  videoUrls: Record<string, string>;
  progress: number;
  isLoading: boolean;
  loadVideos: () => void;
}

const useVideoStore = create<VideoStore>((set) => ({
  videoUrls: {},
  progress: 0,
  isLoading: true,

  loadVideos: () => {
    const keys = Object.keys(videoPaths);
    const totalCount = keys.length;
    let loadedCount = 0;

    set({ isLoading: true, progress: 0 });

    keys.forEach((key) => {
      // Simply create direct references to the video files
      // This is the most compatible approach for all browsers
      const videoPath = videoPaths[key as VideoTypes];

      if (typeof videoPath === "string") {
        set((state) => ({
          videoUrls: {
            ...state.videoUrls,
            [key]: videoPath,
          },
        }));
      }

      // Simulate progressive loading
      loadedCount++;
      const newProgress = Math.round((loadedCount / totalCount) * 100);
      set({ progress: newProgress });

      // If all videos are "loaded", set loading state to false
      if (loadedCount === totalCount) {
        setTimeout(() => {
          set({ isLoading: false });
        }, 1000); // Short delay to ensure UI has time to update
      }
    });
  },
}));

export default useVideoStore;
