import { supabase } from "./supabase";

export async function getKrabbels() {
  const { data, error } = await supabase
    .from("krabbelnet_krabbels")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}