import uncleTax from "@/assets/uncle-tax.png";

type UncleTaxProps = {
  note: string;
  label?: string;
  variant?: "hero" | "aside" | "contact";
  flip?: boolean;
};

export function UncleTax({ note, label = "Uncle Tax kehta hai", variant = "aside", flip = false }: UncleTaxProps) {
  const hero = variant === "hero";
  const contact = variant === "contact";

  return (
    <div className={`uncle-scene relative ${hero ? "min-h-[500px]" : contact ? "min-h-[410px]" : "min-h-[350px]"}`}>
      <div className={`uncle-note absolute z-20 ${hero ? "left-0 top-2 max-w-[17rem]" : "left-0 top-4 max-w-[15rem]"}`}>
        <span className="block font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-amber">{label}</span>
        <p className="mt-1 font-body text-sm font-semibold leading-snug text-foreground">{note}</p>
      </div>
      <img
        src={uncleTax}
        alt="Uncle Tax, your Pakistani digital invoicing and tax guide"
        width={720}
        height={960}
        className={`uncle-float absolute bottom-0 z-10 object-contain drop-shadow-2xl ${
          hero ? "right-0 h-[470px] max-w-[88%]" : contact ? "right-2 h-[320px]" : "right-0 h-[265px]"
        } ${flip ? "-scale-x-100" : ""}`}
      />
      <div className="absolute inset-x-[12%] bottom-0 h-8 rounded-[50%] bg-foreground/10 blur-xl" />
    </div>
  );
}