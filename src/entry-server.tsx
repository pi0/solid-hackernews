import { renderToStream } from "solid-js/web";
import { RequestContext, StartServer } from "solid-start/components";

export default async (context: RequestContext) => {
  // streaming
  const { readable, writable } = new TransformStream();
  renderToStream(() => <StartServer context={context} />).pipeTo(writable);

  context.responseHeaders.set("Content-Type", "text/html");

  return new Response(readable, {
    status: 200,
    headers: context.responseHeaders,
  });
};
