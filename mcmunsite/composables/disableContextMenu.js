export async function disableContextMenu() {
  const toast = useToast();

  const showWarningNotification = () => {
    toast.add({
      title: "Warning!",
      description:
        "The right click (context) menu has been disabled. Please use CTRL+C, CTRL+V.",
      color: "yellow",
      timeout: 5000,
    });
  };

  const handleContextMenu = (event) => {
    event.preventDefault();
    showWarningNotification();
  };

  onMounted(() => {
    window.addEventListener("contextmenu", handleContextMenu);
  });

  onUnmounted(() => {
    window.removeEventListener("contextmenu", handleContextMenu);
  });
}
