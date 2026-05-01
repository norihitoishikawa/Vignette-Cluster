import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Mail, ArrowRight, Wine, Users, BookOpen, Sparkles } from 'lucide-react';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <motion.div 
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="text-[10px] uppercase tracking-[0.2em] text-wine font-bold mb-8 flex items-center gap-4"
  >
    <div className="w-10 h-[1px] bg-wine" />
    {children}
  </motion.div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const wineOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.4]);

  return (
    <div className="min-h-screen font-sans selection:bg-wine/10 selection:text-wine overflow-x-hidden">
      {/* Sidebar Label & Ornament */}
      <div className="fixed left-10 bottom-10 z-20 pointer-events-none hidden lg:block">
        <div className="vertical-rl rotate-180 text-[10px] uppercase tracking-[0.3em] text-ink/40 font-serif">
          ESTABLISHED IN JAPAN &bull; SERENDIPITY ORIENTED
        </div>
      </div>
      <div className="fixed left-[60px] top-1/2 -translate-y-1/2 w-[1px] h-32 ornament-line z-10 hidden lg:block" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-[60px] flex justify-between items-center bg-white/80 backdrop-blur-sm">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-3 text-lg font-serif font-bold tracking-tight text-ink"
        >
          <div className="w-2 h-2 bg-wine rounded-full" />
          Vignette & Cluster
        </motion.div>
        <div className="flex gap-8 text-[12px] uppercase tracking-widest font-medium text-ink">
          <a href="#philosophy" className="hover:text-wine transition-colors">Philosophy</a>
          <a href="#research" className="hover:text-wine transition-colors">Research</a>
          <a href="#join" className="hover:text-wine transition-colors">How to Join</a>
          <a href="#contact" className="hover:text-wine transition-colors">Connect</a>
          <a href="#about" className="text-ink font-bold hover:text-wine transition-colors border-l border-gray-100 pl-8">About</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 md:px-[60px] pt-[140px] bg-paper overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-[60px] items-center w-full">
          <div className="relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl md:text-3xl font-light tracking-[0.15em] mb-4"
            >
              ワインで繋がり、縁を醸す。
            </motion.h2>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl font-serif italic leading-[1.1] mb-8 text-balance text-ink"
            >
              Crafting Connections<br />
              Through Wine
            </motion.h1>
            
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-[1px] bg-wine mb-8"
            />
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm md:text-base text-gray-500 max-w-md leading-loose font-light"
            >
              効率よりも、偶然を。<br />
              計画よりも、直感を。<br />
              日本のワイン産業の研究と、一杯のワインが育むご縁。<br />
              予期せぬ化学反応を大切に。<br />
              ここから新しい物語が始まります。
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center"
          >
            <div className="w-[320px] h-[440px] border border-gray-100 abstract-arch overflow-hidden bg-gradient-to-br from-gray-50 to-gray-200/50 flex items-center justify-center group">
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 10, repeat: Infinity }}
              >
                <Wine size={120} strokeWidth={0.2} className="text-wine/40" />
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="absolute bottom-10 -right-4 lg:-right-10 w-[240px] glass p-8 shadow-sm z-10"
            >
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-wine mb-3">Research Topic</div>
              <p className="text-[13px] leading-relaxed text-ink">
                ワインが生む新たな価値創造のメカニズム。人と人の対話から導く知見。
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-32 px-6 md:px-24 bg-paper">
        <div className="max-w-6xl mx-auto">
          <SectionLabel>Our Philosophy</SectionLabel>
          
          <div className="grid md:grid-cols-2 gap-16 md:gap-32 items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-serif mb-12 leading-tight">
                「効率よりも、偶然を。<br />
                計画よりも、直感を。」
              </h2>
              <div className="space-y-6 text-gray-500 leading-loose font-light">
                <p>
                  日本各地に広がるワイナリー。そこには、ビジネスを超えた、人と土地の強い結びつきがあります。
                </p>
                <p>
                  私たちは、ワインという共通言語を通じて、人と人がフラットに出会い、予期せぬ化学反応が起こる場所を目指しています。
                </p>
                <p>
                  難しい理屈ではなく、一杯のワインから始まる「より良いご縁」が、結果として社会を少しずつ良くしていく。そんな軽やかな循環を、共に作りませんか。
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] bg-gray-50 overflow-hidden"
            >
              {/* Abstract shadow visual placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-wine/20 rounded-full animate-pulse" />
              <div className="absolute bottom-12 left-12 text-wine/40">
                <Wine size={120} strokeWidth={0.5} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research & Social Section */}
      <section id="research" className="py-32 bg-gray-50/50 px-6 md:px-24 border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <SectionLabel>Research & Social Impact</SectionLabel>
          
          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <motion.div 
              whileHover={{ x: 10 }}
              className="p-12 bg-white border border-gray-100 group transition-all"
            >
              <div className="w-12 h-12 flex items-center justify-center text-wine mb-8 bg-wine/5 rounded-full group-hover:bg-wine group-hover:text-white transition-colors">
                <BookOpen size={20} />
              </div>
              <h3 className="text-2xl font-serif mb-6">Research</h3>
              <p className="text-gray-500 leading-relaxed">
                日本や世界のワイナリーが地域でどう繋がり、成長しているのか。研究者としての知見を、コミュニティの皆さんにエッセンスとして共有します。
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ x: 10 }}
              className="p-12 bg-white border border-gray-100 group transition-all"
            >
              <div className="w-12 h-12 flex items-center justify-center text-wine mb-8 bg-wine/5 rounded-full group-hover:bg-wine group-hover:text-white transition-colors">
                <Users size={20} />
              </div>
              <h3 className="text-2xl font-serif mb-6">Social</h3>
              <p className="text-gray-500 leading-relaxed">
                人と人が出会うことは奇跡であり、最大の社会貢献であると考えています。偶然の繋がりから生まれるかけがえのない瞬間を大切に。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Join Section */}
      <section id="join" className="py-32 px-6 md:px-24">
        <div className="max-w-6xl mx-auto">
          <SectionLabel>How to Join</SectionLabel>
          
          <div className="grid md:grid-cols-3 gap-12 mt-16">
            {[
              { id: '01', title: '触れる', desc: 'ワイン産業にまつわる不定期のコラムを読む。', icon: <Sparkles size={18} /> },
              { id: '02', title: '集う', desc: 'ゆるやかなワイン交流会やさまざまなオフ会、産地へのフィールドワークに参加する。', icon: <Wine size={18} /> },
              { id: '03', title: '繋がる', desc: '偶然の出会いから、新しいプロジェクトや社会活動が始まる。', icon: <ArrowRight size={18} /> }
            ].map((step, idx) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative pt-12"
              >
                <div className="absolute top-0 left-0 text-5xl font-serif italic text-gray-100 -z-10">{step.id}</div>
                <div className="flex items-center gap-3 mb-6 text-wine">
                  {step.icon}
                  <h4 className="text-xl font-bold tracking-tight">{step.title}</h4>
                </div>
                <p className="text-gray-500 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vignettes Gallery */}
      <section className="py-32 px-6 md:px-[60px] bg-gray-50/30">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>Vignettes</SectionLabel>
          
          <div className="mt-16 columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {[
              { 
                url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800", 
                alt: "Morning Vineyard", 
                caption: "朝露に濡れる産地の静寂。",
                aspect: "aspect-[3/4]"
              },
              { 
                url: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800", 
                alt: "Wine Glasses", 
                caption: "対話から生まれる、予期せぬご縁。",
                aspect: "aspect-square"
              },
              { 
                url: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&q=80&w=800", 
                alt: "Winery Cellar", 
                caption: "時間が醸す、新たな化学反応。",
                aspect: "aspect-video"
              },
              { 
                url: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=800", 
                alt: "Red Wine Pour", 
                caption: "五感を研ぎ澄ます、一杯の思考。",
                aspect: "aspect-[3/4]"
              },
              { 
                url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800", 
                alt: "Japanese Landscape", 
                caption: "土地の記憶を、未来へ繋ぐ。",
                aspect: "aspect-square"
              }
            ].map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="break-inside-avoid group relative"
              >
                <div className={`overflow-hidden bg-gray-100 ${img.aspect} relative`}>
                  <img 
                    src={img.url} 
                    alt={img.alt} 
                    className="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-wine/0 group-hover:bg-wine/5 transition-colors duration-500" />
                </div>
                <div className="mt-4">
                  <p className="text-[12px] text-ink/60 font-light tracking-wider italic">{img.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership/Contact Section */}
      <section id="contact" className="py-32 px-6 md:px-[60px] bg-paper relative overflow-hidden">
        <div className="max-w-7xl mx-auto border-t border-gray-100 pt-32">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <SectionLabel>Connect</SectionLabel>
              <div className="mb-16">
                <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">まずは一度、お話ししましょう。</h2>
                <p className="text-gray-500 leading-relaxed font-light">
                  あなたの物語をお聞かせください。
                  <br />
                  <span className="text-[11px] mt-4 block leading-relaxed opacity-70 font-sans">
                    *保険やマルチレベルマーケティングの勧誘など、当該コミュニティにとって不適切な行為と判断した場合は、強制的に不参加もしくは退場とさせていただきます。
                  </span>
                </p>
              </div>
            </div>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Name</label>
                  <input type="text" required className="w-full bg-transparent border-b border-gray-200 py-3 focus:outline-none focus:border-wine transition-colors" placeholder="お名前" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Email</label>
                  <input type="email" required className="w-full bg-transparent border-b border-gray-200 py-3 focus:outline-none focus:border-wine transition-colors" placeholder="メールアドレス" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Location</label>
                <select 
                  required 
                  className="w-full bg-transparent border-b border-gray-200 py-3 focus:outline-none focus:border-wine transition-colors appearance-none cursor-pointer text-gray-400"
                >
                  <option value="" disabled selected>在住の都道府県もしくは海外を選択してください</option>
                  <option value="北海道">北海道</option>
                  <option value="青森県">青森県</option>
                  <option value="岩手県">岩手県</option>
                  <option value="宮城県">宮城県</option>
                  <option value="秋田県">秋田県</option>
                  <option value="山形県">山形県</option>
                  <option value="福島県">福島県</option>
                  <option value="茨城県">茨城県</option>
                  <option value="栃木県">栃木県</option>
                  <option value="群馬県">群馬県</option>
                  <option value="埼玉県">埼玉県</option>
                  <option value="千葉県">千葉県</option>
                  <option value="東京都">東京都</option>
                  <option value="神奈川県">神奈川県</option>
                  <option value="新潟県">新潟県</option>
                  <option value="富山県">富山県</option>
                  <option value="石川県">石川県</option>
                  <option value="福井県">福井県</option>
                  <option value="山梨県">山梨県</option>
                  <option value="長野県">長野県</option>
                  <option value="岐阜県">岐阜県</option>
                  <option value="静岡県">静岡県</option>
                  <option value="愛知県">愛知県</option>
                  <option value="三重県">三重県</option>
                  <option value="滋賀県">滋賀県</option>
                  <option value="京都府">京都府</option>
                  <option value="大阪府">大阪府</option>
                  <option value="兵庫県">兵庫県</option>
                  <option value="奈良県">奈良県</option>
                  <option value="和歌山県">和歌山県</option>
                  <option value="鳥取県">鳥取県</option>
                  <option value="島根県">島根県</option>
                  <option value="岡山県">岡山県</option>
                  <option value="広島県">広島県</option>
                  <option value="山口県">山口県</option>
                  <option value="徳島県">徳島県</option>
                  <option value="香川県">香川県</option>
                  <option value="愛媛県">愛媛県</option>
                  <option value="高知県">高知県</option>
                  <option value="福岡県">福岡県</option>
                  <option value="佐賀県">佐賀県</option>
                  <option value="長崎県">長崎県</option>
                  <option value="熊本県">熊本県</option>
                  <option value="大分県">大分県</option>
                  <option value="宮崎県">宮崎県</option>
                  <option value="鹿児島県">鹿児島県</option>
                  <option value="沖縄県">沖縄県</option>
                  <option value="海外">海外</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Message</label>
                <textarea rows={4} required className="w-full bg-transparent border-b border-gray-200 py-3 focus:outline-none focus:border-wine transition-colors resize-none" placeholder="メッセージ（ご興味のある産地や分野など）" />
              </div>
              
              <div className="flex items-center gap-8">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-12 py-4 bg-ink text-white text-[12px] uppercase tracking-[0.2em] font-medium flex items-center gap-4 group"
                >
                  Send Message
                  <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 md:px-[60px] bg-paper border-t border-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionLabel>About</SectionLabel>
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-bold tracking-[0.2em] text-wine mb-2 uppercase">Founder</h3>
              <h2 className="text-3xl md:text-4xl font-serif mb-4">石川 徳仁</h2>
              <p className="text-gray-400 font-light tracking-widest text-xs uppercase mb-8">Norihito Ishikawa</p>
              
              <div className="space-y-4 text-gray-500 font-light leading-relaxed">
                <p>株式会社Hanaemi 代表取締役、書家。</p>
                <p>大学院修士課程にて日本のワイナリーの産業集積を研究中。</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid gap-12"
            >
              <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-6 border-b border-gray-100 pb-2">Interest</h4>
                  <p className="text-sm text-ink leading-loose font-light">
                    読書、ランニング・ジム、ワイン
                  </p>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-6 border-b border-gray-100 pb-2">Qualifications</h4>
                  <ul className="text-sm text-ink leading-loose font-light space-y-1">
                    <li>ワインエキスパート</li>
                    <li>宅地建物取引士</li>
                    <li>総合旅行業務取扱管理者</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50/50 p-10 border border-gray-100 italic relative">
                <div className="absolute -top-4 -left-4 text-wine/10">
                  <Sparkles size={48} strokeWidth={0.5} />
                </div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] text-wine font-bold mb-4">Message</h4>
                <p className="text-ink leading-relaxed font-light italic">
                  「実はワインに関してそんなに詳しくありません、、。むしろ教えてください。」
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 md:px-[60px] border-t border-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
          <div>
            <div className="flex items-center gap-3 text-lg font-serif font-bold tracking-tight text-ink mb-4">
              <div className="w-2 h-2 bg-wine rounded-full" />
              Vignette & Cluster
            </div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-gray-400">
              © 2026 Vignette & Cluster All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
