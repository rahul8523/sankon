import { Index } from "./routes/index";
import ProductPage from "./routes/product/$slug";
import CategoryPage from "./routes/category";
import AboutUsPage from "./routes/about-us";
import CareerPage from "./routes/career";
import ContactUsPage from "./routes/contact-us";

export default function App() {
  const path = window.location.pathname;

  if (path === "/about-us" || path === "/about") {
    return <AboutUsPage />;
  }

  if (path === "/career" || path === "/careers") {
    return <CareerPage />;
  }

  if (path === "/contact-us" || path === "/contact") {
    return <ContactUsPage />;
  }

  if (path.startsWith("/category/") || path.startsWith("/total-stations")) {
    return <CategoryPage />;
  }

  if (path.startsWith("/product/") || path.startsWith("/product-detail/")) {
    return <ProductPage />;
  }

  return <Index />;
}
