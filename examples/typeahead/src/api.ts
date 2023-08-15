import { from } from "rxjs";
import { map } from "rxjs/operators";
import { SuggestsFetcher } from "./Suggests";

type WikipediaResult = [string, string[], string[], string[]];

export const wikipedia: SuggestsFetcher = text =>
  from<Promise<WikipediaResult>>(
    fetch(
      `https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=${text}`,
      { mode: "cors" }
    ).then(t => t.json())
  ).pipe(
    // parsing can be easily cancelled thanks to RxJS
    map(([, titles, contents, hrefs]) => {
      return titles.map((title, i) => ({
        href: hrefs[i],
        title,
        content: contents[i],
      }));
    })
  );
