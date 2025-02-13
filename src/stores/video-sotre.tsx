import { fetchAndCacheVideo } from "@/components/lib/indexedDb";
import { create } from "zustand";

type VideoTypes =
  | "b-banner"
  | "karaoke-iphone-remote"
  | "karaoke-ipad-screen"
  | "gaysorn-preview"
  | "skills-frontend"
  | "skills-backend-bg-2";

const videoPaths: Record<VideoTypes, string> = {
  "skills-frontend": "/images/skills/frontend/skills-frontend.mp4",
  "b-banner": "/images/banner/b-banner.mp4",
  "skills-backend-bg-2": "/images/skills/backend/skills-backend-bg-2.mp4",
  "gaysorn-preview": "/images/project/gaysorn/gaysorn-preview.mp4",
  "karaoke-iphone-remote": "/images/project/karaoke/karaoke-iphone-remote.mp4",
  "karaoke-ipad-screen": "/images/project/karaoke/karaoke-ipad-screen.mp4",
};

interface VideoStore {
  videos: Partial<Record<VideoTypes, string>>;
  getVideo: (key: VideoTypes) => Promise<void>;
  loadAllVideos: () => Promise<void>;
}

const useVideoStore = create<VideoStore>((set, get) => ({
  videos: {},

  getVideo: async (key: VideoTypes) => {
    const url = await fetchAndCacheVideo(key, videoPaths[key]);
    if (url) {
      set((state) => ({
        videos: { ...state.videos, [key]: url },
      }));
    }
  },

  loadAllVideos: async () => {
    for (const key of Object.keys(videoPaths) as VideoTypes[]) {
      await get().getVideo(key);
      await new Promise<boolean>((r) =>
        setTimeout(() => {
          r(false);
        }, 10)
      );
    }
  },
}));

export default useVideoStore;
