// 複製後、以下の2行は削除
/* eslint-disable */
// @ts-nocheck
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
    public: {},
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
      public: { apiBaseUrl },
    } = useRuntimeConfig();
    // apiのモック関数
    const getNewsListMock = () => {};
    server.use(http.get(`${apiBaseUrl}/news`, getNewsListMock));

    // Act

    // Assert
    // const expectedValue = {};
    // expect(data).toHaveLength(50);
  });
});
