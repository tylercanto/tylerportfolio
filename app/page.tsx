"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";

/* ============================================================
   DADOS — mantidos fora do componente para evitar recriação
   a cada render. Mova para `src/data/content.ts` quando quiser.
   ============================================================ */

export const skills = [
  "Bacula",
  "Veeam",
  "Acronis",
  "Linux",
  "Windows Server",
  "Proxmox",
  "Hyper-V",
  "Docker",
  "Mikrotik",
  "VPN",
  "Firewall",
  "Storage",
  "Cloud",
  "Cybersecurity",
];

export const projects = [
  {
    title: "Enterprise Backup Infrastructure",
    description:
      "Ambientes de backup corporativo utilizando Bacula, Acronis, Veeam, armazenamento remoto e estratégias de Disaster Recovery.",
  },
  {
    title: "Virtualization Environment",
    description:
      "Laboratórios e ambientes virtualizados utilizando Proxmox VE, Hyper-V, máquinas Linux e segmentação de rede.",
  },
  {
    title: "Cybersecurity Labs",
    description:
      "Projetos envolvendo firewall, VPN, hardening, monitoramento e segurança de ambientes corporativos.",
  },
  {
    title: "Infraestrutura para Cartórios",
    description:
      "Projetos envolvendo servidores, backup corporativo, segurança da informação e disponibilidade dos serviços.",
  },
  {
    title: "Infraestrutura para Contabilidades",
    description:
      "Implementação de soluções de backup, proteção de dados, acesso remoto e monitoramento.",
  },
  {
    title: "Network Infrastructure",
    description:
      "Troubleshooting de redes, VPNs, equipamentos Mikrotik, análise de conectividade e suporte operacional.",
  },
];

export const timeline = [
  {
    period: "2024 - Atual",
    company: "GOX Internet",
    role: "NOC de Redes",
    description:
      "Monitoramento de redes, troubleshooting, análise de conectividade, fibra óptica, equipamentos de acesso e suporte operacional.",
  },
  {
    period: "2023 - 2024",
    company: "BYSERVER",
    role: "Infraestrutura & Cybersecurity",
    description:
      "Atuação com backup corporativo, servidores Linux e Windows, HelpDesk, infraestrutura e soluções de segurança.",
  },
];

/* ============================================================
   TERMINAL
   ============================================================ */

type Command = "help" | "skills" | "projects" | "contact" | "clear";

const terminalCommands: Record<Exclude<Command, "clear">, string[]> = {
  help: [
    "Comandos disponíveis:",
    "",
    "skills   — lista de habilidades técnicas",
    "projects — projetos e ambientes",
    "contact  — formas de contato",
    "clear    — limpa o terminal",
  ],
  skills: skills.map((s) => `◈ ${s}`),
  projects: projects.map((project) => `◈ ${project.title}`),
  contact: [
    "Email: tylercanto23@gmail.com",
    "",
    "LinkedIn: linkedin.com/in/tyler-canto",
    "",
    "GitHub: github.com/tylercanto",
  ],
};

/* ============================================================
   COMPONENTE
   ============================================================ */

export default function Home() {
  const [command, setCommand] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    "[visitor@datacenter ~]$",
    "",
    "Digite 'help' para visualizar os comandos.",
  ]);

  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll só dentro do corpo do terminal — não move a página.
  useEffect(() => {
    const el = terminalBodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [terminalHistory]);

  function executeCommand(event: FormEvent) {
    event.preventDefault();

    const cmd = command.toLowerCase().trim() as Command;
    if (!cmd) return;

    if (cmd === "clear") {
      setTerminalHistory(["[visitor@datacenter ~]$"]);
      setCommand("");
      return;
    }

    const output = terminalCommands[cmd];

    setTerminalHistory([
      `[visitor@datacenter ~]$ ${cmd}`,
      "",
      ...(output ?? [
        `Comando '${cmd}' não encontrado.`,
        "",
        "Digite 'help'.",
      ]),
    ]);

    setCommand("");
    inputRef.current?.focus();
  }

  // Handler para links externos - garante que abram corretamente
  function handleExternalLink(url: string) {
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="min-h-screen bg-[#080808] text-white overflow-hidden">
      {/* BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(71,0,0,0.25),transparent_40%)]" />
      <div className="fixed inset-0 pointer-events-none opacity-10 bg-[linear-gradient(#470000_1px,transparent_1px),linear-gradient(90deg,#470000_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* NAVBAR */}
      <header className="relative z-10 border-b border-[#470000]/30 backdrop-blur-xl bg-black/40">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black">
              <span className="text-[#ff0033] inline-block transition-transform duration-500 hover:rotate-180">
                ◈
              </span>{" "}
              Tyler Canto
            </h1>
            <p className="text-sm text-zinc-500">
              Infrastructure • Backup • Cybersecurity
            </p>
          </div>

          <nav className="hidden md:flex gap-8 text-sm text-zinc-400">
            <a href="#sobre" className="hover:text-[#470000] transition">
              Sobre
            </a>
            <a href="#skills" className="hover:text-[#470000] transition">
              Skills
            </a>
            <a href="#projetos" className="hover:text-[#470000] transition">
              Projetos
            </a>
            <a href="#contato" className="hover:text-[#470000] transition">
              Contato
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#470000]/40 bg-[#470000]/10 mb-10">
          <span className="text-[#470000] animate-pulse">◈</span>
          <span className="text-sm text-zinc-300">
            Enterprise Infrastructure Specialist
          </span>
        </div>

        <h2 className="text-5xl md:text-7xl font-black leading-tight">
          Infraestrutura
          <span className="block text-[#470000]">Backup Enterprise</span>
          Cybersecurity
        </h2>

        <p className="max-w-3xl mx-auto mt-8 text-lg text-zinc-400 leading-relaxed">
          Profissional focado em infraestrutura corporativa, soluções de backup,
          virtualização, servidores, redes, monitoramento e segurança da
          informação.
        </p>

        <div className="flex flex-wrap justify-center gap-5 mt-10">
          <button
            onClick={() => handleExternalLink("https://github.com/tylercanto")}
            className="px-8 py-4 rounded-xl bg-[#470000] hover:bg-[#700000] transition font-semibold cursor-pointer"
          >
            GitHub
          </button>
          <button
            onClick={() => handleExternalLink("https://www.linkedin.com/in/tyler-canto/")}
            className="px-8 py-4 rounded-xl border border-[#470000]/40 hover:bg-[#470000]/10 transition cursor-pointer"
          >
            LinkedIn
          </button>
          <button
            onClick={() => handleExternalLink("https://projetos-mu-rose.vercel.app/#projetos")}
            className="px-8 py-4 rounded-xl border border-zinc-700 hover:border-[#470000] transition cursor-pointer"
          >
            Projetos
          </button>
        </div>
      </section>

      {/* SOBRE MIM */}
      <section id="sobre" className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="rounded-[32px] border border-[#470000]/30 bg-[#111111]/80 p-10">
          <h2 className="text-4xl md:text-5xl font-black text-center">
            Sobre Mim
          </h2>

          <p className="max-w-4xl mx-auto mt-8 text-center text-zinc-400 text-lg leading-relaxed">
            Profissional de Tecnologia da Informação com experiência em
            infraestrutura, redes, backup corporativo e segurança. Atualmente
            atuando em ambiente NOC com monitoramento, troubleshooting e
            suporte de redes.
            <br />
            <br />
            Possuo experiência anterior com infraestrutura corporativa,
            servidores Linux e Windows, soluções de backup, virtualização e
            projetos voltados para disponibilidade e proteção de dados.
          </p>

          <div className="grid md:grid-cols-4 gap-5 mt-12">
            {[
              "Backup Enterprise",
              "Datacenter",
              "Cybersecurity",
              "Infraestrutura",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#ff0033]/30 bg-black/50 p-5 text-center hover:border-[#470000] transition"
              >
                <span className="text-[#ff0033]">◈</span>
                <p className="mt-2 text-zinc-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROFESSIONAL FOCUS */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black">Professional Focus</h2>
          <p className="text-zinc-500 mt-4">
            Áreas de atuação e conhecimento técnico
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Administração de infraestrutura corporativa",
            "Backup Enterprise e Disaster Recovery",
            "Virtualização e ambientes críticos",
            "Redes corporativas e troubleshooting",
            "Cloud, Datacenter e alta disponibilidade",
            "Cybersegurança e hardening de ambientes",
            "Administração Linux e Windows Server",
            "Monitoramento e suporte técnico",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-4 rounded-2xl border border-[#470000]/30 bg-[#111111] p-6 hover:border-[#470000] transition"
            >
              <span className="text-[#ff0033] text-xl transition-transform duration-500 hover:rotate-180">
                ◈
              </span>
              <span className="text-zinc-300">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* BACKUP STACK */}
      <section id="skills" className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black">
            Enterprise Backup Stack
          </h2>
          <p className="text-zinc-500 mt-4">
            Soluções utilizadas em ambientes corporativos
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { name: "Bacula", desc: "Backup Open Source Enterprise" },
            { name: "Veeam", desc: "Proteção de VMs e dados corporativos" },
            { name: "Acronis", desc: "Ciberproteção integrada" },
            { name: "Storage", desc: "Armazenamento e retenção de dados" },
          ].map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-[#ff0033]/30 bg-black p-6 text-center hover:border-[#470000] transition"
            >
              <span className="block text-[#ff0033] text-2xl mb-3">◈</span>
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="mt-2 text-sm text-zinc-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VIRTUALIZATION & SERVERS */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black">
            Virtualization &amp; Servers
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-5">
          {["Proxmox VE", "Hyper-V", "Linux", "Windows Server", "Docker"].map(
            (item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#ff0033]/30 bg-black p-6 text-center text-zinc-300 hover:text-white hover:border-[#470000] transition"
              >
                <span className="block text-[#ff0033] text-xl mb-3">◈</span>
                {item}
              </div>
            )
          )}
        </div>
      </section>

      {/* INFRASTRUCTURE & NETWORKING */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black">
            Infrastructure &amp; Networking
          </h2>
          <p className="text-zinc-500 mt-4">
            Redes, conectividade e segurança de ambientes
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-5">
          {["Mikrotik", "VPN", "Firewall", "Datacenter", "Cloud"].map(
            (item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#ff0033]/30 bg-[#111111] p-6 text-center hover:-translate-y-2 hover:border-[#ff0033] transition-all"
              >
                <span className="block text-[#ff0033] text-2xl mb-3">◈</span>
                <p className="text-zinc-300">{item}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black">
            Certifications &amp; Learning
          </h2>
          <p className="text-zinc-500 mt-4">
            Formação contínua em tecnologia e segurança
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Cisco Networking Academy",
              items:
                "Introduction to Cybersecurity • Networking Learn-A-Thon 2025",
            },
            {
              title: "Acronis",
              items: "Intro to Cyber Protect Cloud • BDR Basic Course",
            },
            {
              title: "Fortinet",
              items: "Estudos em segurança de redes e soluções FortiGate",
            },
            {
              title: "Linux Administration",
              items:
                "Administração de servidores Linux e ambientes corporativos",
            },
          ].map((cert) => (
            <div
              key={cert.title}
              className="rounded-3xl border border-[#470000]/30 bg-[#111111] p-8 hover:border-[#470000] transition"
            >
              <h3 className="text-xl font-bold text-[#ff0033]">
                ◈ {cert.title}
              </h3>
              <p className="mt-4 text-zinc-400 leading-relaxed">{cert.items}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projetos" className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black">Projects / Labs</h2>
          <p className="text-zinc-500 mt-4">
            Projetos de infraestrutura e ambientes de laboratório
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-[32px] border border-[#470000]/30 bg-[#111111] p-8 hover:-translate-y-3 hover:border-[#470000] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#470000]/20 border border-[#470000]/40 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <span className="text-[#ff0033] text-3xl">◈</span>
              </div>

              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-zinc-400 mt-5 leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-14">
          <button
            onClick={() => handleExternalLink("https://github.com/tylercanto")}
            className="px-8 py-4 rounded-xl border border-[#470000] text-[#ff0033] hover:bg-[#470000] hover:text-white transition cursor-pointer"
          >
            ◈ Ver todos os projetos no GitHub
          </button>
        </div>
      </section>

      {/* TERMINAL */}
      <section id="terminal" className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black">Interactive Console</h2>
          <p className="text-zinc-500 mt-4">
            Explore meu portfólio utilizando comandos
          </p>
        </div>

        <div className="rounded-[32px] border border-[#470000]/40 bg-black overflow-hidden shadow-[0_0_60px_rgba(255,0,51,0.35)]">
          {/* TERMINAL HEADER */}
          <div className="flex items-center gap-3 px-6 py-4 border-b border-[#470000]/30">
            <span className="w-3 h-3 rounded-full bg-red-600" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-600" />
            <span className="ml-4 text-zinc-500 text-sm">
              visitor@datacenter:~
            </span>
          </div>

          {/* TERMINAL BODY */}
          <div className="p-8 font-mono text-sm min-h-[450px] flex flex-col">
            <div
              ref={terminalBodyRef}
              className="text-[#ff0033] whitespace-pre-wrap leading-8 font-medium flex-1 overflow-auto max-h-[400px]"
            >
              {terminalHistory.map((line, index) => (
                <p
                  key={`${index}-${line}`}
                  className="drop-shadow-[0_0_8px_rgba(255,0,51,0.8)]"
                >
                  {line}
                </p>
              ))}
            </div>

            <form onSubmit={executeCommand} className="flex items-center gap-3 mt-6">
              <span className="text-[#ff0033] font-bold drop-shadow-[0_0_8px_rgba(255,0,51,0.8)]">
                visitor@datacenter:$
              </span>
              <input
                ref={inputRef}
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                className="flex-1 bg-transparent outline-none text-white caret-[#ff0033]"
                placeholder="Digite um comando..."
                aria-label="Comando do terminal"
                autoComplete="off"
              />
            </form>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black">
            Experiência Profissional
          </h2>
          <p className="text-zinc-500 mt-4">
            Minha trajetória na área de tecnologia
          </p>
        </div>

        <div className="space-y-8">
          {timeline.map((item) => (
            <div
              key={item.company}
              className="rounded-3xl border border-[#470000]/30 bg-[#111111] p-8 hover:border-[#470000] transition"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-bold">{item.role}</h3>
                  <p className="text-[#470000] mt-2 font-semibold">
                    ◈ {item.company}
                  </p>
                </div>
                <span className="text-zinc-500">{item.period}</span>
              </div>

              <p className="text-zinc-400 mt-6 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TECHNOLOGY OVERVIEW */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black">Technology Overview</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { title: "Backup", value: "Enterprise" },
            { title: "Virtualização", value: "Proxmox / Hyper-V" },
            { title: "Sistemas", value: "Linux / Windows" },
            { title: "Segurança", value: "Firewall / VPN" },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-[#470000]/30 bg-black p-8 text-center"
            >
              <span className="block text-[#ff0033] text-3xl mb-4">◈</span>
              <h3 className="font-bold text-xl">{item.title}</h3>
              <p className="mt-3 text-zinc-500">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INFRASTRUCTURE STATUS */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-24">
        <div className="rounded-[32px] border border-[#ff0033]/30 bg-[#111111] p-10">
          <h2 className="text-4xl font-black text-center">
            Infrastructure Status
          </h2>

          <div className="grid md:grid-cols-4 gap-5 mt-10">
            {[
              "Datacenter ONLINE",
              "Backup HEALTHY",
              "VPN STABLE",
              "Firewall SECURED",
            ].map((status) => (
              <div
                key={status}
                className="rounded-2xl border border-[#ff0033]/40 p-5 text-center text-sm text-zinc-300"
              >
                <span className="text-[#ff0033]">◈</span>
                <p className="mt-2">{status}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contato" className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <div className="rounded-[36px] border border-[#470000]/30 bg-[#111111] p-10 md:p-14">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-black">Contato</h2>
            <p className="text-zinc-500 mt-5 text-lg">
              Disponível para projetos de infraestrutura, backup e tecnologia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="rounded-3xl border border-[#470000]/30 bg-black p-6 text-center hover:border-[#470000] transition">
              <span className="text-[#470000] text-3xl">◈</span>
              <h3 className="mt-4 font-bold">E-mail</h3>
              <a
                href="mailto:tylercanto23@gmail.com"
                className="text-zinc-400 mt-3 block break-all hover:text-[#700000] transition"
              >
                tylercanto23@gmail.com
              </a>
            </div>

            <div className="rounded-3xl border border-[#470000]/30 bg-black p-6 text-center hover:border-[#470000] transition">
              <span className="text-[#700000] text-3xl">◈</span>
              <h3 className="mt-4 font-bold">WhatsApp</h3>
              <p className="text-zinc-400 mt-3">(37) 99121-1749</p>
            </div>

            <div className="rounded-3xl border border-[#470000]/30 bg-black p-6 text-center hover:border-[#470000] transition">
              <span className="text-[#700000] text-3xl">◈</span>
              <h3 className="mt-4 font-bold">LinkedIn</h3>
              <button
                onClick={() => handleExternalLink("https://www.linkedin.com/in/tyler-canto/")}
                className="text-zinc-400 mt-3 block hover:text-[#700000] transition cursor-pointer"
              >
                /in/tyler-canto
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-12">
            <button
  onClick={() => handleExternalLink("https://github.com/tylercanto")}
>
  ◈ GitHub
</button>
            <button
              onClick={() => handleExternalLink("https://projetos-mu-rose.vercel.app/#projetos")}
              className="px-8 py-4 rounded-xl bg-[#470000] hover:bg-[#700000] transition cursor-pointer"
            >
              ◈ Projetos
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-[#470000]/30 py-10 text-center">
        <p className="text-zinc-500">© {new Date().getFullYear()} Tyler Canto</p>
        <p className="text-sm text-zinc-600 mt-2">
          Infrastructure • Backup • Cybersecurity
        </p>
      </footer>
    </main>
  );
}