export default function siteUrl(pathname: string) {
  if (typeof pathname !== 'string') return '';

  const isDevelopment = import.meta.env.DEV;

  const previewDeployUrl = process.env.RENDER_EXTERNAL_URL;

  if (isDevelopment)
    return !!previewDeployUrl
      ? `https://${previewDeployUrl}${pathname}`
      : `${import.meta.env.SITE_URL}${pathname}`;

  return `${import.meta.env.SITE}${pathname}`;
}
