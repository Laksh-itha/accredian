import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
const SOCIALS = [
  {
    name: "Facebook",
    icon: <FaFacebookF />,
    href: "https://facebook.com",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn />,
    href: "https://linkedin.com",
  },
  {
    name: "Twitter",
    icon: <FaTwitter />,
    href: "https://twitter.com",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    href: "https://instagram.com",
  },
  {
    name: "YouTube",
    icon: <FaYoutube />,
    href: "https://youtube.com",
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp />,
    href: "https://wa.me/",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-white py-12">
      <div className="container-page">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <span className="font-display font-800 text-xl tracking-tightest text-ink">
              accredian
            </span>
            <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-ink/40 font-mono">
              credentials that matter
            </p>
            <div className="mt-5 flex gap-3">
  {SOCIALS.map((social) => (
    <a
      key={social.name}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.name}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-lg text-ink/50 transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white"
    >
      {social.icon}
    </a>
  ))}
</div>
          </div>

          <div>
            <p className="font-display font-700 text-sm text-ink">Accredian</p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-ink/60">
              <li><a className="hover:text-accent" href="#">About</a></li>
              <li><a className="hover:text-accent" href="#">Blog</a></li>
              <li><a className="hover:text-accent" href="#">Why Accredian</a></li>
            </ul>
          </div>

          <div>
            <p className="font-display font-700 text-sm text-ink">Contact Us</p>
            <p className="mt-4 text-sm text-ink/60">
              Email us:{" "}
              <a className="text-accent hover:underline" href="mailto:enterprise@accredian.com">
                enterprise@accredian.com
              </a>
            </p>
            <p className="mt-3 text-sm text-ink/60">
              4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana
            </p>
          </div>
        </div>

        <p className="mt-12 border-t border-ink/10 pt-6 text-xs text-ink/35">
          © {new Date().getFullYear()} Accredian. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
