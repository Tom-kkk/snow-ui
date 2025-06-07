import { makeInstaller } from "@snow-ui/utils";
import components from "./components";

import '@snow-ui/theme/index.css'

const installer = makeInstaller(components);

export * from "@snow-ui/components";
export default installer;
