import { motion } from "framer-motion";
import { Badge } from 'lucide-react';


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
      className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-xl hover:scale-[1.03] transition-transform duration-300 ease-in-out text-left h-full flex flex-col max-w-[320px] mx-auto"
    >
      <div>
        <h3 className="text-3xl font-display font-bold text-foreground mb-2 text-center">
          <span className="bg-gradient-to-r from-accent-400 via-accent to-accent-400 bg-clip-text text-transparent">{title}</span>
        </h3>
        <p className="text-neutral-300 font-display text-center mb-4 text-base">
          {description}
        </p>
        <div className="text-center mb-6">
          <p className="text-sm text-[var(--color-neutral-400)] uppercase tracking-wide mb-1 font-display">
            Starting at
          </p>
          <p className="text-4xl font-bold text-[var(--color-foreground)]">
            ${price}
          </p>
        </div>
      </div>

      <ul className="text-[var(--color-foreground)] text-base font-medium space-y-4 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <Badge className="w-5 h-5 text-accent mt-1 shrink-0" />
            <span className="font-display">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
