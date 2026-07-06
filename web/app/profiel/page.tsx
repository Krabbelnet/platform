import { KrabbelForm } from "../../components/profile/KrabbelForm";
import { getKrabbels } from "../../lib/krabbels";
import { getProfile } from "../../lib/profiles";

export default async function ProfielPage() {
  const profile = await getProfile("patrick");

  if (!profile) {
    return <main className="p-10">Profiel niet gevonden.</main>;
  }

  const krabbels = await getKrabbels(profile.id);

  return (
    <main className="min-h-screen bg-orange-50">
      <div className="h-64 w-full bg-gradient-to-r from-orange-400 to-orange-300" />

      <section className="mx-auto -mt-20 max-w-5xl px-6">
        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <div className="flex flex-col items-center text-center">
            <div className="h-36 w-36 rounded-full border-4 border-white bg-orange-400 shadow-lg" />

            <h1 className="mt-6 text-4xl font-black">
              {profile.display_name}
            </h1>

            <p className="mt-2 text-slate-500">📍 &apos;s-Hertogenbosch</p>
            <p className="text-slate-500">Lid sinds juli 2026</p>

            <div className="mt-8 flex gap-4">
              <button className="rounded-full bg-orange-500 px-6 py-3 font-bold text-white hover:bg-orange-600">
                💬 Krabbel achterlaten
              </button>

              <button className="rounded-full bg-orange-100 px-6 py-3 font-bold text-orange-600 hover:bg-orange-200">
                👥 Voeg toe
              </button>
            </div>
          </div>

          <section className="mt-12">
            <h2 className="text-2xl font-black">🧡 Over mij</h2>
            <p className="mt-4 leading-8 text-slate-600">{profile.bio}</p>
          </section>

          <KrabbelForm profileId={profile.id} />

          <section className="mt-8">
            <div className="space-y-4">
              {krabbels.map((krabbel) => (
                <div key={krabbel.id} className="rounded-2xl bg-orange-50 p-5">
                  <p className="font-bold">{krabbel.author_name}</p>
                  <p>{krabbel.message}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}