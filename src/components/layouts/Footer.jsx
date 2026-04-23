import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="relative overflow-hidden bg-base-100 text-base-content border-t border-base-300">
      {/* Background Decor - Unique Touch */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/10 blur-[120px] rounded-full"></div>

      <div className="footer sm:footer-horizontal p-10 md:py-16 container mx-auto relative z-10">
        {/* Brand Section */}
        <aside className="flex flex-col gap-4 max-w-sm">
          <Logo className="scale-110 origin-left" />
          <p className="opacity-70 leading-relaxed">
            Providing reliable tech services since 1992. <br />
            Creating the future with innovation and design.
          </p>
          <div className="flex gap-4 mt-2">
             {/* Social Icons with Hover Animation */}
             {[
               { path: "M24 4.557...", label: "Twitter" },
               { path: "M19.615 3.184...", label: "YouTube" },
               { path: "M9 8h-3v4...", label: "Facebook" }
             ].map((icon, index) => (
               <a key={index} className="btn btn-ghost btn-circle btn-sm hover:bg-primary hover:text-white transition-all duration-300">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current">
                   <path d={icon.path}></path>
                 </svg>
               </a>
             ))}
          </div>
        </aside>

        {/* Links Sections */}
        <nav>
          <h6 className="footer-title opacity-100 font-bold text-primary tracking-widest">Services</h6>
          <a className="link link-hover hover:text-primary transition-colors">Branding</a>
          <a className="link link-hover hover:text-primary transition-colors">Design</a>
          <a className="link link-hover hover:text-primary transition-colors">Marketing</a>
          <a className="link link-hover hover:text-primary transition-colors">Advertisement</a>
        </nav>

        <nav>
          <h6 className="footer-title opacity-100 font-bold text-primary tracking-widest">Company</h6>
          <a className="link link-hover hover:text-primary transition-colors">About us</a>
          <a className="link link-hover hover:text-primary transition-colors">Contact</a>
          <a className="link link-hover hover:text-primary transition-colors">Jobs</a>
          <a className="link link-hover hover:text-primary transition-colors">Press kit</a>
        </nav>

        <nav>
          <h6 className="footer-title opacity-100 font-bold text-primary tracking-widest">Legal</h6>
          <a className="link link-hover hover:text-primary transition-colors">Terms of use</a>
          <a className="link link-hover hover:text-primary transition-colors">Privacy policy</a>
          <a className="link link-hover hover:text-primary transition-colors">Cookie policy</a>
        </nav>
      </div>

      {/* Bottom Bar */}
    
    </div>
  );
};

export default Footer;