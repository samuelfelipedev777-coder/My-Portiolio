export const styles = {
  header: {
    container:
      "fixed top-0 left-0 z-50 flex w-full items-center justify-between border-b border-transparent bg-transparent px-5 py-5 transition-colors md:px-10 md:py-6",

    logo:
      "relative z-10 shrink-0",

    content:
      "relative z-10 flex items-center gap-20",

    nav:
      "flex gap-10",

    progressTrack:
      "pointer-events-none absolute bottom-0 left-0 h-px w-full overflow-hidden bg-black/[0.04]",

    progress:
      "h-full w-full origin-left scale-x-0 bg-purple-600",
  },

  navigation: {
    backdrop:
      "fixed inset-0 z-40 bg-black/10 backdrop-blur-[2px]",

    panel:
      "fixed top-0 right-0 z-50 h-screen w-full bg-white px-8 py-28 sm:w-[420px] sm:px-12",

    linkList:
      "flex flex-col gap-6",

    link:
      "font-heading text-4xl leading-none text-black",
  },

  hero: {
    container:
      "relative flex min-h-[100dvh] w-full flex-col items-center justify-start overflow-hidden bg-white md:h-screen md:min-h-0 md:flex-row md:items-center md:justify-center",

    image:
      "relative z-0 mt-[13dvh] h-[49dvh] min-h-[310px] w-[118%] max-w-none shrink-0 translate-x-[2%] object-contain object-center sm:h-[52dvh] sm:w-[108%] md:relative md:mt-0 md:h-full md:min-h-0 md:w-full md:translate-x-0 md:object-center",

    content:
      "pointer-events-none absolute inset-0 z-10",

    kanji:
      "absolute flex flex-col items-center font-light opacity-55 mix-blend-multiply sm:opacity-70 md:opacity-100",

    kanjiInfo:
      "mt-2 flex flex-col items-center gap-1 text-[7px] uppercase tracking-[0.08em] md:mt-3 md:gap-2 md:text-base md:normal-case md:tracking-normal",

    line:
      "h-px w-6 bg-black/70 md:w-12 md:bg-black",
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
      "relative z-30 mt-[-1dvh] flex w-[88%] max-w-[390px] shrink-0 flex-col items-start md:absolute md:left-[6%] md:top-1/2 md:mt-0 md:w-auto md:max-w-none md:-translate-y-1/2",

    identity:
      "relative",

    eyebrow:
      "mb-3 block font-mono text-[7px] uppercase tracking-[0.25em] text-black/40 md:hidden",

    title:
      "font-heading text-[3.35rem] font-medium leading-[0.78] tracking-[-0.065em] text-black sm:text-[4.2rem] md:text-6xl md:leading-[0.95] md:text-7xl",

    role:
      "mt-5 flex items-center gap-3 md:mt-6",

    roleLine:
      "h-px w-8 bg-purple-500 md:hidden",

    subtitle:
      "text-[9px] uppercase tracking-[0.16em] text-neutral-600 md:text-sm md:tracking-[0.2em]",

    watchTrigger:
      "watch-trigger relative mt-7 flex w-full max-w-[310px] cursor-pointer items-center gap-3 overflow-hidden border border-black/80 p-1 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03] active:scale-[0.97] before:absolute before:inset-y-0 before:left-0 before:w-0 before:bg-purple-400 before:transition-[width] before:duration-400 before:linear before:content-[''] hover:before:w-full md:mt-12 md:w-80 md:gap-5",

    watchPlay:
      "watch-play relative z-10 flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-black md:h-14 md:w-14",

    playIcon:
      "ml-0.5 text-[9px] text-black md:text-[11px]",

    watchLink:
      "relative z-10 watch-link flex-1 text-[9px] uppercase tracking-[0.04em] sm:text-xs md:text-base md:normal-case md:tracking-normal",

    watchArrow:
      "relative z-10 mr-3 text-base text-black/60 md:hidden",

    exploreButton:
      "relative z-10 mt-3 flex w-full max-w-[310px] cursor-pointer items-center justify-between border-b border-black px-0 py-3 text-[9px] font-medium uppercase tracking-[0.16em] text-black transition-all duration-300 hover:border-purple-500 hover:text-purple-600 md:mt-8 md:w-auto md:max-w-none md:border md:bg-black md:px-8 md:py-4 md:text-xs md:uppercase md:tracking-normal md:text-white md:hover:bg-white md:hover:text-black",
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
      "relative bg-[#0F0F0F] px-3 py-24 text-white sm:px-4 md:px-6 md:py-32",

    container:
      "mx-auto w-full max-w-none",

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
      "absolute left-0 top-10 text-center text-xs font-medium tracking-[0.1em] text-[#B84A18] sm:top-12 sm:text-sm md:top-20 md:text-base",

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
      "pointer-events-none absolute z-20 w-44 text-black opacity-30 sm:w-64 sm:opacity-75 md:pointer-events-auto md:w-80 md:opacity-100",

    positionTop:
      "top-[58%] right-[-40px] rotate-[2deg] sm:top-[62%] sm:right-2 sm:rotate-0 md:top-25 md:right-35",

    positionBottom:
      "right-[-35px] bottom-[-35px] -rotate-[2deg] sm:right-2 sm:bottom-[-100px] sm:rotate-0 md:right-8 md:bottom-8",

    corner:
      "absolute top-0 right-0 h-6 w-6 border-r border-t border-black/50",

    content:
      "font-mono text-[9px] leading-5 sm:text-sm sm:leading-8",

    language:
      "mb-2 text-[8px] uppercase tracking-[0.2em] text-black/70 sm:mb-4 sm:text-xs",

    pre:
      "m-0 whitespace-pre-wrap",

    marker:
      "absolute bottom-0 left-0 h-2 w-2 bg-black",

    keyword:
      "text-purple-600",

    type:
      "text-purple-600",
  },

  textReveal: {
    section:
      "relative flex min-h-screen w-full max-w-full items-center justify-center overflow-x-hidden bg-[#F2F1EE] text-[#171717]",

    container:
      "relative z-10 flex w-full max-w-275 min-w-0 flex-col px-6 md:px-10",

    glow:
      "pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/15 blur-[120px] md:h-[440px] md:w-[440px] md:blur-[140px]",

    grid:
      "pointer-events-none absolute inset-0 opacity-[0.06] bg-[linear-gradient(rgba(0,0,0,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.8)_1px,transparent_1px)] bg-[size:70px_70px]",

    cornerLabel:
      "absolute left-6 top-6 z-10 font-mono text-[9px] uppercase tracking-[0.25em] text-black/45 md:left-10 md:top-10",

    header:
      "mb-7 flex w-full items-center justify-between border-b border-black/10 pb-3",

    meta:
      "flex min-w-0 items-center gap-3",

    index:
      "font-mono text-[10px] font-medium tracking-[0.25em] text-purple-700",

    label:
      "font-mono text-[10px] font-medium tracking-[0.25em] text-black/55",

    total:
      "font-mono text-[10px] tracking-[0.25em] text-black/35",

    content:
      "relative flex min-h-[250px] w-full min-w-0 items-center border-b border-black/10 py-10 md:min-h-[300px] md:py-14",

    kanjiWrapper:
      "pointer-events-none absolute right-0 top-1/2 max-w-full -translate-y-1/2",

    kanji:
      "font-japanese text-[9rem] font-light leading-none text-purple-400 md:text-[13rem]",

    copy:
      "relative z-10 min-w-0 max-w-190",

    signal:
      "mb-4 block font-mono text-[9px] font-medium uppercase tracking-[0.3em] text-purple-700",

    title:
      "max-w-190 break-words text-[clamp(1.65rem,3.2vw,3.8rem)] font-bold leading-[1.05] tracking-[-0.04em] text-[#171717]",

    footer:
      "mt-5 flex w-full min-w-0 items-center gap-4",

    scroll:
      "shrink-0 rounded bg-purple-400 p-1 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-black",

    progressTrack:
      "h-px min-w-0 flex-1 overflow-hidden bg-black/15",

    progress:
      "h-full w-full origin-left scale-x-0 bg-purple-700",

    percent:
      "shrink-0 font-mono text-[8px] tracking-[0.2em] text-black/45",
  },
} as const;