import { WhatsAppIcon } from "@/components/icons";
import { whatsappUrl } from "@/lib/whatsapp";

/** Always-visible WhatsApp button in the bottom-right corner. */
export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl("Hello! I would like to know more about your tours.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed right-4 bottom-4 z-30 flex size-14 items-center justify-center rounded-full bg-forest text-ivory shadow-lg shadow-forest/25 transition-transform hover:scale-105 md:right-6 md:bottom-6"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
