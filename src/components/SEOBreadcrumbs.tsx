import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

type BreadcrumbProps = {
  title: string;
  basePath?: string;
}

export const SEOBreadcrumbs = ({ title, basePath = "https://virelity.com" }: BreadcrumbProps) => {
  const location = useLocation();
  const path = location.pathname;
  
  // Create breadcrumb structure
  const generateBreadcrumbData = () => {
    const breadcrumbs = [];
    
    // Always add home
    breadcrumbs.push({
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": basePath
    });
    
    // If we're on a subpage
    if (path !== "/") {
      const pathSegments = path.split("/").filter(Boolean);
      
      pathSegments.forEach((segment, index) => {
        const position = index + 2; // Start from 2 since home is 1
        const name = segment.charAt(0).toUpperCase() + segment.slice(1);
        const item = `${basePath}/${segment}`;
        
        breadcrumbs.push({
          "@type": "ListItem",
          "position": position,
          "name": name,
          "item": item
        });
      });
    }
    
    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs
    };
    
    return JSON.stringify(breadcrumbData);
  };
  
  return (
    <Helmet>
      <script type="application/ld+json">{generateBreadcrumbData()}</script>
    </Helmet>
  );
};