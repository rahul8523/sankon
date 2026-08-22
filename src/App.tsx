import { Index } from "./routes/index";
import ProductPage from "./routes/product/$slug";
import CategoryPage from "./routes/category";
import AboutUsPage from "./routes/about-us";
import CareerPage from "./routes/career";
import ContactUsPage from "./routes/contact-us";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const path = window.location.pathname;
  let page;

  if (path === "/about-us" || path === "/about") {
    page = <AboutUsPage />;
  } else if (path === "/career" || path === "/careers") {
    page = <CareerPage />;
  } else if (path === "/contact-us" || path === "/contact") {
    page = <ContactUsPage />;
  } else if (path.startsWith("/category/") || path.startsWith("/total-stations")) {
    page = <CategoryPage />;
  } else if (path.startsWith("/product/") || path.startsWith("/product-detail/")) {
    page = <ProductPage />;
  } else {
    page = <Index />;
  }

  return (
    <>
      {page}
      <Toaster position="top-center" richColors closeButton />
    </>
  );
}
