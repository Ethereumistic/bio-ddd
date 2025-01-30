import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
IconBrandFacebook,
  IconBrandTiktok,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Facebook",
      icon: (
        <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.facebook.com/profile.php?id=61572588328432",
    },

    {
      title: "Instagram",
      icon: (
        <FaInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/bio_ddd_com/",
    },
    {
      title: "TikTok",
      icon: (
        <IconBrandTiktok className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.tiktok.com/@bioddd.com",
    },

    {
      title: "E-Mail",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:biodddltd@gmail.com",
    },
  ];
  return (
    <div className="flex items-center justify-center  w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
