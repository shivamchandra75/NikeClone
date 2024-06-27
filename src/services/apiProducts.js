import supabase from "./supabase";

export async function getSearchedProducts(pattern) {
  const { data, error } = await supabase
    .from("products")
    .select()
    .ilike("name", `%${pattern}%`);

  if (error) throw new Error("No products found with that name");

  return data;
}

export async function getAllProducts() {
  let { data: products, error } = await supabase.from("products").select("*");

  if (error) throw new Error("Error Getting All Products");
  return products;
}
