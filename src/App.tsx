import { Index } from "./routes/index";
import ProductPage from "./routes/product/$slug";
import CategoryPage from "./routes/category";

export default function App() {
  const path = window.location.pathname;

  if (path.startsWith("/category/") || path.startsWith("/total-stations")) {
    return <CategoryPage />;
  }

  if (path.startsWith("/product/")) {
    return <ProductPage />;
  }

  return <Index />;
}
