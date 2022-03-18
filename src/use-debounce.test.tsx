import { describe, beforeEach, afterEach, expect, it, vi } from "vitest";
import { useDebounce } from "./use-debounce";
import { renderHook } from "@testing-library/react-hooks";

describe("Use Debounce Test", () => {
  const sampleFunction = () => {
    console.log("Test Fn Called");
  };
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });
  it("Test if Function is not called if timer is not run", () => {
    const mockedFunction = vi.fn().mockImplementation(sampleFunction);
    const { result } = renderHook(() => useDebounce(1000, mockedFunction));
    result.current();
    expect(mockedFunction).toHaveBeenCalledTimes(0);
  });
  it("Test if Function is called only once after multiple calls", () => {
    const mockedFunction = vi.fn().mockImplementation(sampleFunction);
    const { result } = renderHook(() => useDebounce(1000, mockedFunction));
    result.current();
    result.current();
    result.current();
    result.current();
    expect(mockedFunction).toHaveBeenCalledTimes(0);
    vi.runAllTimers();
    expect(mockedFunction).toHaveBeenCalledTimes(1);
  });
});
