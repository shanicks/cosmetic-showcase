import { Button } from "@/components/ui/button";
import { ThreeD } from "./ThreeD";
export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden px-6 pb-16 pt-8 lg:px-12 lg:pt-12 bg-cover bg-[url('splash6.png')]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-6">
        {/* Left Content */}
        <div className="flex flex-col gap-6 text-[#312321]">
          <h1 className="font-serif text-7xl leading-none tracking-tight text-foreground sm:text-8xl lg:text-[7rem]">
            dangila
          </h1>

          <div className="flex flex-col gap-4">
            <p className="font-serif text-xl text-foreground/80 italic">
              Natural Inner Beauty
            </p>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Provide deluxe hydration for those with dry or age-related skin
              concerns. They add intense moisture to dehydrated or mature skin,
              alleviating uneven, sun-damaged textures to promote natural
              radiance.
            </p>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <Button className="rounded-full bg-[#A98F86] px-7 py-5 text-sm font-large font-bold text-primary-foreground hover:bg-primary/90">
              Buy Now | $49.99
            </Button>
            {/* <Button
              variant="outline"
              className="rounded-full border-foreground/30 px-7 py-5 text-sm font-medium text-foreground hover:bg-secondary"
            >
              $49.99
            </Button> */}
          </div>
        </div>

        {/* Right - Product showcase */}
        <div className="relative flex items-center justify-center">
          <div className="relative aspect-square w-full max-w-lg lg:max-w-xl">
            <ThreeD />
          </div>
        </div>
      </div>

      {/* Social icons floating on left */}
      <div className="absolute bottom-20 left-6 hidden flex-col gap-3 lg:flex">
        <SocialIcon label="Facebook">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </SocialIcon>
        <SocialIcon label="Twitter">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </SocialIcon>
        <SocialIcon label="Instagram">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </SocialIcon>
      </div>
    </section>
  );
}

function SocialIcon({ children, label }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="flex size-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
      </svg>
    </a>
  );
}
