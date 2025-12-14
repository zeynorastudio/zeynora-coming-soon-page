export default function StickyBrandBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-20 bg-vine-red">
      {/* Top decorative line */}
      <div className="h-px bg-ivory/20" />
      
      {/* Brand text content */}
      <div className="w-full h-16 md:h-20 flex flex-col items-center justify-center px-4 py-2">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gold tracking-wide uppercase">
          ZEYNORA
        </h1>
        <p className="text-xs md:text-sm lg:text-base font-heading font-semibold text-gold/90 tracking-wider uppercase mt-1">
          ATELIER · COUTURE · HERITAGE
        </p>
      </div>
      
      {/* Bottom decorative lines */}
      <div className="h-px bg-ivory/10" />
      <div className="h-px bg-ivory/5" />
    </div>
  )
}

