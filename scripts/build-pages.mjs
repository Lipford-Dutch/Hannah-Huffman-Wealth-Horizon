import { cp, mkdir, rm, writeFile } from "node:fs/promises";

const output = new URL("../.github-pages/", import.meta.url);
const client = new URL("../dist/client/", import.meta.url);
const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("pages", Date.now().toString());

const { default: worker } = await import(workerUrl.href);
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const response = await worker.fetch(
  new Request(`http://localhost${basePath || "/"}`, {
    headers: { accept: "text/html" },
  }),
  { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
  { waitUntil() {}, passThroughOnException() {} },
);

if (!response.ok) {
  throw new Error(`Unable to render the Pages document: ${response.status}`);
}

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(client, output, { recursive: true });
await writeFile(new URL("index.html", output), await response.text());
await writeFile(new URL(".nojekyll", output), "");
