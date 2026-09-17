export const styles = {
  header: {
    container:
      "fixed top-0 left-0 z-50 w-full flex items-center justify-between px-10 py-6",

    content: "flex items-center gap-20",

    nav: "flex gap-10",
  },

  navigation: {
    backdrop:
      "fixed inset-0 z-40 bg-black/10 backdrop-blur-[2px]",

    panel:
      "fixed top-0 right-0 z-50 h-screen w-[420px] bg-white px-12 py-28",

    linkList:
      "flex flex-col gap-6",

    link:
      "font-heading text-4xl leading-none text-black",
  },

  hero: {
    container:
      "relative h-screen w-full flex items-center justify-center overflow-hidden",

    image:
      "relative z-0 h-full w-full object-contain",

    content:
      "absolute inset-0 z-10",

    kanji:
      "absolute flex flex-col items-center",

    kanjiInfo:
      "mt-3 flex flex-col items-center gap-2",

    line:
      "h-px w-12 bg-black",
  },

  headerButton: {
    button:
      "relative z-[60] flex h-10 w-10 items-center cursor-pointer",

    line:
      "absolute h-0.5 bg-black",

    lineLong: "w-8",

    lineMedium: "w-6",

    lineShort: "w-4",
  },

  heroCta: {
    container:
      "absolute left-[6%] top-1/2 z-20 -translate-y-1/2",

    title:
      "font-heading text-6xl font-medium leading-[0.95] tracking-tight text-black md:text-7xl",

    subtitle:
      "mt-6 text-sm uppercase tracking-[0.2em] text-neutral-600",

    watchTrigger:
      "watch-trigger relative w-80 p-1 mt-12 flex items-center gap-5 border cursor-pointer overflow-hidden transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03] active:scale-[0.97] before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-purple-400 before:transition-[width] before:duration-400 before:linear before:content-[''] hover:before:w-full",

    watchPlay:
      "watch-play relative z-10 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-black",

    playIcon:
      "ml-0.5 text-[11px] text-black",

    watchLink:
      "relative z-10 watch-link",

    exploreButton:
      "relative z-10 mt-8 cursor-pointer border border-black bg-black px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-black",
  },
} as const;