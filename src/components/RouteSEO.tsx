import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import seo from "@/data/seo-routes.json";

type RouteMeta = {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
  noindex?: boolean;
  alias?: string;
};

const routes = seo.routes as Record<string, RouteMeta>;
const home = routes["/"];

/**
 * Default per-route <head> tags, driven by src/data/seo-routes.json (the same
 * file scripts/prerender-seo.mjs bakes into static HTML at build time). Pages
 * that render their own <Helmet> mount deeper and override these values.
 */
export const RouteSEO = () => {
  const { pathname } = useLocation();
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  const entry = routes[path];
  const canonicalPath = entry?.alias ?? path;
  const meta: RouteMeta = (entry?.alias ? routes[entry.alias] : entry) ?? home;
  const url = canonicalPath === "/" ? `${seo.site.url}/` : `${seo.site.url}${canonicalPath}`;
  const image = meta.image ?? seo.site.defaultImage;

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords ?? ""} />
      <meta
        name="robots"
        content={meta.noindex ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"}
      />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={meta.type ?? "website"} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};
