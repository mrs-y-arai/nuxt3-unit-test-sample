// 複製後、以下の2行は削除
/* eslint-disable */
// @ts-nocheck
import { http, HttpResponse } from "msw";
import { expect, it, describe, beforeAll, afterEach, afterAll } from "vitest";
import { server } from "~/api/mocks/server";

// 全てのテストを実行する前(1つ目のテスト開始前)に、mockサーバーを起動する。
beforeAll(() => {
  server.listen();
});

// 各テストが終わるたびに、mockサーバーのリクエストハンドラをリセットする。
afterEach(() => {
  server.resetHandlers();
});

// 全てのテストが終わったら、mockサーバーを閉じる。
afterAll(() => {
  server.close();
});

describe("テストする対象の関数", () => {
  it("テストケース", () => {
    // Arrange
    // Act
    // Assert
    expect(result).toBe("");
  });
});

describe("apiをモックする場合", () => {
  it("テストケース", () => {
    // Arrange
    // APIののモック準備
    const {
      public: { apiBase },
    } = useRuntimeConfig();
    // apiのモック関数
    const getApiMock = () => {};
    server.use(http.get(`${apiBase}/dummy`, getApiMock));

    // Act

    // Assert
    // const expectedValue = {};
    // expect(data).toHaveLength(50);
  });
});
