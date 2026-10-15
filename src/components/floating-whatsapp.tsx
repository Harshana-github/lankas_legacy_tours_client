import { WhatsAppIcon } from "@/components/icons";
import { whatsappUrl } from "@/lib/whatsapp";

/**
 * Always-visible WhatsApp button in the bottom-right corner.
 * Uses the official WhatsApp green so guests recognise it at a glance.
 */
export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl("Hello! I would like to know more about your tours.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed right-4 bottom-4 z-30 flex items-center gap-3 md:right-6 md:bottom-6"
    >
      <span className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink shadow-lg shadow-ink/10 sm:block">
        Chat with us
      </span>

      <span className="relative flex size-16 items-center justify-center">
        {/* Soft pulse to draw the eye; switched off for people who prefer reduced motion. */}
        <span className="absolute inset-0 rounded-full bg-whatsapp opacity-60 motion-safe:animate-ping motion-safe:[animation-duration:2.5s]" />
        <span className="relative flex size-16 items-center justify-center rounded-full bg-whatsapp text-white shadow-xl shadow-whatsapp/40 transition-transform group-hover:scale-105 group-hover:bg-whatsapp-dark">
          <WhatsAppIcon className="size-9" />
        </span>
      </span>
    </a>
  );
}
