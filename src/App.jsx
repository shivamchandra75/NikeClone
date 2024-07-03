import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Navbar from "./ui/Navbar";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Bag from "./pages/Bag";
import Favourite from "./pages/Favourite";
import ProductDetails from "./features/products/ProductDetails";
import Orders from "./pages/Orders";
import Footer from "./ui/Footer";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <div id="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Results />} />
          <Route path="/product" element={<ProductDetails />} />
          <Route path="/bag" element={<Bag />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
