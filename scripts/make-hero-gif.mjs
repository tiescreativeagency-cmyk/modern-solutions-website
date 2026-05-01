/**
 * MP4 → animated GIF for hero (trimmed + downscaled; full 4K would be massive).
 * Usage: node scripts/make-hero-gif.mjs [input.mp4]
 */
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import ffmpegStatic from "ffmpeg-static";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outPath = join(root, "public", "hero-bg.gif");

const input =
  process.argv[2] ||
  "/Users/elnino/Downloads/12951867_3840_2160_30fps.mp4";

if (!ffmpegStatic) {
  console.error("ffmpeg-static binary missing");
  process.exit(1);
}
if (!existsSync(input)) {
  console.error(`Input not found: ${input}`);
  process.exit(1);
}

// ~10s clip, 960w, 12fps, palette for smaller high-contrast GIF vs raw rgb
const vf =
  "fps=12,scale=min(960\\,iw):-1:flags=lanczos,split[s0][s1];[s0]palettegen=stats_mode=diff:max_colors=128[p];[s1][p]paletteuse=dither=bayer:bayer_scale=3";

const args = [
  "-y",
  "-ss",
  "1",
  "-i",
  input,
  "-t",
  "10",
  "-vf",
  vf,
  "-loop",
  "0",
  outPath,
];

console.log("ffmpeg", args.join(" "));
const r = spawnSync(ffmpegStatic, args, { stdio: "inherit" });
if (r.status !== 0) {
  process.exit(r.status ?? 1);
}
console.log("Wrote", outPath);
