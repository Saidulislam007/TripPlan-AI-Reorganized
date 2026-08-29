import { Bus, ShieldCheck, Wallet } from "lucide-react";

const benefits = [
  {
    icon: Wallet,
    title: "Budget that stays real",
    text: "Transport, food, hotel and hidden costs—calculated in ৳ with a 10% emergency buffer.",
  },
  {
    icon: Bus,
    title: "Routes that make sense",
    text: "Bus, train, launch and local transport options with realistic traffic and transfer time.",
  },
  {
    icon: ShieldCheck,
    title: "Family-first guidance",
    text: "Safer areas, child-friendly stops, prayer breaks and trusted local travel tips.",
  },
];

export function TravelerBenefitsSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#c77c19]">
            Travel without the guesswork
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
            Made around how Bangladesh really travels.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {benefits.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="tf-tilt-card rounded-2xl border bg-white p-5"
            >
              <Icon className="size-7 text-[#c77c19]" />
              <h3 className="mt-5 font-serif text-xl">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#63766f]">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
