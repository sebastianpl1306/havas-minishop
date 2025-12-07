import { getProducts } from "@/src/actions/product.actions";
import { HeroComponent } from "@/src/Components/HeroComponent";
import { SearchProductsComponent } from "@/src/Components/SearchProductsComponent";

interface HomeProps {
  searchParams: {
    searchProduct?: string;
  };
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const products = await getProducts(params.searchProduct || "");

  return (
    <div className="minishop">
      <HeroComponent />
      <SearchProductsComponent products={products}/>
    </div>
  );
}
