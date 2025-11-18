import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ava R.",
    text: "Hands-down the best cupcakes in town. The salted caramel is life-changing!",
    rating: 5,
  },
  {
    name: "Mia K.",
    text: "Beautiful, delicate flavors and such a friendly team. Our go-to for celebrations.",
    rating: 5,
  },
  {
    name: "Noah P.",
    text: "Moist, flavorful, and never too sweet. The lemon zest cupcake is my favorite.",
    rating: 4,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-pink-800">Sweet words</h2>
          <p className="text-pink-800/80">What our lovely customers are saying</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, idx) => (
            <motion.div
              key={r.name}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.12, type: "spring", stiffness: 90, damping: 18 }}
              className="rounded-2xl border border-pink-200 bg-white/80 backdrop-blur p-6 shadow-lg"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-400" />
                ))}
              </div>
              <p className="text-pink-900/90">{r.text}</p>
              <p className="mt-3 text-sm font-semibold text-pink-700">{r.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
