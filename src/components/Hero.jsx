import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-24">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-black tracking-tight text-pink-800"
          >
            Oh My Cupcake Bakehouse
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 text-lg text-pink-800/80 max-w-prose"
          >
            Small-batch, handcrafted cupcakes and bakes made fresh daily. Featuring seasonal flavors, premium ingredients, and lots of love.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 flex gap-3"
          >
            <a href="#menu" className="px-5 py-3 rounded-xl bg-pink-600 text-white font-semibold shadow hover:bg-pink-700 transition">Explore Menu</a>
            <a href="#contact" className="px-5 py-3 rounded-xl bg-pink-100 text-pink-700 font-semibold hover:bg-pink-200 transition">Get in touch</a>
          </motion.div>
        </div>

        <div className="relative">
          <motion.div
            initial={{ x: 80, rotate: 6, opacity: 0 }}
            animate={{ x: 0, rotate: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 14 }}
            className="relative w-full aspect-[4/3] rounded-3xl bg-gradient-to-br from-pink-100 to-pink-200 shadow-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(244,114,182,0.25),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(255,182,193,0.35),transparent_35%)]" />
            <motion.img
              src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1400&auto=format&fit=crop"
              alt="Cupcakes"
              className="absolute -right-6 bottom-0 w-2/3 object-cover drop-shadow-2xl"
              initial={{ x: 120, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, type: "spring", stiffness: 70, damping: 16 }}
            />
            <motion.img
              src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0ea?q=80&w=1200&auto=format&fit=crop"
              alt="Macarons"
              className="absolute -left-6 -top-6 w-1/2 object-cover rounded-2xl shadow-2xl"
              initial={{ x: -120, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, type: "spring", stiffness: 70, damping: 16 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
