import Button from "@/components/ui/Button";
import { FaArrowRight } from "react-icons/fa";

export default function ContactCTA() {
  return (
    <section className="py-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="space-y-2 max-w-lg">
          <h2 className="text-2xl font-bold text-zinc-100">
            Let&apos;s build something together.
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            I&apos;m always open to discussing new projects, ideas, or opportunities. 
          </p>
        </div>
        
        <div className="flex-shrink-0">
          <Button href="mailto:contact@ferigutti.com">
            Get in touch
            <FaArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
