'use client';

export default function Success() {
  const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/LO6civAx80C3TIBf72sOer"; // <-- Whatsapp group
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#00BFA5] px-4">
      <div className="text-center max-w-md w-full space-y-6">
        {/* Heading */}
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">
            Congrats! You're In! 🎉
          </h1>
          <p className="text-white/90 text-sm md:text-base mt-2">
            You have successfully reserved your seat for the Masterclass.
          </p>
        </div>

        {/* WhatsApp Button */}
        <div className="space-y-3">
          <button
            onClick={() => window.open(WHATSAPP_GROUP_LINK, '_blank')}
            className="bg-[#00C853] hover:bg-[#00E676] text-white font-semibold py-3 px-6 rounded-lg w-full border border-white transition-all text-sm md:text-base"
          >
            💬 Join WhatsApp Group
          </button>

          {/* Date Box */}
          <div className="bg-white text-black font-medium rounded-lg py-2 w-full text-sm md:text-base">
            19th October, Sunday | 12:00 PM
          </div>
        </div>

        {/* Note Text */}
        <div className="text-[11px] md:text-xs text-white/90 leading-relaxed">
          Click on the button above to join the WhatsApp group. <br />
          <span className="font-semibold text-white">
            Do Not Forget to Join WhatsApp Group Before Jumping Into the Masterclass
          </span>
        </div>
      </div>
    </section>
  );
}
