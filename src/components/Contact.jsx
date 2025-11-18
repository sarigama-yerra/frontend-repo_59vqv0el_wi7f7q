import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-pink-50/60">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-pink-800">Get in touch</h2>
          <p className="text-pink-800/80">We'd love to bake for you</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.a
            href="mailto:hello@ohmycupcakebakehouse.com"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-pink-200 bg-white/80 p-6 flex items-center gap-3 hover:shadow-lg transition"
          >
            <Mail className="text-pink-700" />
            <div>
              <p className="font-semibold text-pink-800">Email</p>
              <p className="text-pink-800/80 text-sm">hello@ohmycupcakebakehouse.com</p>
            </div>
          </motion.a>

          <motion.a
            href="tel:+1234567890"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-pink-200 bg-white/80 p-6 flex items-center gap-3 hover:shadow-lg transition"
          >
            <Phone className="text-pink-700" />
            <div>
              <p className="font-semibold text-pink-800">Phone</p>
              <p className="text-pink-800/80 text-sm">(123) 456-7890</p>
            </div>
          </motion.a>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-pink-200 bg-white/80 p-6 flex items-center gap-3"
          >
            <MapPin className="text-pink-700" />
            <div>
              <p className="font-semibold text-pink-800">Visit us</p>
              <p className="text-pink-800/80 text-sm">123 Sweet Street, Caketown</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
