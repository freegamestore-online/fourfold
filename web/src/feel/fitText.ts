/** The smallest font size, in px, a tile label is shrunk to before it is allowed to wrap. */
export const MIN_FIT_PX = 9;

/**
 * Shrinks an element's font until its text fits on one line, so long words such as
 * HOUNDSTOOTH stay readable on a narrow phone. Font size is reset first, so a wider
 * screen grows the text back to the stylesheet size.
 */
export function fitText(element: HTMLElement, minPx: number = MIN_FIT_PX): void {
  element.style.fontSize = "";
  const base = parseFloat(getComputedStyle(element).fontSize);
  if (!Number.isFinite(base) || base <= 0) return;
  let size = base;
  while (element.scrollWidth > element.clientWidth && size > minPx) {
    size = Math.max(minPx, size - 0.5);
    element.style.fontSize = `${size}px`;
  }
}
