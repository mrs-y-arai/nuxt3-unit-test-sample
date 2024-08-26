import { http, HttpResponse } from "msw";
import {
  vi,
  expect,
  it,
  describe,
  beforeAll,
  afterEach,
  afterAll,
} from "vitest";
import { server } from "~/api/mocks/server";

// MEMO: .envの値が、useRuntimeConfigに反映される前に、テストが実行されてしまうので、
// useRuntimeConfigのモックは引き続きする
vi.mock("#app", () => ({
  useRuntimeConfig: vi.fn().mockReturnValue({
    public: {
      apiBase: "http://localhost:3000",
    },
  }),
}));

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
