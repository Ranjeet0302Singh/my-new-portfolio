import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const socials = [
  { icon: <FaGithub />, path: "https://github.com/Ranjeet0302Singh" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/ranjeet-singh-rawat/",
  },
];
type SocialProps = {
  containerStyles: string;
  iconStyles: string;
};

const Social = ({ containerStyles, iconStyles }: SocialProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
