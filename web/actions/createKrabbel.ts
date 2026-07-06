"use server";

import { revalidatePath } from "next/cache";
import { supabase } from "../lib/supabase";

export async function createKrabbel({
  profileId,
  authorName,
  message,
}: {
  profileId: string;
  authorName: string;
  message: string;
}) {
  const { error } = await supabase
    .from("krabbelnet_krabbels")
    .insert({
      profile_id: profileId,
      author_name: authorName,
      message,
    });

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/profiel");

  return { error: null };
}