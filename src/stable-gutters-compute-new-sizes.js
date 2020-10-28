export default function stableGuttersComputeNewSizes({
  startSizes,
  prevPaneNdx,
  minSize,
  delta,
}) {
  const nextPaneNdx = prevPaneNdx + 1;
  const pairSize = startSizes[prevPaneNdx] + startSizes[nextPaneNdx];
  const prevPaneStartSize = startSizes[prevPaneNdx];
  const prevPaneNewSize = Math.min(
    Math.max(minSize, prevPaneStartSize + delta),
    pairSize - minSize);
  const nextPaneNewSize = pairSize - prevPaneNewSize;
  const newSizes = [
    ...startSizes.slice(0, prevPaneNdx),
    prevPaneNewSize,
    nextPaneNewSize,
    ...startSizes.slice(prevPaneNdx + 2, startSizes.length),
  ];
  return newSizes;
}
