import { v4 as uuidv4 } from "uuid";
import supabase from "./supabase";

export async function apiAddToBag(product, productSize) {
  console.log("param:", product);

  //removing unnecessary properties form product
  const newProduct = (({ sorting, sale, created_at, ...rest }) => ({
    ...rest,
    size: productSize,
    id: uuidv4(),
  }))(product);

  console.log("uploaded:", newProduct);
  const { data, error } = await supabase
    .from("bag")
    .insert([newProduct])
    .select();

  if (error) {
    console.log("Error", error.message);
    throw new Error("Error adding to bag" + error.message);
  }

  return data;
}

export async function apiGetBagData() {
  let { data: bag, error } = await supabase.from("bag").select("*");
  if (error) throw new Error("Error fetching Bag Data" + error.message);
  return bag;
}

export async function apiRemoveProductFromBag(id) {
  console.log("id:", typeof id);
  const { error } = await supabase.from("bag").delete().eq("id", id);

  if (error) {
    console.log("🔥", error.message);

    throw new Error("Could not Delete product" + error.message);
  }
}
