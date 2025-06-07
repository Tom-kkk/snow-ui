import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import SnowButton from "snow-ui";

const app = createApp(App)

app.use(SnowButton)
app.mount("#app");

