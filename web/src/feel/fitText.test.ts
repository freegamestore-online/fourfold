import { describe, expect, it } from "vitest";
import { MIN_FIT_PX, fitText } from "./fitText";

/** A stand-in for an element whose text is `wide` px wide, shrinking with the font. */
function fakeTile(textWidthAt16px: number, clientWidth: number) {
  const element = document.createElement("button");
  Object.defineProperty(element, "clientWidth", { value: clientWidth });
  Object.defineProperty(element, "scrollWidth", {
    get: () => (textWidthAt16px * (parseFloat(element.style.fontSize) || 16)) / 16,
  });
  return element;
}

describe("fitText", () => {
  it("leaves text alone when it already fits", () => {
    const tile = fakeTile(40, 80);
    fitText(tile);
    expect(tile.style.fontSize).toBe("");
  });

  it("shrinks a long word until it fits", () => {
    const tile = fakeTile(120, 80);
    fitText(tile);
    expect(parseFloat(tile.style.fontSize)).toBeLessThan(16);
    expect(tile.scrollWidth).toBeLessThanOrEqual(tile.clientWidth);
  });

  it("never shrinks below the minimum, even when the word still overflows", () => {
    const tile = fakeTile(1000, 80);
    fitText(tile);
    expect(parseFloat(tile.style.fontSize)).toBe(MIN_FIT_PX);
  });
});
