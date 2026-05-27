import { Index } from "./routes/index";
import ProductPage from "./routes/product/$slug";

export default function App() {
  const path = window.location.pathname;

  if (path.startsWith("/product/")) {
    return <ProductPage />;
  }

  return <Index />;
}
