import { create } from "zustand";

interface ISectionData {
  name: string;
  description?: string;
}

const SercionValues: Record<string, ISectionData> = {
  banner: { name: "About Me", description: "🍕 Code & Pizza!" },
  about: { name: "About Me", description: "🍕 Code & Pizza!" },
  experience: { name: "Experience", description: "💻 Code & Coffee." },
  skills: { name: "Skills", description: "🛠️ Building the future" },
  project: { name: "Project", description: "🌟 Building the dream." },
};

interface SectionStore {
  scrollPosition: number;
  setScrollPosition?: (position: number) => void;
  scrolling: boolean;
  setScrolling?: (scroll: boolean) => void;
  modalOpening: boolean;
  setModalOpening?: (isOpen: boolean) => void;
  sectionId?: string;
  sectionName?: ISectionData;
  setSection: (sectionId: string) => void;
}

const useSectionStore = create<SectionStore>((set) => ({
  scrollPosition: 0,
  setScrollPosition: (scrollPosition) => set({ scrollPosition }),
  scrolling: true,
  setScrolling: (scrolling) => set({ scrolling }),
  modalOpening: true,
  setModalOpening: (modalOpening) => set({ modalOpening }),
  sectionId: undefined,
  sectionName: undefined,
  setSection: (sectionId: string) => {
    const sectionData = SercionValues[sectionId];
    set((state) => ({
      sectionId,
      sectionName: sectionData,
    }));
  },
}));

export default useSectionStore;
