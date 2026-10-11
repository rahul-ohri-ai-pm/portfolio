
import Card from './common/Card';
import AnimatedText from './common/AnimatedText';
import { Mail, Linkedin, Github, Gamepad2, ArrowUpRight } from 'lucide-react';

type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: React.ReactNode;
  external: boolean;
};

const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    value: 'rahulohri2007@gmail.com',
    href: 'mailto:rahulohri2007@gmail.com',
    icon: <Mail size={20} />,
    external: false
  },
  {
    label: 'LinkedIn',
    value: '/in/rahul-ohri',
    href: 'https://www.linkedin.com/in/rahul-ohri/',
    icon: <Linkedin size={20} />,
    external: true
  },
  {
    label: 'GitHub',
    value: '@rahul-ohri-ai-pm',
    href: 'https://github.com/rahul-ohri-ai-pm',
    icon: <Github size={20} />,
    external: true
  },
  {
    label: 'Steam',
    value: 'Published game profile',
    href: 'https://steamcommunity.com/profiles/76561198123903147/',
    icon: <Gamepad2 size={20} />,
    external: true
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-cyber-grid bg-cyber-grid-size animate-grid-background opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl md:text-4xl font-bold relative">
            <AnimatedText variant="glow">Get In Touch</AnimatedText>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500"></span>
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Interested in discussing a project or opportunity? Reach out on whichever channel suits you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                className="group flex items-center space-x-4 rounded-lg border border-white/10 bg-cyber-darker/70 px-5 py-4 text-white/80 transition-colors hover:border-cyan-500/50 hover:text-cyan-400"
              >
                <div className="w-11 h-11 shrink-0 rounded-full flex items-center justify-center border border-white/20 group-hover:border-cyan-500/50 transition-colors">
                  {link.icon}
                </div>
                <div className="min-w-0">
                  <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                    {link.label}
                  </div>
                  <div className="text-sm text-white/60 truncate">{link.value}</div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="ml-auto shrink-0 text-white/30 group-hover:text-cyan-400 transition-colors"
                />
              </a>
            ))}
          </div>

          <Card variant="hover" className="p-5 border border-white/10 mt-10">
            <h4 className="text-lg font-medium text-white mb-2">Let's Build Something Amazing</h4>
            <p className="text-white/70 text-sm">
              Whether you're looking for a product manager, game developer, or a collaborative partner for your next project, I'm excited to discuss how my skills and experience can contribute to your success.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
