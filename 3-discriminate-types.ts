enum KindEnum {
  HTTP = "HTTP",
  CHRONO = "CHRONO",
  QUEUE = "Queue",
}

type Kind = KindEnum.HTTP | KindEnum.CHRONO | KindEnum.QUEUE;

type EventBase = {
  callId: number;
  invocation: Date;
};

type Method = "GET" | "POST" | "UPDATE" | "DELETE";
type HeaderKey =
  | "Cookie"
  | "Accept"
  | "Authorization"
  | "Cache-Control"
  | "Accept-language"
  | "Accept-Encoding"
  | "Host"
  | "From"
  | "Referer"
  | "User-Agent"
  | "Upgrade";

type HeaderType = Partial<Record<HeaderKey, string>>;
/**
 * Alternatives
 * 1- one can use partial
 * type HeaderType = Record<HeaderKey, string | undefined>;
 * 2- Alternatively:
 * type HeaderType = Record<HeaderKey, string | undefined>;
 * 3- Alternatively:
 * type HeaderType = { [key in HeaderKey]?: string };
 */

type ParamsType = Record<string, string>;
type TaskType = "BACKUP";
type PayloadType = {
  database: string;
  query: string;
};

type HttpEvent = EventBase & {
  kind: KindEnum.HTTP;
  method: Method;
  headers: HeaderType;
  params: ParamsType;
  path: string;
};

type ChronoEvent = EventBase & {
  kind: KindEnum.CHRONO;
  trigger: Date;
  task: TaskType;
};

type QueueEvent = EventBase & {
  kind: KindEnum.QUEUE;
  queue: string;
  payload: PayloadType;
};

type Event = HttpEvent | ChronoEvent | QueueEvent;

function throwError(event: never): never {
  throw new Error(event);
}

export function handler(event: Event) {
  switch (event.kind) {
    case KindEnum.HTTP:
      console.log(event);
      break;
    case KindEnum.QUEUE:
      console.log(event);
      break;
    case KindEnum.CHRONO:
      console.log(event);
      break;
    default:
      throwError(event);
  }
  // alternative to switch when no shared "kind" property exist
  /**
   * if("method" in event){
   *
   * } else if ("trigger" in event) ...
   */
}

// HTTP Event
handler({
  kind: "HTTP",
  method: "POST",
  headers: {
    "Accept-language": "en-US",
  },
  params: {
    name: "Stefan",
  },
  path: "/api/hello",
  callId: 123123215,
  invocation: new Date(),
});

// CHRONO
handler({
  kind: "CHRONO",
  invocation: new Date(),
  trigger: new Date(2022, 2, 28, 0, 0),
  callId: 12312334,
  task: "BACKUP",
});

// Queue Event
handler({
  kind: "Queue",
  invocation: new Date(),
  callId: 1235734534,
  queue: "main-queue",
  payload: {
    database: "main",
    query: "SELECT * FROM articles",
  },
});
