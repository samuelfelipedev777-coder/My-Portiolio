export const styles = {
  header: {
    container:
      "fixed top-0 left-0 z-50 w-full flex items-center justify-between px-10 py-6",

    content: "flex items-center gap-20",

    nav: "flex gap-10",

    navLink:
      "relative text-black transition-colors duration-300 hover:text-neutral-800 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full",
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
} as const;