import React from 'react';
import { GithubLogo, LinkedinLogo, ArrowUpRight } from "@phosphor-icons/react";
import CopyEmailButton from './CopyEmailButton';
import { PORTFOLIO_CONTENT } from '../content';

const CURRENT_YEAR = new Date().getFullYear();

function KaggleLogo({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.246l-5.178-6.589-1.444 1.383v5.187c0 .164-.047.281-.141.351-.094.07-.234.105-.422.105H5.215c-.188 0-.328-.035-.422-.105-.094-.07-.141-.188-.141-.351V.352c0-.164.047-.281.141-.352C4.887 0 5.027 0 5.215 0h2.711c.188 0 .328 0 .422.07.094.071.141.188.141.352v14.473l6.234-6.199c.141-.14.305-.211.492-.211h3.28c.141 0 .235.047.282.141.047.094.023.187-.07.281l-6.726 6.518 6.984 8.152c.07.094.094.188.07.282z"/>
    </svg>
  );
}

function HuggingFaceLogo({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.025 1.13c-5.77 0-10.449 4.647-10.449 10.378 0 1.112.178 2.181.503 3.185.064-.222.203-.444.416-.577a.96.96 0 0 1 .524-.15c.293 0 .584.124.84.284.278.173.48.408.71.694.226.282.458.611.684.951v-.014c.017-.324.106-.622.264-.874s.403-.487.762-.543c.3-.047.596.06.787.203s.31.313.4.467c.15.257.212.468.233.542.01.026.653 1.552 1.657 2.54.616.605 1.01 1.223 1.082 1.912.055.537-.096 1.059-.38 1.572.637.121 1.294.187 1.967.187.657 0 1.298-.063 1.921-.178-.287-.517-.44-1.041-.384-1.581.07-.69.465-1.307 1.081-1.913 1.004-.987 1.647-2.513 1.657-2.539.021-.074.083-.285.233-.542.09-.154.208-.323.4-.467a1.08 1.08 0 0 1 .787-.203c.359.056.604.29.762.543s.247.55.265.874v.015c.225-.34.457-.67.683-.952.23-.286.432-.52.71-.694.257-.16.547-.284.84-.285a.97.97 0 0 1 .524.151c.228.143.373.388.43.625l.006.04a10.3 10.3 0 0 0 .534-3.273c0-5.731-4.678-10.378-10.449-10.378M8.327 6.583a1.5 1.5 0 0 1 .713.174 1.487 1.487 0 0 1 .617 2.013c-.183.343-.762-.214-1.102-.094-.38.134-.532.914-.917.71a1.487 1.487 0 0 1 .69-2.803m7.486 0a1.487 1.487 0 0 1 .689 2.803c-.385.204-.536-.576-.916-.71-.34-.12-.92.437-1.103.094a1.487 1.487 0 0 1 .617-2.013 1.5 1.5 0 0 1 .713-.174m-10.68 1.55a.96.96 0 1 1 0 1.921.96.96 0 0 1 0-1.92m13.838 0a.96.96 0 1 1 0 1.92.96.96 0 0 1 0-1.92M8.489 11.458c.588.01 1.965 1.157 3.572 1.164 1.607-.007 2.984-1.155 3.572-1.164.196-.003.305.12.305.454 0 .886-.424 2.328-1.563 3.202-.22-.756-1.396-1.366-1.63-1.32q-.011.001-.02.006l-.044.026-.01.008-.03.024q-.018.017-.035.036l-.032.04a1 1 0 0 0-.058.09l-.014.025q-.049.088-.11.19a1 1 0 0 1-.083.116 1.2 1.2 0 0 1-.173.18q-.035.029-.075.058a1.3 1.3 0 0 1-.251-.243 1 1 0 0 1-.076-.107c-.124-.193-.177-.363-.337-.444-.034-.016-.104-.008-.2.022q-.094.03-.216.087-.06.028-.125.063l-.13.074q-.067.04-.136.086a3 3 0 0 0-.135.096 3 3 0 0 0-.26.219 2 2 0 0 0-.12.121 2 2 0 0 0-.106.128l-.002.002a2 2 0 0 0-.09.132l-.001.001a1.2 1.2 0 0 0-.105.212q-.013.036-.024.073c-1.139-.875-1.563-2.317-1.563-3.203 0-.334.109-.457.305-.454m.836 10.354c.824-1.19.766-2.082-.365-3.194-1.13-1.112-1.789-2.738-1.789-2.738s-.246-.945-.806-.858-.97 1.499.202 2.362c1.173.864-.233 1.45-.685.64-.45-.812-1.683-2.896-2.322-3.295s-1.089-.175-.938.647 2.822 2.813 2.562 3.244-1.176-.506-1.176-.506-2.866-2.567-3.49-1.898.473 1.23 2.037 2.16c1.564.932 1.686 1.178 1.464 1.53s-3.675-2.511-4-1.297c-.323 1.214 3.524 1.567 3.287 2.405-.238.839-2.71-1.587-3.216-.642-.506.946 3.49 2.056 3.522 2.064 1.29.33 4.568 1.028 5.713-.624m5.349 0c-.824-1.19-.766-2.082.365-3.194 1.13-1.112 1.789-2.738 1.789-2.738s.246-.945.806-.858.97 1.499-.202 2.362c-1.173.864.233 1.45.685.64.451-.812 1.683-2.896 2.322-3.295s1.089-.175.938.647-2.822 2.813-2.562 3.244 1.176-.506 1.176-.506 2.866-2.567 3.49-1.898-.473 1.23-2.037 2.16c-1.564.932-1.686 1.178-1.464 1.53s3.675-2.511 4-1.297c.323 1.214-3.524 1.567-3.287 2.405.238.839 2.71-1.587 3.216-.642.506.946-3.49 2.056-3.522 2.064-1.29.33-4.568 1.028-5.713-.624"/>
    </svg>
  );
}

export default function Footer() {
  const data = PORTFOLIO_CONTENT;
  return (
    <footer className="w-full border-t border-white/5 py-12 md:py-16 bg-[#020202]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-10 md:gap-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-10 reveal">
          <div className="max-w-xl lg:max-w-2xl">
            <h2 className="font-serif text-4xl md:text-6xl font-medium tracking-tight text-white mb-3">Let's build.</h2>
            <p className="text-base md:text-lg text-white/40 font-light leading-relaxed">
              Open to new engineering challenges and systems collaboration.
            </p>
          </div>

          <div className="flex items-center justify-between w-full md:w-auto md:min-w-96 border-b border-white/20 pb-3 gap-6 group hover:border-white transition-colors">
            <a 
              href={`mailto:${data.personal.email}`} 
              className="flex items-center gap-3 text-white transition-colors"
            >
              <span className="text-xs md:text-sm font-bold tracking-widest uppercase">GET IN TOUCH</span>
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform opacity-50 group-hover:opacity-100" weight="bold" size={16} />
            </a>

            <CopyEmailButton email={data.personal.email} variant="compact" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-6 border-t border-white/10">
          <div className="text-white/40 text-xs font-bold tracking-widest uppercase">
            © {CURRENT_YEAR} {data.personal.name}
          </div>

          <div className="flex flex-wrap items-center gap-5 md:gap-7">
            <a href={data.personal.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white/50 hover:text-white transition-colors">
              <GithubLogo size={15} weight="fill" /> GITHUB
            </a>
            <a href={data.personal.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white/50 hover:text-white transition-colors">
              <LinkedinLogo size={15} weight="fill" /> LINKEDIN
            </a>
            <a href={data.personal.kaggle} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white/50 hover:text-white transition-colors">
              <KaggleLogo size={15} /> KAGGLE
            </a>
            <a href={data.personal.huggingface} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white/50 hover:text-white transition-colors">
              <HuggingFaceLogo size={15} /> HUGGING FACE
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

