import { supabase } from "./supabase";

export async function getProfile(username: string) {
  const { data, error } = await supabase
    .from("krabbelnet_profiles")
    .select("*")
    .eq("username", username)
    .single();

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}