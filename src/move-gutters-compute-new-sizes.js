function computeSize(sizes, start, end) {
  let size = 0;
  for (let i = start; i < end; ++i) {
    size += sizes[i];
  }
  return size;
}

export default function moveGuttersComputeNewSizes({
  startSizes,
  prevPaneNdx,
  minSize,
  delta,
}) {
  const nextPaneNdx = prevPaneNdx + 1;
  //    0           1        2        3
  // |---------|---prev--G--next---|------|
  //                     u
  //                     t
  //                     t
  //                     e
  //                     r
  if (delta < 0) {
    // we're dragging gutter left
    const minSizeBeforeNext = nextPaneNdx * minSize;
    const currentSizeBeforeNext = computeSize(startSizes, 0, nextPaneNdx);
    const movableSize = currentSizeBeforeNext - minSizeBeforeNext;
    let totalDelta = Math.min(-delta, movableSize);
    // distribute the delta to the left
    const newSizes = startSizes.slice();
    newSizes[nextPaneNdx] += totalDelta;
    for (let i = prevPaneNdx; totalDelta > 0 || i >= 0; --i) {
      const oldSize = newSizes[i];
      const newSize = Math.max(oldSize - totalDelta, minSize);
      newSizes[i] = newSize;
      totalDelta -= oldSize - newSize;
    }
    return newSizes;
  } else {
    // we're dragging gutter right
    const minSizeAfterPrev = (startSizes.length - nextPaneNdx) * minSize;
    const currentSizeAfterPrev = computeSize(startSizes, nextPaneNdx, startSizes.length);
    const movableSize = currentSizeAfterPrev - minSizeAfterPrev;
    let totalDelta = Math.min(delta, movableSize);
    // distribute the delta to the right
    const newSizes = startSizes.slice();
    newSizes[prevPaneNdx] += totalDelta;
    for (let i = nextPaneNdx; totalDelta > 0 || i < newSizes.length; ++i) {
      const oldSize = newSizes[i];
      const newSize = Math.max(oldSize - totalDelta, minSize);
      newSizes[i] = newSize;
      totalDelta -= oldSize - newSize;
    }
    return newSizes;
  }
}

