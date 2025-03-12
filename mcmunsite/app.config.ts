export default defineAppConfig({
  head: {
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  notifications: {
    // Show toasts at the top right of the screen
    position: "top-0 bottom-auto",
  },
  ui:{
    primary: "red"
  },
  primary: "indigo",
  gray: "zinc",
  variables: {
    light: {
      background: "var(--color-gray-50)",
    },
    dark: {
      background: "var(--color-gray-950)",
    },
  },
  button: {
    default: {
      size: "md",
      color: "black",
    },
  },
  input: {
    rounded: "rounded-lg",
  },
});
