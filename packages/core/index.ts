import { makeInstaller } from "@snow-ui/utils";
import components from "./components";

const installer = makeInstaller(components);

export * from "@snow-ui/components";
export default installer;
