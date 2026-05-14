import { Shield, Award, Clock, Star } from "lucide-react";

const indicators = [
  {
    icon: Award,
    title: "Award Winning",
    desc: "Recognized Clinical Excellence"
  },
  {
    icon: Shield,
    title: "Certified Specialists",
    desc: "Top 1% Cosmetic Dentists"
  },
  {
    icon: Star,
    title: "5-Star Experience",
    desc: "1,000+ Perfect Reviews"
  },
  {
    icon: Clock,
    title: "15+ Years",
    desc: "Of Smile Transformations"
  }
];

export default function TrustIndicators() {
  return (
    <section className="py-16 bg-surface-alt border-y border-silver-300/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {indicators.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center bg-white shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                <item.icon className="w-5 h-5 text-primary-500" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-navy-900 text-sm md:text-base">{item.title}</h3>
                <p className="text-xs md:text-sm text-navy-800/60 mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
