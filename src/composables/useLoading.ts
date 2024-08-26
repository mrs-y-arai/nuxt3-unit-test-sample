export const useLoading = () => {
  const isLoading = useState("isLoading", () => false);

  const onLoading = () => {
    isLoading.value = true;
  };

  const offLoading = () => {
    isLoading.value = false;
  };

  return {
    isLoading: readonly(isLoading),
    onLoading,
    offLoading,
  };
};
