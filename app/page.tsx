import { Github, MessageCircle, Code } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans selection:bg-[#2f81f7] selection:text-white py-16 px-4 sm:px-6">
      <main className="max-w-2xl mx-auto flex flex-col items-center">
        
        {/* Profile Picture with 4-Color Gradient Border */}
        <div 
          className="relative p-1 rounded-full shadow-xl mb-6"
          style={{ background: 'conic-gradient(from 315deg, #ea4335 0deg 90deg, #4285f4 90deg 180deg, #34a853 180deg 270deg, #fbbc04 270deg 360deg)' }}
        >
          <div className="w-32 h-32 rounded-full overflow-hidden border-[4px] border-[#0d1117] bg-[#0d1117]">
            <img
              src="https://github.com/sannnproject.png"
              alt="SAANNNDEC5TY"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name and Verified Badge */}
        <h1 className="text-2xl font-bold text-white flex items-center gap-2 mb-2">
          SAANNNDEC5TY
          <VerifiedBadge />
        </h1>
        
        {/* Bio */}
        <p className="text-[#8b949e] text-center mb-10 max-w-md">
          Software Engineer focusing on React & Next.js ecosystem. Building modern, high-performance web applications.
        </p>

        {/* Links / Actions (Linktree style) */}
        <div className="flex flex-wrap justify-center gap-3 w-full mb-14">
          <a 
            href="https://whatsapp.com/channel/0029Vb6ukqnHQbS4mKP0j80L"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-1.5 rounded-md bg-[#21262d] text-[#c9d1d9] hover:bg-[#30363d] transition-all border border-[#363b42] hover:border-[#8b949e] shadow-sm text-sm font-medium"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>

          <a 
            href="https://t.me/sannnforums"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-1.5 rounded-md bg-[#21262d] text-[#c9d1d9] hover:bg-[#30363d] transition-all border border-[#363b42] hover:border-[#8b949e] shadow-sm text-sm font-medium"
          >
            <TelegramIcon className="w-4 h-4" />
            Telegram
          </a>

          <a 
            href="https://www.tiktok.com/@sannforums"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-1.5 rounded-md bg-[#21262d] text-[#c9d1d9] hover:bg-[#30363d] transition-all border border-[#363b42] hover:border-[#8b949e] shadow-sm text-sm font-medium"
          >
            <TikTokIcon className="w-4 h-4" />
            TikTok
          </a>

          <a 
            href="https://github.com/sannnproject"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-1.5 rounded-md bg-[#21262d] text-[#c9d1d9] hover:bg-[#30363d] transition-all border border-[#363b42] hover:border-[#8b949e] shadow-sm text-sm font-medium"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>

          <a 
            href="https://lynk.id/sannnx"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-1.5 rounded-md bg-[#21262d] text-[#c9d1d9] hover:bg-[#30363d] transition-all border border-[#363b42] hover:border-[#8b949e] shadow-sm text-sm font-medium"
          >
            <img src="https://www.google.com/s2/favicons?domain=lynk.id&sz=32" alt="Lynk.id" className="w-4 h-4 rounded-sm" />
            Source Code
          </a>

          <a 
            href="https://tempel.in/view/u2aQkq"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-1.5 rounded-md bg-[#21262d] text-[#c9d1d9] hover:bg-[#30363d] transition-all border border-[#363b42] hover:border-[#8b949e] shadow-sm text-sm font-medium"
          >
            <Code className="w-4 h-4" />
            Archive Projects
          </a>
        </div>

        {/* Tech Stack */}
        <div className="w-full">
          <h2 className="text-lg font-semibold text-white mb-6 text-center border-b border-[#21262d] pb-4">
            Tech Stack
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Frontend */}
            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 shadow-sm">
              <h3 className="text-xs font-semibold text-[#8b949e] uppercase tracking-wider mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                <TechBadge src="https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
                <TechBadge src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
                <TechBadge src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
                <TechBadge src="https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
                <TechBadge src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
                <TechBadge src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
                <TechBadge src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
              </div>
            </div>

            {/* Backend */}
            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 shadow-sm">
              <h3 className="text-xs font-semibold text-[#8b949e] uppercase tracking-wider mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                <TechBadge src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
                <TechBadge src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
                <TechBadge src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI" />
                <TechBadge src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
                <TechBadge src="https://img.shields.io/badge/REST%20API-FF6C37?style=for-the-badge&logo=postman&logoColor=white" alt="REST API" />
              </div>
            </div>

            {/* Database & Services */}
            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 shadow-sm">
              <h3 className="text-xs font-semibold text-[#8b949e] uppercase tracking-wider mb-4">Database & Services</h3>
              <div className="flex flex-wrap gap-2">
                <TechBadge src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
                <TechBadge src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
                <TechBadge src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase" />
                <TechBadge src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
              </div>
            </div>

            {/* AI & ML */}
            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 shadow-sm">
              <h3 className="text-xs font-semibold text-[#8b949e] uppercase tracking-wider mb-4">AI & ML</h3>
              <div className="flex flex-wrap gap-2">
                <TechBadge src="https://img.shields.io/badge/Claude_API-D97757?style=for-the-badge&logo=anthropic&logoColor=white" alt="Claude API" />
                <TechBadge src="https://img.shields.io/badge/OpenAI_API-412991?style=for-the-badge&logo=openai&logoColor=white" alt="OpenAI API" />
                <TechBadge src="https://img.shields.io/badge/Gemini-8E75B2?style=for-the-badge&logo=google-gemini&logoColor=white" alt="Gemini" />
                <TechBadge src="https://img.shields.io/badge/LangChain-1C3C3C?style=for-the-badge&logo=langchain&logoColor=white" alt="LangChain" />
                <TechBadge src="https://img.shields.io/badge/Mastra-000000?style=for-the-badge" alt="Mastra" />
                <TechBadge src="https://img.shields.io/badge/RAG-000000?style=for-the-badge" alt="RAG" />
                <TechBadge src="https://img.shields.io/badge/ONNX-005CED?style=for-the-badge&logo=onnx&logoColor=white" alt="ONNX" />
                <TechBadge src="https://img.shields.io/badge/MCP_Servers-000000?style=for-the-badge" alt="MCP Servers" />
                <TechBadge src="https://img.shields.io/badge/MediaPipe-00B4D8?style=for-the-badge" alt="MediaPipe" />
                <TechBadge src="https://img.shields.io/badge/LiveKit-000000?style=for-the-badge" alt="LiveKit" />
                <TechBadge src="https://img.shields.io/badge/Embeddings-000000?style=for-the-badge" alt="Embeddings" />
              </div>
            </div>

            {/* Tools & Deployment */}
            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 shadow-sm">
              <h3 className="text-xs font-semibold text-[#8b949e] uppercase tracking-wider mb-4">Tools & Deployment</h3>
              <div className="flex flex-wrap gap-2">
                <TechBadge src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
                <TechBadge src="https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white" alt="VS Code" />
                <TechBadge src="https://img.shields.io/badge/Acode-5C2D91?style=for-the-badge" alt="Acode" />
                <TechBadge src="https://img.shields.io/badge/Termux-000000?style=for-the-badge&logo=termux&logoColor=white" alt="Termux" />
                <TechBadge src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux" />
                <TechBadge src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
                <TechBadge src="https://img.shields.io/badge/GitLab-330F63?style=for-the-badge&logo=gitlab&logoColor=white" alt="GitLab" />
                <TechBadge src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
              </div>
            </div>

          </div>
        </div>

        <GithubContributionGraph />

        <footer className="w-full mt-4 border-t border-[#21262d] pt-8 pb-4 text-center text-sm text-[#8b949e]">
          © {new Date().getFullYear()} SAANNNDECY. All rights reserved.
        </footer>
      </main>
    </div>
  );
}

function GithubContributionGraph() {
  const weeks = Array.from({ length: 52 });
  const days = Array.from({ length: 7 });
  const colors = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'];

  // Random color from the 4 shades of green to simulate an active "full ijo" graph
  const getRandomColor = () => {
    const r = Math.random();
    if (r < 0.1) return colors[0]; // 10% empty
    if (r < 0.3) return colors[1];
    if (r < 0.6) return colors[2];
    if (r < 0.85) return colors[3];
    return colors[4];
  };

  return (
    <div className="w-full mb-8 mt-12">
      <div className="flex justify-between items-end mb-4 px-1">
        <h2 className="text-xl text-[#c9d1d9] font-normal">
          2,458 contributions in the last year
        </h2>
        <span className="text-sm text-[#8b949e] cursor-pointer hover:text-[#58a6ff]">Contribution settings ▾</span>
      </div>
      <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 shadow-sm overflow-x-auto custom-scrollbar">
        <div className="flex">
          {/* Day Labels */}
          <div className="flex flex-col gap-[2px] text-[10px] text-[#8b949e] pr-2 pt-[18px]">
            <span className="h-[10px] leading-[10px]"></span>
            <span className="h-[10px] leading-[10px]">Mon</span>
            <span className="h-[10px] leading-[10px]"></span>
            <span className="h-[10px] leading-[10px]">Wed</span>
            <span className="h-[10px] leading-[10px]"></span>
            <span className="h-[10px] leading-[10px]">Fri</span>
            <span className="h-[10px] leading-[10px]"></span>
          </div>

          <div className="flex flex-col w-max">
            {/* Month Labels */}
            <div className="flex text-[10px] text-[#8b949e] mb-2">
               <div className="w-[56px]">Jan</div>
               <div className="w-[56px]">Feb</div>
               <div className="w-[56px]">Mar</div>
               <div className="w-[56px]">Apr</div>
               <div className="w-[56px]">May</div>
               <div className="w-[56px]">Jun</div>
               <div className="w-[56px]">Jul</div>
               <div className="w-[56px]">Aug</div>
               <div className="w-[56px]">Sep</div>
               <div className="w-[56px]">Oct</div>
               <div className="w-[56px]">Nov</div>
               <div className="w-[56px]">Dec</div>
            </div>

            {/* Grid */}
            <div className="flex gap-[3px]">
              {weeks.map((_, i) => (
                <div key={i} className="flex flex-col gap-[3px]">
                  {days.map((_, j) => (
                    <div 
                      key={j} 
                      className="w-[10px] h-[10px] rounded-[2px]" 
                      style={{ backgroundColor: getRandomColor() }}
                      title={`${Math.floor(Math.random() * 15) + 1} contributions on this day`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4 text-[11px] text-[#8b949e]">
          <span>Learn how we count contributions</span>
          <div className="flex items-center gap-1">
            <span>Less</span>
            <div className="w-[10px] h-[10px] rounded-[2px] bg-[#161b22] border border-[rgba(240,246,252,0.1)]"></div>
            <div className="w-[10px] h-[10px] rounded-[2px] bg-[#0e4429]"></div>
            <div className="w-[10px] h-[10px] rounded-[2px] bg-[#006d32]"></div>
            <div className="w-[10px] h-[10px] rounded-[2px] bg-[#26a641]"></div>
            <div className="w-[10px] h-[10px] rounded-[2px] bg-[#39d353]"></div>
            <span>More</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatBadge({ logo, name, percent, bg, text = 'white' }: { logo: string; name: string; percent: string; bg: string; text?: string }) {
  return (
    <div className="flex h-[32px] text-sm shadow-sm cursor-default hover:scale-105 transition-transform font-medium">
      <div className="bg-[#555555] text-[#ffffff] flex items-center gap-2 px-3 rounded-l-[3px]">
        <img src={logo} alt={name} className="h-4 w-4" />
        <span className="tracking-wide">{name}</span>
      </div>
      <div className="px-3 flex items-center rounded-r-[3px]" style={{ backgroundColor: bg, color: text }}>
        {percent}
      </div>
    </div>
  );
}

function TechBadge({ src, alt }: { src: string; alt: string }) {
  return (
    <img 
      src={src} 
      alt={alt} 
      className="h-[26px] rounded-[4px] shadow-sm hover:scale-105 transition-transform cursor-default opacity-90 hover:opacity-100" 
    />
  );
}

function VerifiedBadge() {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className="w-[22px] h-[22px] text-[#0095F6] shrink-0" 
      aria-label="Verified"
    >
      <path d="M22.5 12.5c0-1.58-.875-2.925-2.125-3.562v-1.938c0-1.65-1.35-3-3-3h-1.937C14.813 2.75 13.469 1.875 11.875 1.875S8.938 2.75 8.313 4H6.375c-1.65 0-3 1.35-3 3v1.938C2.125 9.575 1.25 10.92 1.25 12.5c0 1.58.875 2.925 2.125 3.562v1.938c0 1.65 1.35 3 3 3h1.937c.625 1.25 1.969 2.125 3.563 2.125s2.938-.875 3.563-2.125h1.937c1.65 0 3-1.35 3-3v-1.938c1.25-.637 2.125-1.982 2.125-3.562zM10.75 16.5l-3.75-3.75 1.063-1.063 2.687 2.688 6.188-6.188 1.062 1.063-7.25 7.25z"/>
    </svg>
  );
}

function TelegramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.233-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.432.895-.648 3.51-1.528 5.85-2.535 7.02-3.02 3.336-1.385 4.029-1.627 4.482-1.635z"/>
    </svg>
  );
}

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  );
}
