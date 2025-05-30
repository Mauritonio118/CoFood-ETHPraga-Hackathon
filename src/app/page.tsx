/**
import { Page } from '@/components/PageLayout';
import { AuthButton } from '../components/AuthButton';

export default function Home() {
  return (
    <Page>
      <Page.Main className="flex flex-col items-center justify-center">
        <AuthButton />
      </Page.Main>
    </Page>
  );
}

*/


export default function Page() {
  // Pasos del flujo de uso
  const steps = [
    {
      title: "Apply to the whitelist",
      description:
        "Complete a short form to prove you’re a real community builder and get access to funding.",
    },
    {
      title: "Receive funds in your petty cash",
      description:
        "Once approved, an on-chain smart contract loads your personal balance with food budget.",
    },
    {
      title: "Organize an event",
      description:
        "Plan the gathering, engage your local community and keep receipts of food expenses.",
    },
    {
      title: "Upload the event report",
      description:
        "After the event, send photos, receipts and attendee numbers to unlock the next round.",
    },
    {
      title: "Get reimbursed & repeat",
      description:
        "Your petty-cash balance is topped up so you can keep fueling the community.",
    },
  ]







  return (
    <main className="flex flex-col min-h-screen bg-background text-foreground">
      {/* ─── Hero ─────────────────────────────── */}
      <section className="py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">CoFood</h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          Decentralised funding to fuel local communities with food, powered by
          a global on-chain treasury.
        </p>

        {/* acciones principales */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            /* href="/whitelist" */
            className="rounded-lg border border-primary px-6 py-3 text-base font-medium"
          >
            Apply to Whitelist
          </a>
        </div>
      </section>

      {/* ─── Sobre el proyecto ────────────────── */}
      <section className="px-4 pb-14 max-w-2xl mx-auto space-y-6 text-justify">
        <h2 className="text-2xl font-semibold">What is CoFood?</h2>
        <p>
          CoFood pools capital from supporters worldwide into a single treasury.
          The principal stays locked while the yield generated through DeFi
          strategies is periodically distributed to approved event organizers.
        </p>
        <p>
          Every transaction—deposits, yields, reimbursements—is transparently
          recorded on-chain, so the whole community can trace how funds flow.
        </p>
      </section>

      {/* ─── How it works ─────────────────────── */}
      <section
        id="how-it-works"
        className="bg-muted/30 py-14 px-4 flex flex-col items-center"
      >
        <h2 className="text-2xl font-bold mb-2">How it works</h2>
        <p className="text-muted-foreground mb-8 max-w-xl text-center">
          Five simple steps to turn DeFi yields into real-world meals.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 w-full max-w-6xl">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative bg-background/70 border border-border rounded-xl p-6 shadow-sm"
            >
              {/* número de paso */}
              <span className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                {i + 1}
              </span>

              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
