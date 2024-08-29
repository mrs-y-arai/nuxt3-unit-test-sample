import { http, HttpResponse } from "msw";
import { expect, it, describe, beforeAll, afterEach, afterAll } from "vitest";
import { server } from "~/api/mocks/server";

// 全てのテストを実行する前(1つ目のテスト開始前)に、サーバーを起動する。
beforeAll(() => {
  server.listen();
});

// 各テストが終わるたびに、サーバーのリクエストハンドラをリセットする。
afterEach(() => {
  server.resetHandlers();
});

// 全てのテストが終わったら、サーバーを閉じる。
afterAll(() => {
  server.close();
});

describe("apiをモックする場合", () => {
  it("テストケース", async () => {
    // Arrange
    // APIののモック準備
    const {
      public: { apiBase },
    } = useRuntimeConfig();
    console.log("apiBase", apiBase);

    // apiのモック関数
    const getNewsListMock = () => {
      return HttpResponse.json({
        data: [
          {
            id: 1,
            title: "テストタイトル",
            body: "テストボディ",
          },
          {
            id: 2,
            title: "テストタイトル2",
            body: "テストボディ2",
          },
        ],
      });
    };
    server.use(http.get(`${apiBase}/news`, getNewsListMock));

    // Act
    const result = await fetchHelper(`/news`, {
      method: "GET",
    });

    // Assert
    expect(result.data).toHaveLength(2);
  });
});
