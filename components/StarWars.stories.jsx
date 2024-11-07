import StarWars from "./StarWars";
import { handlers } from "../.storybook/msw-handlers";

const meta = {
  title: "StarWars",
  component: StarWars,
};

export default meta;

export const GettingStarted = {
  args: {},
  parameters: {
    noBackground: true,
    msw: {
      handlers: handlers,
    },
  },
};
