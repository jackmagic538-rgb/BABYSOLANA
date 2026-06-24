"use client";
import { useEffect, useState } from "react";

// --- NAVBAR KOMPONENTE ---
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full grid grid-cols-3 items-center px-6 py-4 bg-black/40 backdrop-blur-md border-b border-white/10 z-50">
      {/* LEFT */}
      <div className="font-extrabold tracking-widest justify-self-start flex items-center gap-8">
        <span>$BABYSOL</span>
      </div>

      {/* CENTER NAV */}
      <div className="flex gap-5 justify-self-center">
        <a
          href="#roadmap"
          className="px-5 py-1 border border-white/30 font-bold transition hover:scale-105 inline-block"
        >
          Roadmap
        </a>

        <a
          href="#howtobuy"
          className="px-5 py-1 border border-white/30 font-bold transition hover:scale-105 inline-block"
        >
          HowToBuy
        </a>

        <a
          href="#community"
          className="px-5 py-1 border border-white/30 font-bold transition hover:scale-105 inline-block"
        >
          Community
        </a>
      </div>

      {/* RIGHT SOCIAL BUTTONS */}
      <div className="flex gap-4 justify-self-end items-center">
        <a
          href="https://x.com/BabySolanaSOL1"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:scale-105"
        >
          <img src="/TwitterLogo.png" className="w-8 h-8" alt="Twitter" />
        </a>

        <a
          href="https://t.me/BABYSOL1"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:scale-105"
        >
          <img src="/TelegramLogo.png" className="w-8 h-8" alt="Telegram" />
        </a>
      </div>
    </nav>
  );
}

// ================= HAUPT-LAYOUT =================
export default function Page() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* 🌌 Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-purple-900/20 to-transparent"></div>

      <div
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(147, 51, 234, 0.8) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(103, 232, 249, 1) 0%, transparent 30%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-30 z-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(white 1.5px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Hier wird die Navbar gerendert */}
      <Navbar />

      {/* ================= CONTENT ================= */}
      <div className="pt-40 px-10 relative z-10 max-w-6xl mx-auto">
        
        {/* HERO SECTION */}
        <div className="min-h-[80vh] flex flex-col justify-center items-center">
          
          {/* 1. Der Titel */}
          <h1 className="text-7xl md:text-8xl font-extrabold tracking-wide text-center font-sans bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">
            BABY SOLANA
          </h1>

          {/* 2. Der Countdown direkt darunter */}
          <div className="mt-4 bg-white/5 border border-white/10 font-extrabold tracking-wider font-sans rounded-xl px-6 py-2 transition hover:scale-105 flex items-center gap-2">
            CA:  CW8NbUaTwiarDGMNCHk8Jh9aXnUqXMSghHnpibGspump
          </div>

          {/* ABOUT CONTAINER */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-16 mt-16 w-full">
            <div className="w-full max-w-[575px] aspect-[575/533] border border-white/30 rounded-2xl overflow-hidden transition hover:scale-105">
              <img
                src="/BABYSOL6.png"
                className="w-full h-full object-cover"
                alt="Baby Sol"
              />
            </div>

            <div className="flex flex-col font-bold items-start gap-5 max-w-md">
              <p className="text-gray-300">ABOUT US:</p>

              <p className="text-gray-400 bg-white/5 p-4 rounded-xl border border-white/10 transition hover:scale-105">
                Baby SOL isn't just a token — it's the cutest coin on the
                blockchain. We're here to ride waves, break charts, and make
                memes great again. Fueled by the Solana community, powered by
                pure baby energy. HODL tight, the baby's about to run🚀
              </p>

              <div className="flex gap-5">
                <a
                  href="https://pump.fun/coin/CW8NbUaTwiarDGMNCHk8Jh9aXnUqXMSghHnpibGspump"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-white font-extrabold tracking-wider font-sans rounded-full transition hover:scale-105 cursor-pointer block"
                >
                  BUY
                </a>

                <a
                  href="https://pump.fun/coin/CW8NbUaTwiarDGMNCHk8Jh9aXnUqXMSghHnpibGspump"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-white font-extrabold tracking-wider font-sans rounded-full transition hover:scale-105 cursor-pointer block"
                >
                  CHART
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-white/10 my-20" />

        {/* ROADMAP */}
        <section
          id="roadmap"
          className="scroll-mt-24 min-h-[30vh] flex flex-col font-bold justify-center"
        >
          <h2 className="text-4xl font-extrabold tracking-wider font-sans mb-6 text-violet-600">
            ROADMAP
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl transition hover:scale-105">
              <h3 className="text-xl font-bold mb-2">Phase 1</h3>
              <p className="text-gray-400 text-sm">
                ✓ Website & Branding <br /> ✓ Community Building (Telegram, X){" "}
                <br /> ✓ Launch on pump.fun{" "}
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl transition hover:scale-105">
              <h3 className="text-xl font-bold mb-2">Phase 2</h3>
              <p className="text-gray-400 text-sm">
                🠒 100% Bonding curve progress <br /> • Trending on
                DEXScreeners <br /> • Riding waves, breaking charts, and making
                memes great again🔥
              </p>
            </div>
          </div>
        </section>

        <hr className="border-white/10 my-20" />

        {/* HOW TO BUY */}
        <section
          id="howtobuy"
          className="scroll-mt-24 min-h-[30vh] flex flex-col font-bold justify-center"
        >
          <h2 className="text-4xl font-extrabold tracking-wider font-sans mb-6 text-fuchsia-500">
            HOW TO BUY
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl transition hover:scale-105">
              <h3 className="text-xl font-bold mb-2">Get a Wallet</h3>
              <p className="text-gray-400 text-sm">
                Download Phantom wallet to get started.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl transition hover:scale-105">
              <h3 className="text-xl font-bold mb-2">Buy Solana</h3>
              <p className="text-gray-400 text-sm">
                Get your hands on some SOL from your favorite exchange.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl transition hover:scale-105">
              <h3 className="text-xl font-bold mb-2">Swap</h3>
              <p className="text-gray-400 text-sm">
                Use pump.fun to trade your SOL for our token and start the meme
                revolution!
              </p>
            </div>
          </div>
        </section>

        <hr className="border-white/10 my-20" />

        {/* COMMUNITY */}
        <section
          id="community"
          className="scroll-mt-24 min-h-[30vh] flex flex-col font-extrabold font-sans justify-center pb-20"
        >
          <h2 className="text-4xl font-extrabold tracking-wider font-sans mb-6 text-cyan-400">
            COMMUNITY
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-10">
            <div>
              <p className="text-gray-300 mb-6 max-w-md">
                Join the Baby SOL army!
              </p>

              <div className="flex gap-4">
                <a
                  href="https://x.com/BabySolanaSOL1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-white rounded-full transition hover:scale-105"
                >
                  <img src="/TwitterLogo.png" className="w-5 h-5" alt="X" />
                </a>

                <a
                  href="https://t.me/BABYSOL1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-white rounded-full transition hover:scale-105"
                >
                  <img src="/TelegramLogo.png" className="w-5 h-5" alt="Telegram" />
                </a>
              </div>
            </div>

            {/* Bildplatzhalter */}
            <div className="w-[300px] h-[250px] border border-white/30 rounded-2xl overflow-hidden bg-white/5 flex items-center justify-center text-gray-500 transition hover:scale-105">
              <img
                src="/BABYSOL5.png"
                alt="Community"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}