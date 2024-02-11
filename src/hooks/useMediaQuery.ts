import * as React from "react";

const mediaQueryMap = {
  sm: "(min-width: 640px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
  "2xl": "(min-width: 1536px)",
} as const;

type BreakPoint = keyof typeof mediaQueryMap;

const useMediaQuery = (query: BreakPoint) => {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia(mediaQueryMap[query]);

    const updateMatches = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    if (media.matches) {
      setMatches(true);
    }

    media.addEventListener("change", updateMatches);

    return () => {
      media.removeEventListener("change", updateMatches);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
