import { FaInstagram, FaDiscord, FaRedditAlien, FaFacebookF } from "react-icons/fa";

export default function SocialIcons() {

  const socials = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/strongtownssandiego/",
      icon: FaInstagram,
      bg: "hover:bg-pink-700",
    },
    {
      name: "Discord",
      href: "https://discord.com/invite/8WYy2sQcxA",
      icon: FaDiscord,
      bg: "hover:bg-indigo-600",
    },
    {
      name: "Reddit",
      href: "https://www.reddit.com/r/StrongTownsSD/",
      icon: FaRedditAlien,
      bg: "hover:bg-orange-600",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61575577124066",
      icon: FaFacebookF,
      bg: "hover:bg-blue-600",
    },
  ];

  return (
    <div className="flex p-5">
      <div className="flex items-center space-x-4 rounded-full border border-[var(--st-yellow)] px-3">
        {socials.map(({ name, href, icon: Icon, bg }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className={`transition-colors bg-transparent ${bg} text-[var(--st-yellow)] hover:text-white`}

          >
            <Icon size={24} />
          </a>
        ))}
      </div>
    </div>
  );
}

/*

          className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-300 
            bg-transparent ${bg} text-[var(--st-yellow)] hover:text-white`}

*/