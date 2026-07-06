const features = [
  {
    icon: "💬",
    title: "Krabbels",
    text: "Laat weer een persoonlijk berichtje achter op iemands profiel.",
  },
  {
    icon: "📸",
    title: "Fotoalbums",
    text: "Deel herinneringen zonder eindeloze feed of prestatiedruk.",
  },
  {
    icon: "🔒",
    title: "Privacy eerst",
    text: "Geen verkoop van data. Geen gekke tracking. Gewoon duidelijk.",
  },
];

const promises = [
  "Geen algoritmische tijdlijn",
  "Geen reclame tussen berichten van vrienden",
  "Geen verkoop van gebruikersgegevens",
  "Profielen staan centraal",
  "Krabbels blijven het hart",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-orange-50 text-slate-900">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="text-2xl font-black text-orange-600">🧡 KrabbelNet</div>

        <nav className="flex items-center gap-4 text-sm font-semibold">
          <a className="hidden text-slate-600 hover:text-orange-600 sm:block" href="#belofte">
            Onze belofte
          </a>
          <button className="rounded-full bg-white px-5 py-3 text-orange-600 shadow-sm hover:bg-orange-100">
            Inloggen
          </button>
        </nav>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <div className="mb-6 inline-flex rounded-full bg-white px-5 py-2 text-sm font-bold text-orange-600 shadow-sm">
            Project KrabbelNet
          </div>

          <h1 className="text-5xl font-black leading-tight tracking-tight sm:text-6xl">
            Het internet mag weer gezellig zijn.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            KrabbelNet wordt een sociaal netwerk waar vrienden weer centraal staan.
            Geen algoritmes. Geen eindeloze reclame. Gewoon krabbels, foto&apos;s
            en echte connecties.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-full bg-orange-500 px-8 py-4 font-black text-white shadow-lg hover:bg-orange-600">
              Binnenkort aanmelden
            </button>
            <a
              href="#belofte"
              className="rounded-full bg-white px-8 py-4 text-center font-black text-orange-600 shadow-sm hover:bg-orange-100"
            >
              Lees onze belofte
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] bg-white p-5 shadow-xl">
          <div className="rounded-[1.5rem] bg-orange-100 p-5">
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <div className="h-28 rounded-2xl bg-orange-200" />
              <div className="-mt-8 ml-4 h-20 w-20 rounded-full border-4 border-white bg-orange-400" />

              <h2 className="mt-4 text-2xl font-black">Patrick</h2>
              <p className="text-slate-500">Welkom op mijn plekje 👋</p>

              <div className="mt-6 rounded-2xl bg-orange-50 p-4">
                <p className="font-bold">Lisa krabbelde:</p>
                <p className="mt-1 text-slate-600">Gefeliciteerd!! 🎉</p>
              </div>

              <div className="mt-3 rounded-2xl bg-orange-50 p-4">
                <p className="font-bold">Jan krabbelde:</p>
                <p className="mt-1 text-slate-600">Zaterdag barbecue?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="mt-5 text-2xl font-black">{feature.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="belofte" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-[2rem] bg-white p-8 shadow-sm md:p-12">
          <h2 className="text-4xl font-black">Onze belofte</h2>
          <p className="mt-4 max-w-2xl leading-8 text-slate-600">
            KrabbelNet bouwt geen platform dat mensen zo lang mogelijk vasthoudt.
            We bouwen een plek waar mensen graag even langskomen.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {promises.map((promise) => (
              <div key={promise} className="rounded-2xl bg-orange-50 p-4 font-bold">
                ✅ {promise}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-6 py-10 text-center text-sm text-slate-500">
        Project KrabbelNet • Het internet mag weer gezellig zijn.
      </footer>
    </main>
  );
}