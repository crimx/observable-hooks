export type WikipediaResult = [string, string[], string[], string[]]

export const wikipedia = (text: string): Promise<WikipediaResult> =>
  fetch(
    `https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=${text}`,
    { mode: 'cors' }
  ).then(t => t.json())
