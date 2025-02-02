import { create } from "zustand";

interface ThemeConfig {
  isDark: boolean;
}

interface ThemeStore {
  config?: ThemeConfig;
  setTheme: (config: ThemeConfig) => void;
}

const useThemeStore = create<ThemeStore>((set) => ({
  config: undefined,
  setTheme: (config: ThemeConfig) =>
    set((state) => ({
      config,
    })),
}));

export default useThemeStore;
