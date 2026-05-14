import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white/60 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-heading font-semibold text-2xl tracking-tight text-white">
                Luxury Smile Studio
              </span>
            </Link>
            <p className="font-sans text-sm leading-relaxed max-w-xs">
              Premium cosmetic dentistry experience designed around your unique smile architecture.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3 text-sm font-sans">
              <li><Link href="#" className="hover:text-primary-400 transition-colors">Smile Design</Link></li>
              <li><Link href="#" className="hover:text-primary-400 transition-colors">Porcelain Veneers</Link></li>
              <li><Link href="#" className="hover:text-primary-400 transition-colors">Invisalign</Link></li>
              <li><Link href="#" className="hover:text-primary-400 transition-colors">Dental Implants</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Clinic</h4>
            <ul className="space-y-3 text-sm font-sans">
              <li><Link href="#" className="hover:text-primary-400 transition-colors">The Experience</Link></li>
              <li><Link href="#" className="hover:text-primary-400 transition-colors">Our Specialists</Link></li>
              <li><Link href="#" className="hover:text-primary-400 transition-colors">Technology</Link></li>
              <li><Link href="#" className="hover:text-primary-400 transition-colors">Patient Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm font-sans">
              <li>123 Luxury Avenue</li>
              <li>Beverly Hills, CA 90210</li>
              <li>contact@luxurysmile.com</li>
              <li>+1 (310) 555-0199</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans">
          <p>&copy; {new Date().getFullYear()} Luxury Smile Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
