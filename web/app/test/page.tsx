import { supabase } from "../../lib/supabase";

export default async function TestPage() {
  const { data, error } = await supabase
    .from("krabbelnet_profiles")
    .select("*");

  return (
    <main className="min-h-screen p-10">
      <h1 className="mb-6 text-3xl font-bold">Supabase Test</h1>

      <pre className="rounded-xl bg-gray-100 p-6">
        {JSON.stringify({ data, error }, null, 2)}
      </pre>
    </main>
  );
}