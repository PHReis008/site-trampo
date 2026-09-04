'use client'

import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const links = [['Sobre','#sobre'],['Atuação','#atuacao'],['Equipe','#equipe'],['Artigos','#artigos'],['Contato','#contato']]
export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--line)]/70 bg-[#f6f5f2]/95 backdrop-blur-md">
    <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-10">
      <a href="#inicio" className="flex items-center gap-3" aria-label="Almeida e Torres, início"><span className="flex size-9 items-center justify-center border border-[var(--gold)] font-serif text-xl text-[var(--gold)]">A</span><span className="font-serif text-lg font-semibold tracking-wide text-[var(--navy)]">ALMEIDA <span className="text-[var(--gold)]">&</span> TORRES</span></a>
      <nav className="hidden items-center gap-7 md:flex">{links.map(([label,href]) => <a key={href} href={href} className="text-xs font-semibold uppercase tracking-[.13em] text-[var(--muted)] transition-colors hover:text-[var(--navy)]">{label}</a>)}<a href="https://wa.me/5511999990000?text=Olá,%20gostaria%20de%20falar%20com%20o%20escritório." className="flex items-center gap-1 bg-[var(--navy)] px-4 py-3 text-xs font-semibold uppercase tracking-[.1em] text-[#f6f5f2] transition-colors hover:bg-[var(--gold)]">Fale conosco <ArrowUpRight size={15}/></a></nav>
      <button className="md:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Fechar menu' : 'Abrir menu'}>{open ? <X/> : <Menu/>}</button>
    </div>
    {open && <nav className="flex flex-col gap-5 border-t border-[var(--line)] bg-[#f6f5f2] px-5 py-6 md:hidden">{links.map(([label,href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="text-sm font-semibold uppercase tracking-[.13em] text-[var(--navy)]">{label}</a>)}<a href="https://wa.me/5511999990000" className="flex w-fit items-center gap-2 bg-[var(--navy)] px-4 py-3 text-xs font-semibold uppercase tracking-[.1em] text-[#f6f5f2]">Fale conosco <ArrowUpRight size={15}/></a></nav>}
  </header>
}
