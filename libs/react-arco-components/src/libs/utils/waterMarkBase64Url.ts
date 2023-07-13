import { type Iocontent } from "../components/Watermark/index";

export default function waterMarkBase64Url(
  {
    width,
    height,
    gapX,
    gapY,
    offsetLeft,
    offsetTop,
    rotate = 23,
    alpha,
    watermarkObj,
  }: {
    width: number;
    height: number;
    gapX: number;
    gapY: number;
    offsetLeft: number;
    offsetTop: number;
    rotate: number;
    alpha: number;
    watermarkObj: Iocontent;
  },
  onFinish: (url: string) => void
) {
  const { text = "", url = "", isGray = false } = watermarkObj;
  const canvas = document.createElement("canvas");
  const ctx: any = canvas.getContext("2d");

  if (!ctx) {
    console.warn("当前环境不支持Canvas, 无法绘制水印");
    onFinish("");
  }

  const ratio = window.devicePixelRatio || 1;
  const canvasWidth = (gapX + width) * ratio;
  const canvasHeight = (gapY + height) * ratio;

  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  canvas.style.width = `${gapX + width}px`;
  canvas.style.height = `${gapY + height}px`;

  ctx.translate(offsetLeft * ratio, offsetTop * ratio);
  ctx.rotate((Math.PI / 180) * Number(rotate));
  ctx.globalAlpha = alpha;

  const markWidth = width * ratio;
  const markHeight = height * ratio;

  ctx.fillStyle = "transparent";
  ctx.fillRect(0, 0, markWidth, markHeight);

  if (url) {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.referrerPolicy = "no-referrer";
    img.src = url;
    img.onload = () => {
      ctx.drawImage(img, 0, 0, width * ratio, height * ratio);
      if (isGray) {
        // ctx.filter = "grayscale(1)";
        const imgData = ctx.getImageData(
          0,
          0,
          ctx.canvas.width,
          ctx.canvas.height
        );
        const pixels = imgData.data;
        for (let i = 0; i < pixels.length; i += 4) {
          const lightness = (pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3;
          pixels[i] = lightness;
          pixels[i + 1] = lightness;
          pixels[i + 2] = lightness;
        }
        ctx.putImageData(imgData, 0, 0);
      }
      onFinish(canvas.toDataURL());
    };
  } else if (text) {
    const fontColor = "rgba(0, 0, 0, 0.8)";
    const fontSize = 16;
    const fontWeight = "normal";
    const markSize = Number(fontSize) * ratio;
    ctx.font = `normal normal ${fontWeight} ${markSize}px/${markHeight}px undefined`;
    ctx.textAlign = "start";
    ctx.textBaseline = "top";
    ctx.fillStyle = fontColor;
    ctx.fillText(text, 0, height * ratio);
  }

  onFinish(canvas.toDataURL());
}
