import EthiopianCross from "./EthiopianCross";
const items = [
  {
    title: "Top 5, YagoutPay SDK Competition",
    detail: "2025 · Built a Python payment SDK",
  },
  {
    title: "INSA Cybersecurity Summer Camp",
    detail: "Information Network Security Agency",
  },
  {
    title: "CyberShield",
    detail: "Certificate of participation",
  },
  {
    title: "CyberHer Africa Master Class",
    detail: "Certification",
  },
];

export default function Achievements() {
  return (
    <section className="px-6 py-28 md:px-12">
      <p className="mb-6 font-mono text-sm tracking-widest text-accent">
        04 / ACHIEVEMENTS
      </p>
      <h2 className="font-display text-4xl font-semibold md:text-5xl">
        Certificates & <span className="text-accent">recognition</span>
      </h2>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.title}
            className="eth-card rounded-3xl border border-white/10 p-8"
          >
            <EthiopianCross className="h-6 w-6 text-accent" />
            <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
            <p className="mt-1 text-white/60">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}