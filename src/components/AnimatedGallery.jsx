import { motion } from "framer-motion";

const photos = [
  "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541782814455-70c1b2052b84?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541976076758-347942db1970?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1568051243858-2f5bb4018f83?q=80&w=1400&auto=format&fit=crop",
];

export default function AnimatedGallery() {
  return (
    <section id="gallery" className="py-20 bg-pink-50/40">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-pink-800">Fresh from the oven</h2>
          <p className="text-pink-800/80 mt-2">A peek at our daily bakes — sliding in, just like they do out of the oven.</p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-pink-200/60 bg-white/70 backdrop-blur">
          <div className="flex gap-4 p-4">
            {photos.concat(photos).map((src, i) => (
              <motion.img
                key={i}
                src={src}
                alt="bake"
                className="w-72 h-48 object-cover rounded-xl shadow-md"
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.08, type: "spring", stiffness: 80, damping: 18 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
