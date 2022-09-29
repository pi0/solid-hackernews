import { StartServer, renderAsync, createHandler } from "solid-start/entry-server";

export default createHandler(renderAsync((event) => <StartServer event={event} />));
