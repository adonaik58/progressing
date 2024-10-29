import { Config_Type } from "./app.default-type";

/**
 * 1 - light;
 * 2 - darkblue;
 * 3 - orange;
 */

const default_appearance: number = 1;

// default configurations
const Config: Config_Type = {
  appearance: {
    // we have 3 type of appearance mode [light, darkblue, orange]
    colors: ["#3c3c3c", "#ccc", "#eee"][default_appearance],
    heading_colors: ["#1b1b1b", "#eee", "#fff"][default_appearance],
    background: ["#f5f5f5", "#161C2E", "#FF8F00"][default_appearance],
  },
};

export default Config;
