export default function siteUrl(pathname: string) {
  if (typeof pathname !== 'string') return '';

  const isDevelopment = import.meta.env.DEV;

  const previewDeployHost = import.meta.env.PUBLIC_VERCEL_BRANCH_URL;

  if (isDevelopment)
    return !!previewDeployHost
      ? `https://${previewDeployHost}${pathname}`
      : `${import.meta.env.SITE_URL}${pathname}`;

  return `${import.meta.env.SITE}${pathname}`;
}
