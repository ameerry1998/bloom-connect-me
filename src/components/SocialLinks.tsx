
import { Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

const SocialLinks = () => {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://instagram.com/yourusername",
      icon: Instagram,
      color: "hover:text-pink-500"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yourusername", 
      icon: Twitter,
      color: "hover:text-blue-400"
    },
    {
      name: "TikTok",
      url: "https://tiktok.com/@yourusername",
      icon: () => (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
      color: "hover:text-black"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: Linkedin,
      color: "hover:text-blue-600"
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@yourusername",
      icon: Youtube,
      color: "hover:text-red-500"
    }
  ];

  return (
    <div className="flex items-center space-x-6">
      {socialLinks.map((social) => {
        const IconComponent = social.icon;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-400 transition-colors duration-200 ${social.color} hover:scale-110 transform`}
            aria-label={`Follow on ${social.name}`}
          >
            <IconComponent />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
