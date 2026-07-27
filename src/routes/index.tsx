import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroAsset from "@/assets/hero-meals.png.asset.json";
import mealDahl from "@/assets/meal-dahl.jpg";
import mealCurry from "@/assets/meal-curry.jpg";
import mealLasagna from "@/assets/meal-lasagna.jpg";
import mealSalmon from "@/assets/meal-salmon.jpg";
import chefPortrait from "@/assets/chef-portrait.jpg";
import ingredients from "@/assets/ingredients.jpg";
import {
  Star, Leaf, ChefHat, Truck, ShieldCheck, Sparkles, ArrowRight,
  Plus, ShoppingBag, User, Check, Clock, Flame, Beef, Wheat, Instagram,
  Minus,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const meals = [
  { name: "Lemon & Lentil Dahl", tag: "Plant-Based", img: mealDahl, kcal: 480, protein: 22, carbs: 58, time: 4 },
  { name: "Ayurvedic Curry", tag: "Balanced", img: mealCurry, kcal: 540, protein: 28, carbs: 62, time: 5 },
  { name: "Tomato & Vegetable Lasagna", tag: "Family", img: mealLasagna, kcal: 620, protein: 26, carbs: 71, time: 6 },
  { name: "Wild Salmon & Quinoa", tag: "High Protein", img: mealSalmon, kcal: 590, protein: 42, carbs: 44, time: 5 },
];

const filters = ["Balanced", "High Protein", "Plant-Based", "Low Carb", "Keto", "Family"];
const counts = [6, 10, 14, 20];

function Index() {
  const [plan, setPlan] = useState<"subscribe" | "onetime">("subscribe");
  const [filter, setFilter] = useState("Balanced");
  const [count, setCount] = useState(6);
  const [qty, setQty] = useState(1);

  const perMeal = 8.99;
  const subtotal = perMeal * count * qty;
  const price = plan === "subscribe" ? subtotal * 0.85 : subtotal;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Announcement bar */}
      <div className="bg-[color:var(--sage)] text-[color:var(--cream)] text-xs tracking-wide">
        <div className="mx-auto max-w-[1400px] px-6 py-2.5 flex items-center justify-center gap-2">
          <Truck className="w-3.5 h-3.5" />
          <span>Free delivery on orders over $75 · 30-Day Money Back Guarantee · Cancel Anytime</span>
        </div>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[color:var(--cream)]/80 border-b border-border/60">
        <nav className="mx-auto max-w-[1400px] px-6 py-5 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[color:var(--sage)] flex items-center justify-center">
              <Leaf className="w-4.5 h-4.5 text-[color:var(--cream)]" strokeWidth={1.5} />
            </div>
            <span className="text-[15px] font-semibold tracking-[0.18em]">HARVEST &amp; ROOT</span>
          </a>
          <div className="hidden md:flex items-center gap-10 text-sm text-foreground/80">
            <a href="#meals" className="hover:text-foreground">Meals</a>
            <a href="#how" className="hover:text-foreground">How It Works</a>
            <a href="#chef" className="hover:text-foreground">About Us</a>
            <a href="#sustain" className="hover:text-foreground">Sustainability</a>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors" aria-label="Account">
              <User className="w-4 h-4" strokeWidth={1.6} />
            </button>
            <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors relative" aria-label="Cart">
              <ShoppingBag className="w-4 h-4" strokeWidth={1.6} />
              <span className="absolute -top-1 -right-1 w-4.5 h-4.5 rounded-full bg-[color:var(--sage)] text-[color:var(--cream)] text-[10px] flex items-center justify-center font-medium" style={{ width: 18, height: 18 }}>1</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6 pt-10 lg:pt-16 pb-20 grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-start">
          <div className="flex flex-col gap-8 lg:pt-6">
            <span className="eyebrow">
              <Leaf className="w-3.5 h-3.5" strokeWidth={1.8} />
              Nourishing meals, inspired by nature
            </span>

            <h1 className="text-[3rem] leading-[0.95] sm:text-[4rem] lg:text-[5.5rem] font-medium tracking-[-0.035em] text-foreground">
              Wholesome.<br />
              Balanced.<br />
              Made for Real Life.
            </h1>

            <p className="text-lg text-foreground/70 max-w-[520px] leading-relaxed">
              Chef-crafted meals with clean ingredients, balanced nutrition, and real flavor — delivered fresh to your door.
            </p>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-0.5 text-[color:var(--gold)]">
                {[0,1,2,3,4].map((i) => <Star key={i} className="w-4 h-4 fill-current" strokeWidth={0} />)}
              </div>
              <span className="text-sm font-medium">4.8</span>
              <span className="text-sm text-muted-foreground">(2,341 reviews)</span>
            </div>

            {/* Purchase card */}
            <div className="card-soft p-6 sm:p-8 mt-2 lg:sticky lg:top-24">
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-3xl font-semibold tracking-tight">${perMeal.toFixed(2)}</span>
                <span className="text-sm text-muted-foreground">/ per meal</span>
              </div>

              {/* Plan */}
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {([
                  { id: "onetime", label: "One-Time Purchase", sub: "No commitment, order anytime", price: (perMeal * count).toFixed(2) },
                  { id: "subscribe", label: "Subscribe & Save 15%", sub: "Skip or cancel anytime", price: (perMeal * count * 0.85).toFixed(2), badge: true },
                ] as const).map((opt) => {
                  const active = plan === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setPlan(opt.id)}
                      className={`relative text-left rounded-2xl border p-4 transition-all ${active ? "border-[color:var(--sage)] bg-[color:var(--sage)]/[0.04] ring-1 ring-[color:var(--sage)]" : "border-border hover:border-[color:var(--olive)]/50"}`}
                    >
                      {opt.badge && (
                        <span className="absolute -top-2 right-3 bg-[color:var(--gold)] text-[color:var(--ink)] text-[10px] font-medium tracking-wider uppercase px-2 py-0.5 rounded-full">Best value</span>
                      )}
                      <div className="flex items-start gap-3">
                        <span className={`mt-0.5 w-4.5 h-4.5 rounded-full border flex items-center justify-center ${active ? "border-[color:var(--sage)] bg-[color:var(--sage)]" : "border-border"}`} style={{ width: 18, height: 18 }}>
                          {active && <span className="w-2 h-2 rounded-full bg-[color:var(--cream)]" />}
                        </span>
                        <div className="flex-1">
                          <div className="text-sm font-medium leading-tight">{opt.label}</div>
                          <div className="text-[11px] text-muted-foreground mt-1">{opt.sub}</div>
                          <div className="text-lg font-semibold mt-2 tracking-tight">${opt.price}</div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Meal type */}
              <div className="mb-5">
                <div className="text-xs font-medium text-foreground/80 mb-2.5">Meal Type</div>
                <div className="flex flex-wrap gap-2">
                  {filters.map((f) => (
                    <button
                      key={f}
                      onClick={() => setFilter(f)}
                      className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${filter === f ? "bg-[color:var(--ink)] text-[color:var(--cream)]" : "bg-secondary text-foreground/80 hover:bg-secondary/70"}`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {/* Meal count */}
              <div className="mb-6">
                <div className="text-xs font-medium text-foreground/80 mb-2.5">Pack Size</div>
                <div className="grid grid-cols-4 gap-2">
                  {counts.map((c) => (
                    <button
                      key={c}
                      onClick={() => setCount(c)}
                      className={`py-2.5 rounded-xl text-sm font-medium transition-all border ${count === c ? "border-[color:var(--sage)] bg-[color:var(--sage)] text-[color:var(--cream)]" : "border-border hover:border-[color:var(--olive)]/50"}`}
                    >
                      {c} Meals
                    </button>
                  ))}
                </div>
              </div>

              {/* Guarantees mini row */}
              <div className="grid grid-cols-3 gap-2 mb-6 text-[11px] text-muted-foreground">
                {[
                  { icon: Leaf, label: "Clean Ingredients" },
                  { icon: ChefHat, label: "Chef-Crafted" },
                  { icon: Truck, label: "Delivered Fresh" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5 text-[color:var(--olive)]" strokeWidth={1.6} />
                    <span>{label}</span>
                  </div>
                ))}
              </div>

              {/* Qty + CTA */}
              <div className="flex items-stretch gap-3">
                <div className="flex items-center border border-border rounded-full px-2">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-secondary" aria-label="Decrease"><Minus className="w-3.5 h-3.5" /></button>
                  <span className="w-6 text-center text-sm font-medium tabular-nums">{qty}</span>
                  <button onClick={() => setQty(qty + 1)} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-secondary" aria-label="Increase"><Plus className="w-3.5 h-3.5" /></button>
                </div>
                <button className="btn-primary flex-1">
                  Add to Cart · ${price.toFixed(2)}
                  <ArrowRight className="w-4 h-4" strokeWidth={1.8} />
                </button>
              </div>
              <div className="text-[11px] text-muted-foreground mt-3 flex items-center justify-center gap-1.5">
                <Truck className="w-3 h-3" /> Free delivery on orders over $75
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative">
            <div className="absolute -inset-8 rounded-[3rem] bg-[color:var(--beige)]/60 -z-10 blur-2xl" aria-hidden />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[color:var(--beige)]">
              <img
                src={heroAsset.url}
                alt="Hands holding a stack of chef-crafted meal trays"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="hidden md:flex absolute -bottom-6 -left-6 card-soft p-4 gap-3 items-center max-w-[240px]">
              <div className="w-10 h-10 rounded-full bg-[color:var(--sage)] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-[color:var(--cream)]" strokeWidth={1.6} />
              </div>
              <div>
                <div className="text-xs font-semibold">Fresh, never frozen</div>
                <div className="text-[11px] text-muted-foreground">Delivered within 48h</div>
              </div>
            </div>
            <div className="hidden md:flex absolute -top-4 -right-4 card-soft p-4 flex-col gap-1 max-w-[200px]">
              <div className="flex items-center gap-0.5 text-[color:var(--gold)]">
                {[0,1,2,3,4].map((i) => <Star key={i} className="w-3 h-3 fill-current" strokeWidth={0} />)}
              </div>
              <div className="text-xs font-medium">"Genuinely the best meals I've had delivered."</div>
              <div className="text-[11px] text-muted-foreground">— Emily R.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-border/60 bg-[color:var(--beige)]/40">
        <div className="mx-auto max-w-[1400px] px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: ChefHat, label: "Chef Approved" },
            { icon: Leaf, label: "Nutritionist Designed" },
            { icon: ShieldCheck, label: "No Preservatives" },
            { icon: Truck, label: "Delivered Fresh" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <Icon className="w-5 h-5 text-[color:var(--sage)]" strokeWidth={1.5} />
              <span className="text-sm font-medium tracking-tight">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured meals */}
      <section id="meals" className="mx-auto max-w-[1400px] px-6 py-24">
        <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
          <div>
            <span className="eyebrow mb-4"><Leaf className="w-3.5 h-3.5" /> This week's menu</span>
            <h2 className="text-4xl sm:text-5xl font-medium tracking-tight mt-3 max-w-xl">Meals crafted for how you actually eat.</h2>
          </div>
          <a href="#" className="btn-ghost text-sm">View full menu <ArrowRight className="w-4 h-4" /></a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {meals.map((m) => (
            <article key={m.name} className="card-soft overflow-hidden group">
              <div className="relative aspect-square overflow-hidden bg-[color:var(--beige)]">
                <img src={m.img} alt={m.name} loading="lazy" width={1024} height={1024} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute top-4 left-4 bg-[color:var(--cream)]/95 backdrop-blur text-[10px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-full">{m.tag}</span>
                <button className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-[color:var(--ink)] text-[color:var(--cream)] flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all" aria-label={`Quick add ${m.name}`}>
                  <Plus className="w-4.5 h-4.5" strokeWidth={1.8} />
                </button>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium tracking-tight leading-tight">{m.name}</h3>
                <div className="flex items-center gap-3 mt-3 text-[11px] text-muted-foreground">
                  <span className="flex items-center gap-1"><Flame className="w-3 h-3" /> {m.kcal} kcal</span>
                  <span className="flex items-center gap-1"><Beef className="w-3 h-3" /> {m.protein}g</span>
                  <span className="flex items-center gap-1"><Wheat className="w-3 h-3" /> {m.carbs}g</span>
                  <span className="flex items-center gap-1 ml-auto"><Clock className="w-3 h-3" /> {m.time}m</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="bg-[color:var(--beige)]/40 border-y border-border/60">
        <div className="mx-auto max-w-[1400px] px-6 py-24">
          <div className="max-w-2xl">
            <span className="eyebrow"><ChefHat className="w-3.5 h-3.5" /> How it works</span>
            <h2 className="text-4xl sm:text-5xl font-medium tracking-tight mt-4">From our kitchen to your table in three steps.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {[
              { n: "01", t: "Choose your plan", d: "Pick 6, 10, 14 or 20 meals a week. Filter by balanced, high-protein, plant-based and more." },
              { n: "02", t: "We cook it fresh", d: "Our chefs prepare each meal by hand with organic, seasonal ingredients — never frozen." },
              { n: "03", t: "Delivered to your door", d: "Chilled shipping keeps meals fresh. Heat in minutes, enjoy in peace." },
            ].map((s) => (
              <div key={s.n} className="card-soft p-8">
                <div className="text-xs tracking-[0.3em] text-[color:var(--olive)]">{s.n}</div>
                <h3 className="text-2xl font-medium tracking-tight mt-6">{s.t}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef story */}
      <section id="chef" className="mx-auto max-w-[1400px] px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[color:var(--beige)]">
          <img src={chefPortrait} alt="Chef plating a dish" loading="lazy" width={1024} height={1024} className="w-full h-full object-cover" />
        </div>
        <div>
          <span className="eyebrow"><ChefHat className="w-3.5 h-3.5" /> The chef's table</span>
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tight mt-4 leading-[1.05]">
            Real food, made by real chefs — for the way you actually live.
          </h2>
          <p className="text-lg text-foreground/70 mt-6 leading-relaxed">
            Every recipe is developed by our head chef and reviewed by a registered nutritionist. We source seasonal produce from partner farms, cook everything by hand, and never rely on artificial preservatives.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Organic, seasonal produce from partner farms",
              "Balanced macros reviewed by nutritionists",
              "Zero artificial preservatives — ever",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3 text-sm">
                <span className="w-6 h-6 rounded-full bg-[color:var(--sage)] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-[color:var(--cream)]" strokeWidth={2.2} />
                </span>
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex items-center gap-4">
            <button className="btn-primary">Meet the chefs <ArrowRight className="w-4 h-4" /></button>
          </div>
        </div>
      </section>

      {/* Nutrition breakdown */}
      <section className="bg-[color:var(--sage)] text-[color:var(--cream)]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 grid lg:grid-cols-[1fr_1.1fr] gap-14 items-center">
          <div>
            <span className="text-[color:var(--cream)]/70 text-xs uppercase tracking-[0.2em]">Nutrition, by design</span>
            <h2 className="text-4xl sm:text-5xl font-medium tracking-tight mt-4 leading-[1.05]">
              Balanced macros. Real ingredients. No compromise.
            </h2>
            <p className="text-[color:var(--cream)]/75 mt-6 leading-relaxed max-w-lg">
              Every meal is calibrated for the way your body works — with clean protein, complex carbs, and healthy fats in the right ratios.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { v: "480–620", l: "kcal / meal" },
              { v: "22–42g", l: "protein" },
              { v: "< 12g", l: "added sugar" },
              { v: "100%", l: "whole grains" },
              { v: "0", l: "preservatives" },
              { v: "48h", l: "farm to fridge" },
            ].map((s) => (
              <div key={s.l} className="border border-[color:var(--cream)]/15 rounded-2xl p-6">
                <div className="text-3xl font-medium tracking-tight">{s.v}</div>
                <div className="text-xs text-[color:var(--cream)]/70 mt-2 uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-[1400px] px-6 py-24">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
          <div>
            <span className="eyebrow"><Star className="w-3.5 h-3.5 fill-current" /> Customer stories</span>
            <h2 className="text-4xl sm:text-5xl font-medium tracking-tight mt-4">Loved by 40,000+ home tables.</h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-0.5 text-[color:var(--gold)]">
              {[0,1,2,3,4].map((i) => <Star key={i} className="w-4 h-4 fill-current" strokeWidth={0} />)}
            </div>
            <span className="text-sm">4.8 average · 2,341 reviews</span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { q: "Every meal tastes like something I'd order at a proper restaurant. It's changed the way I eat during the week.", n: "Sarah K.", r: "Subscriber, 8 months" },
            { q: "I signed up for the protein-focused plan and honestly it's the best decision I've made for training season.", n: "Marcus L.", r: "Subscriber, 4 months" },
            { q: "Zero compromise on ingredients and the packaging is beautiful. Feels like a gift every week.", n: "Priya R.", r: "Subscriber, 1 year" },
          ].map((t, i) => (
            <figure key={i} className="card-soft p-8">
              <div className="flex items-center gap-0.5 text-[color:var(--gold)] mb-4">
                {[0,1,2,3,4].map((j) => <Star key={j} className="w-3.5 h-3.5 fill-current" strokeWidth={0} />)}
              </div>
              <blockquote className="text-[15px] leading-relaxed text-foreground/85">"{t.q}"</blockquote>
              <figcaption className="mt-6 text-xs">
                <div className="font-medium">{t.n}</div>
                <div className="text-muted-foreground mt-0.5">{t.r}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Subscription benefits */}
      <section id="sustain" className="mx-auto max-w-[1400px] px-6 pb-24">
        <div className="grid lg:grid-cols-2 rounded-[2rem] overflow-hidden bg-[color:var(--beige)]/60 border border-border">
          <div className="p-10 lg:p-16">
            <span className="eyebrow"><Sparkles className="w-3.5 h-3.5" /> Why subscribe</span>
            <h2 className="text-4xl sm:text-5xl font-medium tracking-tight mt-4 leading-[1.05]">A weekly ritual, at a better price.</h2>
            <ul className="mt-10 divide-y divide-border">
              {[
                { t: "Save 15% on every order", d: "Automatic subscriber pricing on every delivery." },
                { t: "Rotating seasonal menu", d: "New chef-crafted dishes every week." },
                { t: "Skip, swap, or cancel anytime", d: "Fully flexible — no lock-in, no fees." },
                { t: "Priority delivery windows", d: "Choose the day and time that fits your week." },
              ].map((b) => (
                <li key={b.t} className="py-5 flex items-start gap-4">
                  <Check className="w-5 h-5 text-[color:var(--sage)] mt-0.5 flex-shrink-0" strokeWidth={1.8} />
                  <div>
                    <div className="font-medium tracking-tight">{b.t}</div>
                    <div className="text-sm text-muted-foreground mt-1">{b.d}</div>
                  </div>
                </li>
              ))}
            </ul>
            <button className="btn-primary mt-10">Start your subscription <ArrowRight className="w-4 h-4" /></button>
          </div>
          <div className="relative min-h-[400px]">
            <img src={ingredients} alt="Fresh organic ingredients" loading="lazy" width={1024} height={1024} className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Instagram gallery */}
      <section className="mx-auto max-w-[1400px] px-6 pb-24">
        <div className="flex items-end justify-between gap-6 mb-8 flex-wrap">
          <div>
            <span className="eyebrow"><Instagram className="w-3.5 h-3.5" /> @harvestandroot</span>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mt-3">Tag us in your kitchen.</h2>
          </div>
          <a className="btn-ghost text-sm" href="#">Follow along <ArrowRight className="w-4 h-4" /></a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {[mealDahl, mealCurry, mealLasagna, mealSalmon, ingredients, chefPortrait].map((src, i) => (
            <div key={i} className="aspect-square rounded-xl overflow-hidden bg-[color:var(--beige)] group">
              <img src={src} alt="" loading="lazy" width={512} height={512} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-[1000px] px-6 pb-24">
        <div className="text-center mb-14">
          <span className="eyebrow justify-center"><ShieldCheck className="w-3.5 h-3.5" /> Questions, answered</span>
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tight mt-4">Frequently asked.</h2>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {[
            { q: "How fresh are the meals when they arrive?", a: "Every meal is prepared within 48 hours of shipping and delivered chilled — never frozen." },
            { q: "Can I skip or cancel my subscription?", a: "Yes. Skip any week or cancel anytime from your account. No fees, ever." },
            { q: "Are ingredients organic?", a: "We source certified organic produce from partner farms whenever possible, and every ingredient meets our clean-label standard." },
            { q: "How long do meals last in the fridge?", a: "Most meals stay fresh for 5–7 days in the fridge. Full guidance is on every meal card." },
            { q: "Which areas do you deliver to?", a: "We currently deliver across the continental US, with free shipping on orders over $75." },
          ].map((f, i) => (
            <details key={i} className="group py-6">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-medium tracking-tight text-lg">{f.q}</span>
                <Plus className="w-5 h-5 text-muted-foreground transition-transform group-open:rotate-45" strokeWidth={1.6} />
              </summary>
              <p className="text-sm text-muted-foreground mt-3 max-w-2xl leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[color:var(--ink)] text-[color:var(--cream)]">
        <div className="mx-auto max-w-[1400px] px-6 py-20 text-center">
          <span className="text-[color:var(--cream)]/60 text-xs uppercase tracking-[0.2em]">Join the table</span>
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tight mt-4 max-w-2xl mx-auto">Seasonal recipes and 15% off your first box.</h2>
          <form className="mt-10 flex flex-col sm:flex-row gap-2 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 bg-transparent border border-[color:var(--cream)]/25 rounded-full px-5 py-3.5 text-sm placeholder:text-[color:var(--cream)]/40 focus:outline-none focus:border-[color:var(--cream)]/60"
            />
            <button className="rounded-full bg-[color:var(--cream)] text-[color:var(--ink)] px-6 py-3.5 text-sm font-medium hover:opacity-90 transition-opacity">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-16 grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[color:var(--sage)] flex items-center justify-center">
                <Leaf className="w-4 h-4 text-[color:var(--cream)]" strokeWidth={1.5} />
              </div>
              <span className="text-[15px] font-semibold tracking-[0.18em]">HARVEST &amp; ROOT</span>
            </div>
            <p className="text-sm text-muted-foreground mt-5 max-w-xs leading-relaxed">
              Nourishing, chef-crafted meals inspired by nature — delivered to your door.
            </p>
          </div>
          {[
            { h: "Shop", l: ["Meals", "Plans", "Gift Cards", "Sustainability"] },
            { h: "Company", l: ["Our Story", "Chefs", "Careers", "Press"] },
            { h: "Support", l: ["Help Center", "Delivery", "Contact", "Refunds"] },
          ].map((c) => (
            <div key={c.h}>
              <div className="text-xs uppercase tracking-[0.18em] text-foreground/60 mb-4">{c.h}</div>
              <ul className="space-y-2.5 text-sm">
                {c.l.map((x) => (
                  <li key={x}><a href="#" className="hover:text-[color:var(--sage)] transition-colors">{x}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border/60">
          <div className="mx-auto max-w-[1400px] px-6 py-6 flex flex-wrap gap-3 items-center justify-between text-xs text-muted-foreground">
            <span>© {new Date().getFullYear()} Harvest &amp; Root. All rights reserved.</span>
            <div className="flex gap-5">
              <a href="#" className="hover:text-foreground">Privacy</a>
              <a href="#" className="hover:text-foreground">Terms</a>
              <a href="#" className="hover:text-foreground">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
