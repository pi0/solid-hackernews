import { StartServer, renderStream } from "solid-start/entry-server";

export default renderStream((event) => <StartServer event={event} />)();
