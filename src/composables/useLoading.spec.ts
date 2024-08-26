import { expect, it, describe } from "vitest";

describe("useLoading", () => {
  it("isLoadingの初期値はfalseであること", () => {
    // Arrange & Act
    const { isLoading, onLoading, offLoading } = useLoading();

    // Assert
    expect(isLoading.value).toBe(false);
  });

  it("onLoadingを実行するとisLoadingの値がtrueになること", () => {
    // Arrange & Act
    const { isLoading, onLoading, offLoading } = useLoading();
    onLoading();

    // Assert
    expect(isLoading.value).toBe(true);
  });

  it("offLoadingを実行するとisLoadingの値がfalseになること", () => {
    // Arrange & Act
    const { isLoading, onLoading, offLoading } = useLoading();
    onLoading();
    offLoading();

    // Assert
    expect(isLoading.value).toBe(false);
  });
});
