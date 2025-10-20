import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MicroscalersLanding() {
  return (
    <main className="min-h-screen bg-microscale-bg text-gray-100 font-mono flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="text-center py-24 px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl text-microscale-green font-bold mb-4">
          &gt; MICROSCALE OPS_
        </h1>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Independent owner-operators of AI-grade GPU nodes.<br/>
          <span className="text-microscale-silver">Verified. Brokered. Autonomous.</span>
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://discord.gg/" target="_blank" rel="noreferrer"
             className="bg-microscale-green hover:bg-green-500 text-black font-bold py-2 px-4 rounded-2xl shadow-md">
            JOIN THE NETWORK
          </a>
          <a href="#verify"
             className="bg-microscale-orange hover:bg-microscale-orangeDark text-black font-bold py-2 px-4 rounded-2xl shadow-md">
            VERIFY YOUR NODE
          </a>
          <a href="https://trustcat.ai" target="_blank" rel="noreferrer"
             className="border border-microscale-green text-microscale-green hover:bg-microscale-green/10 py-2 px-4 rounded-2xl">
            READ THE PLAYBOOK
          </a>
        </div>

        {/* subtle grid / glow */}
        <div className="mt-12 mx-auto h-24 w-72 blur-2xl bg-microscale-green/20 rounded-full"></div>
      </section>

      {/* Traits */}
      <section id="traits" className="grid md:grid-cols-3 gap-6 px-8 py-16 w-full max-w-6xl mx-auto">
        {[
          { icon: '🧠', title: 'Independent', desc: 'Own and operate your GPU fleet with full autonomy.' },
          { icon: '⚙️', title: 'Optimized', desc: 'Tuned for AI workloads, high efficiency, and reliability.' },
          { icon: '🔒', title: 'Verified', desc: 'Compute validated through CAT Chain proof-of-compute.' },
          { icon: '💼', title: 'Brokered', desc: 'Earn via proposal-driven STCL compute deals in USDC/CAT.' },
          { icon: '🐾', title: 'Community', desc: 'Open-source ethos guided by the R.A.V.E. creed.' },
          { icon: '📈', title: 'Transparent', desc: 'Uptime and performance logged for truth and trust.' },
        ].map((t, i) => (
          <div key={i}
               className="border border-microscale-green/40 rounded-2xl p-6 hover:border-microscale-green hover:shadow-[0_0_12px_#22C55E80] transition">
            <h3 className="text-2xl text-microscale-green mb-2">{t.icon} {t.title}</h3>
            <p className="text-gray-400">{t.desc}</p>
          </div>
        ))}
      </section>

      {/* Powered by TrustCat */}
      <section id="stack" className="text-center py-16 px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl text-microscale-orange font-semibold mb-4">Powered by TrustCat</h2>
        <p className="text-gray-300 mb-6">
          Every microscaler contributes to a verified, on-chain compute ecosystem.<br/>
          Workloads are brokered, escrows enforced, and performance logged for truth.
        </p>
        <a href="https://trustcat.ai" target="_blank" rel="noreferrer"
           className="border border-microscale-orange text-microscale-orange hover:bg-microscale-orange/10 py-2 px-6 rounded-2xl">
          VIEW THE STACK
        </a>
      </section>

      {/* Verify */}
      <section id="verify" className="bg-[#0C0C0C] py-16 px-8 w-full text-center border-t border-microscale-green/30">
        <p className="text-gray-400 text-sm mb-2">Terminal Prompt:</p>
        <div className="bg-black border border-microscale-green/40 text-left p-4 mx-auto max-w-2xl rounded-xl text-microscale-green">
          <pre className="whitespace-pre-wrap">
$ sudo trustcat verify --node gpu-rig-5090x
Verifying compute node...
✅ Node verified on CAT Chain block #108392
Next step: submit your compute profile
          </pre>
        </div>
        <a href="https://discord.gg/" target="_blank" rel="noreferrer"
           className="mt-8 inline-block bg-microscale-orange hover:bg-microscale-orangeDark text-black font-bold py-2 px-6 rounded-2xl shadow-md">
          JOIN THE NETWORK
        </a>
      </section>

      <Footer />
    </main>
  );
}
