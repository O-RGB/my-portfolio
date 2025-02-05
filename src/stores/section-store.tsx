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
};

interface SectionStore {
  sectionId?: string;
  sectionName?: ISectionData;
  setSection: (sectionId: string) => void;
}

const useSectionStore = create<SectionStore>((set) => ({
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
