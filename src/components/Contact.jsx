import { motion } from "framer-motion";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMail,
  IconExternalLink,
  IconBrandFacebook,
  IconBrandTiktok,
} from "@tabler/icons-react";

export default function Contact() {
  const socials = [
    {
      name: "GitHub",
      icon: IconBrandGithub,
      link: "https://github.com/ignotum-dev",
      color: "hover:text-white hover:border-white/50",
    },
    {
      name: "LinkedIn",
      icon: IconBrandLinkedin,
      link: "https://www.linkedin.com/in/floresgeraldivan/",
      color: "hover:text-blue-400 hover:border-blue-400",
    },
    {
      name: "Facebook",
      icon: IconBrandFacebook,
      link: "https://www.facebook.com/flores.geraldivan/",
      color: "hover:text-blue-500 hover:border-blue-500",
    },
    {
      name: "Tiktok",
      icon: IconBrandTiktok,
      link: "https://www.tiktok.com/@intellisense.stdio",
      color: "hover:text-pink-400 hover:border-pink-400",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-16">
      <div className="mb-8 md:mb-12 flex flex-col gap-3 md:gap-4 text-center">
        <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-slate-400">
          Get In Touch
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          Let's Connect
        </h2>
        <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto px-2">
          Feel free to reach out through any of my social profiles. I'm always
          interested in connecting with fellow developers and exploring new opportunities.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ margin: "-100px" }}
        className="flex flex-col items-center gap-8"
      >
        {/* Social Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl">
          {socials.map((social, idx) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ margin: "-100px" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`group flex flex-col items-center gap-3 p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer ${social.color}`}
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-[#5227FF]/20 to-[#5227FF]/5 group-hover:from-[#5227FF]/30 group-hover:to-[#5227FF]/15 transition-all duration-300">
                  <Icon size={32} className="transition-colors duration-300" />
                </div>
                <span className="text-sm font-medium text-white group-hover:text-inherit transition-colors">
                  {social.name}
                </span>
              </motion.a>
            );
          })}
        </div>

        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ margin: "-100px" }}
          className="mt-8 text-center"
        >
          <p className="text-slate-400 mb-4">Or send me an email directly:</p>
          <motion.a
            href="mailto:flores.geraldivan@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-[#5227FF]/50 bg-[#5227FF]/10 text-[#B19EEF] font-medium hover:bg-[#5227FF]/20 hover:border-[#5227FF] transition-all duration-200"
          >
            <IconMail size={20} />
            Get In Touch
            <IconExternalLink size={16} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Footer Note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ margin: "-100px" }}
        className="mt-16 text-center"
      >
        <p className="text-xs text-slate-500">
          © 2026 ignotum.dev. All rights reserved.
        </p>
      </motion.div>
    </div>
  );
}
