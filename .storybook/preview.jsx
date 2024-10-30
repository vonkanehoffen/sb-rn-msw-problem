import { View } from "react-native";
import { initialize, mswLoader } from "msw-storybook-addon";

/** @type{import("@storybook/react").Preview} */

initialize();

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  loaders: [mswLoader],
  decorators: [
    (Story, { parameters }) => (
      <View
        style={{
          flex: 1,
          backgroundColor:
            parameters.noBackground === true ? undefined : "#26c6da",
          padding: 8,
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export default preview;
