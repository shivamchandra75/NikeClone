import { v4 as uuidv4 } from "uuid";
import supabase from "./supabase";

export async function apiAddToFavourites(product) {
  const newProduct = (({ sorting, sale, created_at, ...rest }) => ({
    ...rest,
    id: uuidv4(),
  }))(product);

  console.log("Product:", product);
  console.log("newProduct:", newProduct);

  const { data, error } = await supabase
    .from("favourites")
    .insert([newProduct])
    .select();

  if (error) throw new Error("" + error.message);

  return data;
}

export async function apiGetFavourites() {
  let { data: favourites, error } = await supabase
    .from("favourites")
    .select("*");

  if (error) throw new Error("🔥" + error.message);

  return favourites;
}

export async function apiRemoveFromFavourite(id) {
  const { error } = await supabase.from("favourites").delete().eq("id", id);
  if (error) {
    console.log("🔥", error.message);
    throw new Error(`Could not Delete -${error.message}`);
  }
}
