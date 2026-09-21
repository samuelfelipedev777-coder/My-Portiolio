
export const styles = {
  header: {
    container:
      "fixed top-0 left-0 z-50 flex w-full items-center justify-between px-5 py-5 md:px-10 md:py-6",
    content: "flex items-center gap-20",
    nav: "flex gap-10",
  },

  navigation: {
    backdrop:
      "fixed inset-0 z-40 bg-black/10 backdrop-blur-[2px]",
    panel:
      "fixed top-0 right-0 z-50 h-screen w-full bg-white px-8 py-28 sm:w-[420px] sm:px-12",
    linkList: "flex flex-col gap-6",
    link: "font-heading text-4xl leading-none text-black",
  },

  hero: {
    container:
      "relative flex min-h-[1450px] w-full flex-col items-center justify-start overflow-hidden md:h-screen md:min-h-0 md:flex-row md:items-center md:justify-center",

    image:
      "relative z-0 mt-16 h-[48dvh] min-h-[350px] w-full shrink-0 object-contain object-center md:relative md:mt-0 md:h-full md:min-h-0 md:w-full md:object-center",

    content:
      "pointer-events-none absolute inset-0 z-10",

    kanji:
      "absolute flex flex-col items-center",

    kanjiInfo:
      "mt-3 flex flex-col items-center gap-2 text-xs md:text-base",

    line:
      "h-px w-10 bg-black md:w-12",
  },

  headerButton: {
    button:
      "relative z-[60] flex h-10 w-10 cursor-pointer items-center",

    line:
      "absolute h-0.5 bg-black",

    lineLong:
      "w-8",

    lineMedium:
      "w-6",

    lineShort:
      "w-4",
  },

  heroCta: {
    container:
      "relative left-auto top-auto z-20 mt-8 flex w-[90%] shrink-0 flex-col items-start md:absolute md:left-[6%] md:top-1/2 md:mt-0 md:w-auto md:-translate-y-1/2",

    title:
      "font-heading text-5xl font-medium leading-[0.92] tracking-tight text-black sm:text-6xl md:text-6xl md:leading-[0.95] md:text-7xl",

    subtitle:
      "mt-5 text-[10px] uppercase tracking-[0.15em] text-neutral-600 md:mt-6 md:text-sm md:tracking-[0.2em]",

    watchTrigger:
      "watch-trigger relative mt-8 flex w-full max-w-80 cursor-pointer items-center gap-3 overflow-hidden border p-1 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03] active:scale-[0.97] before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-purple-400 before:transition-[width] before:duration-400 before:linear before:content-[''] hover:before:w-full md:mt-12 md:w-80 md:gap-5",

    watchPlay:
      "watch-play relative z-10 flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full border border-black md:h-14 md:w-14",

    playIcon:
      "ml-0.5 text-[10px] text-black md:text-[11px]",

    watchLink:
      "relative z-10 watch-link text-[10px] sm:text-xs md:text-base",

    exploreButton:
      "relative z-10 mt-6 cursor-pointer border border-black bg-black px-6 py-3 text-xs font-medium text-white transition-all duration-300 hover:bg-white hover:text-black md:mt-8 md:px-8 md:py-4 md:text-sm",
  },

  about: {
    section:
      "relative flex h-200 bg-[#F4F4F4] px-6 py-16 text-[#121212] sm:px-10 sm:py-24 md:py-28",

    container:
      "mx-auto grid w-full max-w-none grid-cols-1 items-start gap-12 md:grid-cols-[220px_minmax(0,1fr)] md:gap-70",

    textContent:
      "w-full shrink-0 p-0 text-[10px] font-medium uppercase leading-[1.6] tracking-wider text-[#121212]/80 sm:w-[220px] md:text-[11px]",

    heading:
      "w-full max-w-none pr-0 text-left font-sans text-2xl font-semibold leading-[1.15] tracking-[-0.02em] text-[#181818] sm:text-3xl md:pr-10 md:text-4xl lg:text-[2.65rem]",
  },

  projects: {
    section:
      "relative bg-[#0F0F0F] px-6 py-24 text-white md:px-24 md:py-32",

    container:
      "mx-auto w-full max-w-7xl",

    heading:
      "mb-20 text-xs font-medium uppercase tracking-[0.2em] text-white/60 md:mb-28",

    list:
      "w-full",
  },

  projectItem: {
    article:
      "group relative grid grid-cols-[48px_minmax(0,1fr)] gap-4 border-b border-white/15 py-10 transition-colors duration-700 hover:border-white/40 sm:grid-cols-[64px_minmax(0,1fr)] sm:gap-6 sm:py-12 md:grid-cols-[120px_minmax(0,1fr)] md:gap-12 md:py-20",

    content:
      "flex min-w-0 flex-col justify-between gap-8 md:flex-row md:items-start",

    title:
      "max-w-xl text-lg font-medium leading-tight tracking-tight text-white sm:text-xl md:text-3xl",

    technologies:
      "mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[10px] uppercase tracking-[0.08em] text-white/45 sm:mt-5 sm:gap-x-5 sm:text-xs md:text-sm",

    technology:
      "whitespace-nowrap",

    detailsButton:
      "group/details relative flex w-fit shrink-0 cursor-pointer items-center gap-3 pb-2 text-[10px] uppercase tracking-[0.12em] text-white/70 sm:text-xs md:mt-1 md:text-sm",

    detailsLine:
      "absolute bottom-0 left-0 h-px w-full origin-left bg-white/40 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/details:scale-x-0",

    detailsLineHover:
      "absolute bottom-0 left-0 h-px w-full origin-right scale-x-0 bg-[#B84A18] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/details:origin-left group-hover/details:scale-x-100",

    detailsArrow:
      "inline-block text-white transition-transform duration-500 ease-out group-hover/details:translate-x-2 group-hover/details:text-[#B84A18]",

    kanjiContainer:
      "flex flex-col items-center justify-start gap-3 pt-1 sm:gap-4",

    kanji:
      "font-japanese text-4xl font-light leading-none text-white transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-[-5px] sm:text-5xl md:text-7xl",

    meaning:
      "text-center text-xs font-medium tracking-[0.1em] text-[#B84A18] sm:text-sm md:text-base",

    preview:
      "pointer-events-none fixed left-0 top-0 z-40 hidden w-[280px] overflow-hidden opacity-0 md:block md:w-[360px]",

    previewImage:
      "block h-auto w-full object-cover",

    modalOverlay:
      "fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-3 backdrop-blur-md sm:p-6",

    modal:
      "relative flex max-h-[calc(100dvh-24px)] w-full max-w-5xl flex-col overflow-hidden bg-[#101010] text-white sm:max-h-[calc(100dvh-48px)]",

    modalClose:
      "absolute right-3 top-3 z-20 flex h-9 w-9 cursor-pointer items-center justify-center border border-white/20 bg-black/50 text-sm text-white transition-colors duration-300 hover:border-[#B84A18] hover:text-[#B84A18] sm:right-6 sm:top-6",

    modalImageWrapper:
      "relative h-[24dvh] min-h-[140px] max-h-[280px] w-full shrink-0 overflow-hidden bg-[#181818] sm:h-[32dvh] sm:max-h-[360px]",

    modalImage:
      "h-full w-full object-cover",

    modalImageOverlay:
      "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent",

    modalContent:
      "grid min-h-0 flex-1 grid-cols-1 gap-5 p-5 sm:grid-cols-[1fr_0.8fr] sm:gap-10 sm:p-8 md:p-10",

    modalMain:
      "min-w-0",

    modalEyebrow:
      "text-[9px] uppercase tracking-[0.16em] text-[#B84A18] sm:text-xs",

    modalTitle:
      "mt-3 text-2xl font-medium leading-[1.05] tracking-tight sm:mt-4 sm:text-4xl md:text-5xl",

    modalDescription:
      "mt-4 line-clamp-4 max-w-lg text-xs leading-[1.6] text-white/60 sm:mt-6 sm:text-sm sm:leading-[1.8]",

    modalSide:
      "flex min-w-0 flex-col justify-between gap-5",

    modalSectionLabel:
      "mb-3 text-[9px] uppercase tracking-[0.2em] text-white/35 sm:mb-4 sm:text-xs",

    modalTechnologies:
      "flex flex-wrap gap-2",

    modalTechnology:
      "border border-white/15 px-2 py-1.5 text-[10px] text-white/65 sm:px-3 sm:py-2 sm:text-xs",

    modalFooter:
      "border-t border-white/10 pt-4",

    modalFooterLabel:
      "text-[9px] uppercase tracking-[0.15em] text-white/35 sm:text-xs",

    modalNumber:
      "mt-2 text-2xl font-light text-[#B84A18] sm:text-3xl",
  },

  codeCard: {
    container:
      "pointer-events-none absolute z-20 w-64 text-black opacity-75 sm:w-72 sm:opacity-85 md:pointer-events-auto md:w-80 md:opacity-100",

    positionTop:
      "top-[72%] right-2 md:top-25 md:right-54",

    positionBottom:
      "right-2 bottom-[-100px] md:right-8 md:bottom-8",

    corner:
      "absolute top-0 right-0 h-6 w-6 border-r border-t border-black/50",

    content:
      "font-mono text-sm leading-8",

    language:
      "mb-4 text-xs uppercase tracking-[0.2em] text-black/70",

    pre:
      "m-0 whitespace-pre-wrap",

    marker:
      "absolute bottom-0 left-0 h-2 w-2 bg-black",

    keyword:
      "text-purple-600",

    type:
      "text-purple-600",
  },
} as const;