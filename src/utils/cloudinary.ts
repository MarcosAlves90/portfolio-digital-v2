/**
 * Insere transformações em uma URL hospedada no Cloudinary.
 * Se a URL não pertencer ao domínio do Cloudinary, retorna-a sem alterações.
 *
 * @param url URL da imagem (pode ser qualquer URL)
 * @param options Objetos de otimização: { width, quality, dpr, format }
 * @returns URL com parâmetros de transformação do Cloudinary ou a URL original
 */
export function optimizeCloudinaryUrl(
  url: string,
  options: {
    width?: number;
    quality?: number;
    dpr?: number;
    format?: string;
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
    if (options.width) transformations.push(`w_${options.width}`);
    if (options.quality) transformations.push(`q_${options.quality}`);
    if (options.dpr) transformations.push(`dpr_${options.dpr}`);
    if (options.format) transformations.push(`f_${options.format}`);
    if (!options.format) transformations.push("f_auto");

    const transformStr = transformations.join(",");
    const optimizedPath = `${before}/${transformStr}/${after}`.replace(
      /\/+/g,
      "/",
    );

    return `${u.protocol}//${u.host}${optimizedPath}`;
  } catch (e) {
    console.warn("optimizeCloudinaryUrl: Failed to optimize URL", e);
    return url;
  }
}
