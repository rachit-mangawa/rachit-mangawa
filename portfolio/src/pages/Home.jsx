import React from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import { useScrollToHash } from '../hooks/useScrollToHash';
import { GitPullRequest } from '@phosphor-icons/react/GitPullRequest';
import { ArrowUpRight } from '@phosphor-icons/react/ArrowUpRight';
import aadhaarLogo from '../assets/aadhaar-logo.png';
import data from '../data.json';
import SkillsSection from '../components/SkillsSection';
import { CodeforcesIcon, LeetCodeIcon } from '../components/BrandIcons';
import { TensorFlowIcon, TechTag } from '../components/SkillIcons';
import Hero from '../components/Hero';
import StickyStage from '../components/StickyStage';

export default function Home() {
  useReveal();
  useScrollToHash();

  const currentInternship = data.experience[0];
  const featuredProjects = data.projects;

  return (
    <main
      id="main-content"
      tabIndex="-1"
      className="relative z-10 w-full overflow-hidden outline-none"
    >
      <Hero />

      {/* Section 1 (#featured) */}
      <StickyStage
        id="featured"
        minHeight="min-h-0"
        className="z-10 border-t border-white/10 py-16 sm:py-24 md:py-28 scroll-mt-14"
      >
        <div className="flex flex-col gap-6">
          <div className="reveal">
            <h2 className="font-serif text-[32px] min-[400px]:text-[40px] sm:text-[54px] md:text-[68px] lg:text-[78px] font-normal tracking-[-0.03em] leading-[1.02] sm:leading-[0.96] text-white">
              Featured Projects<span className="text-white/30 not-italic font-serif">.</span>
            </h2>
          </div>

          <div className="border-y border-white/10 divide-y divide-white/10 reveal reveal-delay-1">
            {featuredProjects.map((project) => (
              <div
                key={project.number}
                className="group relative flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-6 py-4 sm:py-5 md:py-6 px-2 sm:px-4 -mx-2 sm:-mx-4 transition-colors hover:bg-white/[0.03]"
              >
                <div className="flex items-baseline gap-4 sm:gap-6 md:gap-8 min-w-0">
                  <span className="font-mono text-xs sm:text-sm text-white/60 group-hover:text-white transition-colors shrink-0 tabular-nums">
                    {project.number}
                  </span>

                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 min-w-0">
                    <Link
                      to="/projects"
                      className="font-serif text-lg sm:text-xl md:text-2xl font-medium tracking-tight text-white group-hover:text-white/90 transition-colors after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40"
                    >
                      {project.title}
                    </Link>
                    <span className="text-xs sm:text-sm text-white/60 font-mono hidden md:inline">
                      — {project.tagline}
                    </span>
                  </div>
                </div>

                <div className="flex items-baseline justify-between sm:justify-end gap-4 shrink-0 relative z-10 pl-8 sm:pl-0">
                  <span className="font-mono text-[11px] sm:text-xs text-white/75 group-hover:text-white transition-colors tabular-nums">
                    {project.homeMetric}
                  </span>

                  <div className="flex items-center gap-3 font-mono text-xs text-white/70">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40 rounded-xs"
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <span>Demo</span>
                        <ArrowUpRight size={11} className="shrink-0" />
                      </a>
                    )}
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40 rounded-xs"
                        aria-label={`Source code for ${project.title}`}
                      >
                        <span>Code</span>
                        <ArrowUpRight size={11} className="shrink-0" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-end">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-white/60 hover:text-white transition-colors py-2"
            >
              <span>Explore full project architectures</span>
              <ArrowUpRight
                size={13}
                weight="bold"
                className="shrink-0 text-white/60 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150"
              />
            </Link>
          </div>
        </div>
      </StickyStage>

      {/* Section 2 (#experience) */}
      <StickyStage
        id="experience"
        minHeight="min-h-0"
        className="z-10 border-t border-white/10 py-16 sm:py-24 md:py-28 scroll-mt-14"
      >
        <div className="flex flex-col gap-8">
          <div className="reveal">
            <h2 className="font-serif text-[32px] min-[400px]:text-[40px] sm:text-[54px] md:text-[68px] lg:text-[78px] font-normal tracking-[-0.03em] leading-[1.02] sm:leading-[0.96] text-white mb-4">
              Experience &amp; Impact<span className="text-white/30 not-italic font-serif">.</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/70 font-light leading-relaxed max-w-2xl mb-6">
              Engineering air-gapped document intelligence systems and high-throughput telemetry data pipelines across 4.2M+ records.
            </p>

            <Link
              to="/experience"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-white/70 hover:text-white transition-colors shrink-0 py-2"
            >
              <span>View full engineering deep-dives</span>
              <ArrowUpRight
                size={13}
                weight="bold"
                className="shrink-0 text-white/60 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150"
              />
            </Link>
          </div>

          <div className="relative pl-8 sm:pl-10 md:pl-12 border-l border-white/10 ml-4 sm:ml-6 md:ml-7 reveal reveal-delay-1">
            <div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden bg-white border-4 border-[#050505] flex items-center justify-center">
              <img src={aadhaarLogo} alt="UIDAI Aadhaar Logo" className="object-contain w-full h-full p-1.5 sm:p-2 md:p-3" />
            </div>

            <div className="block text-left max-w-4xl mb-8 sm:mb-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-3">
                <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-white">
                  {currentInternship.company}
                </h3>
                <span className="font-mono text-xs uppercase tracking-widest text-white/60 shrink-0 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/10">
                  {currentInternship.date}
                </span>
              </div>

              <div className="text-sm md:text-base font-mono text-white/70 mb-6 font-medium">
                {currentInternship.role}
              </div>

              <ul className="space-y-4 mb-6">
                <li className="text-sm sm:text-base font-light text-white/85 leading-relaxed flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60 shrink-0 mt-2.5" />
                  <span>
                    Built an <span className="text-white font-medium">offline OCR and hybrid search pipeline</span> (FAISS + BM25 with cross-encoder reranking) for 12 Indian languages.
                    Kept memory under 16GB RAM on CPU machines by running quantized models sequentially, and added a verification tool for human review.
                  </span>
                </li>
                <li className="text-sm sm:text-base font-light text-white/85 leading-relaxed flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60 shrink-0 mt-2.5" />
                  <span>
                    Wrote an async ETL pipeline that loads 50MB workbooks (100k+ rows) into <span className="text-white font-medium">SQLite WAL in 5 to 15s</span>, indexing <span className="text-white font-medium">4.2M+ telemetry records</span> with row-level access control for over 1,000 users.
                  </span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {currentInternship.tags.map((tag) => (
                  <TechTag key={tag} name={tag} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </StickyStage>

      {/* Section 3 (#open-source) */}
      <StickyStage
        id="open-source"
        minHeight="min-h-0"
        className="z-10 border-t border-white/10 py-16 sm:py-24 md:py-28 scroll-mt-14"
      >
        <div className="max-w-4xl">
          <div className="mb-8 sm:mb-12 reveal">
            <h2 className="font-serif text-[32px] min-[400px]:text-[40px] sm:text-[54px] md:text-[68px] lg:text-[78px] font-normal tracking-[-0.03em] leading-[1.02] sm:leading-[0.96] text-white mb-4">
              Open Source<span className="text-white/30 not-italic font-serif">.</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/60 font-light leading-relaxed max-w-2xl">
              Upstream open-source contributions to machine learning core libraries.
            </p>
          </div>

          <div className="reveal reveal-delay-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <TensorFlowIcon size={28} className="text-white shrink-0" />
                <div>
                  <h3 className="font-serif text-2xl font-medium text-white">
                    {data.openSource.project}
                  </h3>
                  <span className="font-mono text-xs text-white/60 uppercase tracking-wider">
                    Merged Pull Request #{data.openSource.prNumber}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 font-mono text-xs">
                <a
                  href={data.openSource.prUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 hover:border-white/25 text-white/80 hover:text-white transition-colors"
                >
                  <GitPullRequest size={13} className="text-emerald-400" />
                  <span>PR #{data.openSource.prNumber}</span>
                  <ArrowUpRight size={11} className="shrink-0" />
                </a>
                <a
                  href={data.openSource.issueUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 hover:border-white/25 text-white/80 hover:text-white transition-colors"
                >
                  <span>Issue #{data.openSource.issueNumber}</span>
                  <ArrowUpRight size={11} className="shrink-0" />
                </a>
              </div>
            </div>

            <p className="text-sm sm:text-base font-light text-white/85 leading-relaxed mb-6">
              Diagnosed and resolved a mathematical{' '}
              <span className="text-white font-medium">autodiff divergence</span> in TensorFlow Core's
              reverse-mode gradient computation for Bessel functions. Patched both the C++ kernel boundary and
              Python derivative definition in{' '}
              <code className="font-mono text-xs text-white/90 bg-white/5 px-1.5 py-0.5 rounded-sm">
                math_grad.py
              </code>
              , ensuring numerical stability near asymptotic roots.
            </p>

            <div className="my-6 rounded-lg border border-white/10 bg-white/[0.02] p-4 font-mono text-xs text-white/80 overflow-x-auto">
              <div className="flex items-center justify-between text-white/60 pb-2 mb-3 border-b border-white/5 text-[11px]">
                <span>tensorflow/python/ops/math_grad.py</span>
                <span className="text-emerald-400/80">patch applied</span>
              </div>
              <pre className="text-white/85 leading-relaxed font-mono">
                <code>
                  <span className="text-rose-400/80">- return grad * (bessel_i1(x) / x)</span>{'\n'}
                  <span className="text-emerald-400/80">+ return grad * tf.where(x == 0.0, 0.5, bessel_i1(x) / x)</span>
                </code>
              </pre>
            </div>

            <div className="flex flex-wrap gap-2">
              {data.openSource.tags.map((tag) => (
                <TechTag key={tag} name={tag} />
              ))}
            </div>
          </div>
        </div>
      </StickyStage>

      {/* Section 4 (#skills) */}
      <section id="skills" className="relative z-10 w-full border-t border-white/10 pt-16 sm:pt-24 md:pt-28 scroll-mt-14">
        <SkillsSection />
      </section>

      {/* Section 5 (#achievements) */}
      <StickyStage
        id="achievements"
        minHeight="min-h-0"
        className="z-10 border-t border-white/10 py-16 sm:py-24 md:py-28 scroll-mt-14"
      >
        <div className="flex flex-col gap-6">
          <div className="reveal">
            <h2 className="font-serif text-[32px] min-[400px]:text-[40px] sm:text-[54px] md:text-[68px] lg:text-[78px] font-normal tracking-[-0.03em] leading-[1.02] sm:leading-[0.96] text-white mb-2">
              Achievements<span className="text-white/45 not-italic font-serif">.</span>
            </h2>
            <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed max-w-xl">
              Competitive algorithmic ratings and contest benchmarks across global problem archives.
            </p>
          </div>

          {/* Straight-Line Metric Ledger */}
          <div className="border-y border-white/10 divide-y divide-white/10 reveal reveal-delay-1">
            {/* Codeforces */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-6 group py-4 sm:py-5 px-2 sm:px-4 -mx-2 sm:-mx-4 transition-colors hover:bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <CodeforcesIcon size={18} className="text-white/80 shrink-0" />
                <span className="font-medium text-white/90 text-base sm:text-lg">Codeforces</span>
                <a
                  href={data.personal.codeforces}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/badge inline-flex items-center gap-1.5 text-[11px] sm:text-xs uppercase tracking-[0.12em] font-semibold text-white/75 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-150 ml-1 font-mono px-2.5 py-1 rounded-sm bg-white/5 border border-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40 active:scale-[0.98]"
                >
                  <span>@{data.personal.codeforcesHandle}</span>
                  <ArrowUpRight size={12} className="shrink-0 text-white/60 group-hover/badge:text-white transition-colors duration-150" />
                </a>
              </div>

              <div className="flex items-baseline sm:justify-end gap-2.5 pl-7 sm:pl-0 font-mono">
                <span className="text-xs sm:text-sm tracking-tight">
                  <span className="text-white/50">[</span>
                  <span className="text-[#01bdb2] font-medium">{data.ratings.codeforces.rank}</span>
                  <span className="text-white/50">]</span>
                </span>
                <span className="text-[#01bdb2] tabular-nums text-sm sm:text-base font-semibold">{data.ratings.codeforces.rating}</span>
                <span className="text-[10px] uppercase tracking-wider text-white/60 font-mono">max</span>
              </div>
            </div>

            {/* LeetCode */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-6 group py-4 sm:py-5 px-2 sm:px-4 -mx-2 sm:-mx-4 transition-colors hover:bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <LeetCodeIcon size={18} className="text-white/80 shrink-0" />
                <span className="font-medium text-white/90 text-base sm:text-lg">LeetCode</span>
                <a
                  href={data.personal.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/badge inline-flex items-center gap-1.5 text-[11px] sm:text-xs uppercase tracking-[0.12em] font-semibold text-white/75 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-150 ml-1 font-mono px-2.5 py-1 rounded-sm bg-white/5 border border-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40 active:scale-[0.98]"
                >
                  <span>@{data.personal.leetcodeHandle}</span>
                  <ArrowUpRight size={12} className="shrink-0 text-white/60 group-hover/badge:text-white transition-colors duration-150" />
                </a>
              </div>

              <div className="flex items-baseline sm:justify-end gap-2.5 pl-7 sm:pl-0 font-mono">
                <span className="text-xs sm:text-sm tracking-tight">
                  <span className="text-white/50">[</span>
                  <span className="text-[#ffa116] font-medium">{data.ratings.leetcode.rank}</span>
                  <span className="text-white/50">]</span>
                </span>
                <span className="text-white/90 tabular-nums text-sm sm:text-base font-semibold">{data.ratings.leetcode.rating}</span>
                <span className="text-[10px] uppercase tracking-wider text-white/60 font-mono">max</span>
              </div>
            </div>

            {/* Contest Performance */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-6 group py-4 sm:py-5 px-2 sm:px-4 -mx-2 sm:-mx-4 transition-colors hover:bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <LeetCodeIcon size={18} className="text-white/80 shrink-0" />
                <span className="font-medium text-white/90 text-base sm:text-lg truncate">LeetCode {data.ratings.leetcode.contest}</span>
                <a
                  href={data.ratings.leetcode.contestUrl || "https://leetcode.com/contest/biweekly-contest-190/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/badge inline-flex items-center gap-1.5 text-[11px] sm:text-xs uppercase tracking-[0.12em] font-semibold text-white/75 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-150 ml-1 font-mono px-2.5 py-1 rounded-sm bg-white/5 border border-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40 active:scale-[0.98]"
                >
                  <span>Contest Page</span>
                  <ArrowUpRight size={12} className="shrink-0 text-white/60 group-hover/badge:text-white transition-colors duration-150" />
                </a>
              </div>

              <div className="flex items-baseline sm:justify-end gap-2.5 pl-7 sm:pl-0 font-mono">
                <span className="text-xs sm:text-sm tracking-tight">
                  <span className="text-white/50">[</span>
                  <span className="text-[#ffa116] font-medium">Top {data.ratings.leetcode.topPercent}%</span>
                  <span className="text-white/50">]</span>
                </span>
                <span className="text-white/90 tabular-nums text-sm sm:text-base font-semibold">{data.ratings.leetcode.globalRank}</span>
                <span className="text-white/60 text-xs">/ {data.ratings.leetcode.totalParticipants.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </StickyStage>
    </main>
  );
}
