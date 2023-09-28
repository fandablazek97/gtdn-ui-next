import SmartLink from "@/components/primitives/SmartLink";
import { cn } from "@/utils/cn";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const socials = [
  {
    name: "Facebook",
    icon: FaFacebookF,
    href: "https://www.facebook.com/",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/",
  },
];

type Props = {
  className?: string;
};

export default function SocialMedia({ className }: Props) {
  return (
    <ul className={cn("flex gap-6", className)}>
      {socials.map((social) => (
        <li key={social.name} className="transition-colors duration-150">
          <SmartLink href={social.href}>
            <span className="sr-only">{social.name}</span>
            <social.icon className="h-5 w-5" />
          </SmartLink>
        </li>
      ))}
    </ul>
  );
}
