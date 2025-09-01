import { FaInstagram, FaDiscord, FaReddit, FaFacebook } from "react-icons/fa";

export default function SocialIcons() {
  const socials = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/strongtownssandiego/",
      icon: FaInstagram,
      color: "hover:text-pink-500",
    },
    {
      name: "Discord",
      href: "https://discord.com/invite/8WYy2sQcxA",
      icon: FaDiscord,
      color: "hover:text-blue-700",
    },
    {
      name: "Reddit",
      href: "https://www.reddit.com/r/StrongTownsSD/",
      icon: FaReddit,
      color: "hover:text-sky-500",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61575577124066",
      icon: FaFacebook,
      color: "hover:text-blue-600",
    },
  ];

  return (
    <div className="w-full bg-gray-100 py-6 mt-10">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        {/* Social icons */}
        <div className="flex space-x-6">
          {socials.map(({ name, href, icon: Icon, color }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className={`text-gray-600 transition-colors duration-300 ${color}`}
            >
              <Icon size={28} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

/*

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>


*/