/**
 * Insere transformações em uma URL hospedada no Cloudinary.
 * Se a URL não pertencer ao domínio do Cloudinary, retorna-a sem alterações.
 *
 * Suporta:
 * - quality: number | 'auto' | 'auto:good' | 'auto:best'
 * - dpr: number | 'auto'
 * - crop/gravity: c and g
 *
 * @param url URL da imagem (pode ser qualquer URL)
 * @param options Objetos de otimização: { width, quality, dpr, format, crop, gravity }
 * @returns URL com parâmetros de transformação do Cloudinary ou a URL original
 */
export function optimizeCloudinaryUrl(
  url: string,
  options: {
    width?: number;
    quality?: number | string;
    dpr?: number | 'auto';
    format?: string;
    crop?: string;
    gravity?: string;
  } = {},
): string {
  if (!url || !url.includes("res.cloudinary.com")) return url;

  try {
    const u = new URL(url);
    const parts = u.pathname.split("/");
    const uploadIndex = parts.findIndex((p) => p === "upload");
    if (uploadIndex === -1) return url;

    const before = parts.slice(0, uploadIndex + 1).join("/");
    const after = parts.slice(uploadIndex + 1).join("/");

    const transformations: string[] = [];

    // Width
    if (options.width) transformations.push(`w_${options.width}`);

    // Crop / Gravity (optional, useful for cards)
    if (options.crop) transformations.push(`c_${options.crop}`);
    if (options.gravity) transformations.push(`g_${options.gravity}`);

    // DPR
    if (options.dpr === 'auto') transformations.push('dpr_auto');
    else if (typeof options.dpr === 'number') transformations.push(`dpr_${options.dpr}`);

    // Quality: support numeric or 'auto' variants
    if (typeof options.quality === 'number') transformations.push(`q_${options.quality}`);
    else if (typeof options.quality === 'string') transformations.push(`q_${options.quality}`);
    else transformations.push('q_auto');

    // Format
    if (options.format) transformations.push(`f_${options.format}`);
    else transformations.push('f_auto');

    const transformStr = transformations.join(",");
    const optimizedPath = `${before}/${transformStr}/${after}`.replace(/\/+/g, "/");

    return `${u.protocol}//${u.host}${optimizedPath}`;
  } catch (e) {
    console.warn("optimizeCloudinaryUrl: Failed to optimize URL", e);
    return url;
  }
}

/**
 * Gera um srcset para múltiplas larguras usando `optimizeCloudinaryUrl`.
 * @param url URL original
 * @param widths array de larguras em pixels
 * @param options mesmas opções de optimizeCloudinaryUrl (sem width)
 */
export function generateCloudinarySrcSet(
  url: string,
  widths: number[] = [320, 480, 640, 800, 1024, 1280],
  options: {
    quality?: number | string;
    dpr?: number | 'auto';
    format?: string;
    crop?: string;
    gravity?: string;
  } = {},
): string {
  if (!url || !url.includes("res.cloudinary.com")) return "";
  return widths
    .map((w) => `${optimizeCloudinaryUrl(url, { ...options, width: w })} ${w}w`)
    .join(', ');
}
