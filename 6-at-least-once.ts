type SubtitleList = {
  en: URL;
  de: URL;
  es: URL;
  fr: URL;
  pt: URL;
};

// Option 1 : Union
type SubtitleUnion =
  | { en: URL }
  | { de: URL }
  | { es: URL }
  | { fr: URL }
  | { pt: URL };

function load(list: SubtitleUnion) {}

// Option 2 step 1
type AvailableSubtitle = {
  [K in keyof SubtitleList]: K;
}[keyof SubtitleList];
// Option 2 - step 2
type AvailableSubtitl2 = {
  [K in keyof SubtitleList]: {
    [P in K]: URL;
  };
}[keyof SubtitleList];

// Option 2 - optimized (Generic)
type Split<T> = {
  [K in keyof T /* "en" | "de" | "es" | fr | pt"*/]: {
    [P in K /* "en" */]: T[P];
  };
}[keyof T];

type myList = Split<SubtitleList>


//------------------------

