import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

const sections = [
  {
    title: "Cupcakes",
    items: [
      { name: "Classic Vanilla", price: 3.5, desc: "Vanilla sponge, silky buttercream" },
      { name: "Double Chocolate", price: 3.8, desc: "Rich cocoa base, chocolate ganache" },
      { name: "Strawberry Shortcake", price: 4.2, desc: "Jam-filled, whipped cream swirl" },
    ],
  },
  {
    title: "Specials",
    items: [
      { name: "Red Velvet", price: 4.0, desc: "Cream cheese frosting" },
      { name: "Lemon Zest", price: 3.9, desc: "Lemon curd center" },
      { name: "Salted Caramel", price: 4.1, desc: "Caramel core, sea salt" },
    ],
  },
  {
    title: "Beverages",
    items: [
      { name: "Latte", price: 3.2, desc: "Velvety milk, rich espresso" },
      { name: "Hot Chocolate", price: 2.9, desc: "Belgian cocoa" },
      { name: "Iced Tea", price: 2.5, desc: "Seasonal fruit" },
    ],
  },
];

export default function FlipBookMenu() {
  const [page, setPage] = useState(0);
  const left = useAnimationControls();
  const right = useAnimationControls();

  useEffect(() => {
    left.start({ rotateY: page % 2 === 0 ? 0 : -180 });
    right.start({ rotateY: page % 2 === 0 ? 0 : 180 });
  }, [page]);

  const next = () => setPage((p) => Math.min(p + 1, sections.length - 1));
  const prev = () => setPage((p) => Math.max(p - 1, 0));

  return (
    <section id="menu" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-pink-800">Menu</h2>
            <p className="text-pink-800/80">Flip through our offerings like a cozy recipe book.</p>
          </div>
          <div className="flex gap-2">
            <button onClick={prev} className="px-3 py-2 rounded-lg bg-pink-100 text-pink-700 hover:bg-pink-200">Prev</button>
            <button onClick={next} className="px-3 py-2 rounded-lg bg-pink-600 text-white hover:bg-pink-700">Next</button>
          </div>
        </div>

        <div className="relative perspective-[1200px]">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Page */}
            <motion.div
              animate={left}
              initial={{ rotateY: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 18 }}
              className="origin-right [transform-style:preserve-3d] rounded-2xl bg-pink-50 border border-pink-200 p-6 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-pink-800 mb-4">{sections[page].title}</h3>
              <ul className="grid gap-3">
                {sections[page].items.map((i) => (
                  <li key={i.name} className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold text-pink-800">{i.name}</p>
                      <p className="text-sm text-pink-800/70">{i.desc}</p>
                    </div>
                    <span className="font-bold text-pink-700">${i.price.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right Page */}
            <motion.div
              animate={right}
              initial={{ rotateY: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 18 }}
              className="origin-left [transform-style:preserve-3d] rounded-2xl bg-white border border-pink-200 p-6 shadow-xl"
            >
              <div className="h-full flex items-center justify-center">
                <p className="text-pink-700/80">Use the buttons to flip pages</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
