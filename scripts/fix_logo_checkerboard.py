"""
Remove baked-in transparency checkerboard from public/logo.png.

Treats light neutral pixels as background: either edge-connected to the
border, or trapped islands of the same class (e.g. inside letter counters).
"""

from __future__ import annotations

from collections import deque
from pathlib import Path

from PIL import Image


def is_checker_like(r: int, g: int, b: int, min_ch: int = 218, max_chroma: int = 22) -> bool:
    lo = min(r, g, b)
    hi = max(r, g, b)
    return lo >= min_ch and (hi - lo) <= max_chroma


def main() -> None:
    root = Path(__file__).resolve().parents[1]
    src = root / "public" / "logo.png"
    if not src.exists():
        raise SystemExit(f"Missing {src}")

    im = Image.open(src).convert("RGB")
    w, h = im.size
    rgb = im.load()

    n = w * h

    def ixy(x: int, y: int) -> int:
        return y * w + x

    reachable = bytearray(n)
    q: deque[tuple[int, int]] = deque()

    def try_seed(x: int, y: int) -> None:
        if not (0 <= x < w and 0 <= y < h):
            return
        r, g, b = rgb[x, y]
        idx = ixy(x, y)
        if reachable[idx]:
            return
        if not is_checker_like(r, g, b):
            return
        reachable[idx] = 1
        q.append((x, y))

    for x in range(w):
        try_seed(x, 0)
        try_seed(x, h - 1)
    for y in range(h):
        try_seed(0, y)
        try_seed(w - 1, y)

    while q:
        x, y = q.popleft()
        for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
            if 0 <= nx < w and 0 <= ny < h:
                try_seed(nx, ny)

    # Trapped checker-like islands (not edge-connected)
    seen = bytearray(n)
    for sy in range(h):
        for sx in range(w):
            sidx = ixy(sx, sy)
            if reachable[sidx] or seen[sidx]:
                continue
            r, g, b = rgb[sx, sy]
            if not is_checker_like(r, g, b):
                continue

            comp: list[int] = []
            dq: deque[tuple[int, int]] = deque()
            seen[sidx] = 1
            dq.append((sx, sy))
            comp.append(sidx)

            while dq:
                x, y = dq.popleft()
                for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
                    if not (0 <= nx < w and 0 <= ny < h):
                        continue
                    nidx = ixy(nx, ny)
                    if seen[nidx] or reachable[nidx]:
                        continue
                    nr, ng, nb = rgb[nx, ny]
                    if not is_checker_like(nr, ng, nb):
                        continue
                    seen[nidx] = 1
                    dq.append((nx, ny))
                    comp.append(nidx)

            for idx in comp:
                reachable[idx] = 1

    out = Image.new("RGBA", (w, h))
    opx = out.load()
    transparent = 0
    for y in range(h):
        for x in range(w):
            r, g, b = rgb[x, y]
            idx = ixy(x, y)
            if reachable[idx]:
                opx[x, y] = (r, g, b, 0)
                transparent += 1
            else:
                opx[x, y] = (r, g, b, 255)

    out.save(src, optimize=True)
    print(f"Wrote {src} ({w}x{h}) — transparent pixels: {transparent} / {n}")


if __name__ == "__main__":
    main()
