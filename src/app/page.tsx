'use client'

import Fichas from './components/fichas';

export default function Home() {
  return (
    <main className="container mx-auto">
      <p className="text-6xl text-center md:text-9xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient">
        Fichas-Next
      </p>
      <Fichas />
    </main>
  );
}
