import { StartServer, renderStream, createHandler } from "solid-start/entry-server";

export default createHandler(renderStream((event) => <StartServer event={event} />));
