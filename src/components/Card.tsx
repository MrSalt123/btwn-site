// components/Card.tsx
import { motion } from "framer-motion";

type CardProps = {
  title: string;
  description: string;
  features: string[];
  price: string;
  delay?: number;
};

export default function Card({ title, description, features, price, delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out text-left h-full flex flex-col"
    >
      <h3 className="text-2xl font-display font-bold text-[var(--color-foreground)] mb-2">{title}</h3>
      <p className="text-[var(--color-neutral-400)] font-display mb-4">{description}</p>
      <ul className="text-sm text-[var(--color-neutral-400)] font-display space-y-2 mb-6">
        {features.map((feature, idx) => (
          <li key={idx}>• {feature}</li>
        ))}
      </ul>
      <div className="mt-auto pt-4">
        <p className="text-xl font-bold text-[var(--color-foreground)]">Starting at ${price}</p>
      </div>
    </motion.div>
  );
}
