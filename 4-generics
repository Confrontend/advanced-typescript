type VideoFormatURLs = {
  format360p: URL;
  format480p: URL;
  format720p: URL;
  format1080p: URL;
  format4k: URL;
  format120p: URL;
};
type SubtitleURLS = {
  en: URL;
  de: URL;
  fr: URL;
  pt: URL;
};

function isAvailable<T extends object>(
  obj: T,
  key: PropertyKey //utility type for : string | number | symbol
): key is keyof T /* type predicate*/ {
  return key in obj;
}
function loadFormat(obj: VideoFormatURLs, key: string) {
  if (isAvailable(obj, key)) {
    //
  }
}
function loadSubtitle(obj: SubtitleURLS, key: string) {
  if (isAvailable(obj, key)) {
    //
  }
}

// obj can not be a string because of: <T extends object>
function shouldNotWork(obj: string, key: string) {
  if (isAvailable(obj, key)) {
    //
  }
}

//Generic binding
function identity<T>(t: T): T {
  return t;
}
let identity_of_number = identity<number>(1);
let identity_of_string = identity<string>("Hamed");

let identity_of_ = identity("Hamed");

// Generic type relation T and K
type URLList = {
  [x: string]: URL;
};
type Loaded<T> = {
  loaded?: T;
};
function loadFile<T extends URLList, K extends keyof T>(
  formatList: T,
  format: K
): Loaded<K> {
  return {
    loaded: format,
  };
}
// using type as value
declare const videos: VideoFormatURLs;
// 2nd parameter of loadFile has now auto complete based on first param
const loaded = loadFile(videos, "format360p");

