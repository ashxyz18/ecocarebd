"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { getCallLink, getWhatsAppLink } from "@/lib/utils";
import { cn } from "@/lib/utils";

/**
 * Persistent mobile action bar. Hidden once the user scrolls past the hero so it
 * never competes with page content, and respects safe-area insets on iOS.
 */
export default function MobileCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 lg:hidden",
        "pb-[env(safe-area-inset-bottom)]",
        visible ? "translate-y-0" : "translate-y-full"
      )}
      aria-hidden={!visible}
    >
      <div className="flex items-stretch gap-px border-t border-border bg-border shadow-[0_-4px_20px_rgba(15,23,42,0.08)]">
        <a
          href={getCallLink()}
          tabIndex={visible ? 0 : -1}
          className="flex flex-1 items-center justify-center gap-2 bg-surface px-3 py-3.5 text-[14px] font-bold text-foreground"
        >
          <Phone className="size-[18px] text-primary" />
          Call
        </a>
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={visible ? 0 : -1}
          className="flex flex-1 items-center justify-center gap-2 bg-[#25D366] px-3 py-3.5 text-[14px] font-bold text-white"
        >
          <MessageCircle className="size-[18px]" />
          WhatsApp
        </a>
        <Link
          href="/contact"
          tabIndex={visible ? 0 : -1}
          className="flex flex-1 items-center justify-center gap-2 bg-primary px-3 py-3.5 text-[14px] font-bold text-white"
        >
          <CalendarCheck className="size-[18px]" />
          Book
        </Link>
      </div>
    </div>
  );
}