import { test, expect, describe } from "@jest/globals";

import getDiff from "../src/getdiff.js";

describe("getDiff", () => {
  test("should correctly identify no differences", () => {
    const data1 = { key1: "value1", key2: "value2" };
    const data2 = { key1: "value1", key2: "value2" };
    const expected = "{\n    key1: value1\n    key2: value2\n}";
    expect(getDiff(data1, data2)).toBe(expected);
  });

  test("should identify additions and deletions", () => {
    const data1 = { key1: "value1" };
    const data2 = { key2: "value2" };
    const expected = "{\n  - key1: value1\n  + key2: value2\n}";
    expect(getDiff(data1, data2)).toBe(expected);
  });

  test("should identify changes", () => {
    const data1 = { key: "value1" };
    const data2 = { key: "value2" };
    const expected = "{\n  - key: value1\n  + key: value2\n}";
    expect(getDiff(data1, data2)).toBe(expected);
  });

  test("should handle mixed changes", () => {
    const data1 = { key1: "value1", key2: "unchanged", key3: "value3" };
    const data2 = { key2: "unchanged", key3: "different", key4: "value4" };
    const expected =
      "{\n  - key1: value1\n    key2: unchanged\n  - key3: value3\n  + key3: different\n  + key4: value4\n}";
    expect(getDiff(data1, data2)).toBe(expected);
  });
});
