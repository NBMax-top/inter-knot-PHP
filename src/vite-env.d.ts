/// <reference types="vite/client" />

export {};

declare global {
  function GM_xmlhttpRequest(
    details: Partial<{
      method: "GET" | "HEAD" | "POST";
      url: string | URL;
      headers: Record<string, string>;
      data: string | Blob | File | Object | Array | FormData | URLSearchParams;
      responseType: "arraybuffer" | "blob" | "stream" | "json";
    }>
  ): Promise<{
    finalUrl: string;
    response: any;
    responseHeaders: Record<string, string>;
    responseText: string;
  }>;
}
