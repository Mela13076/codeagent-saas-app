import Image from "next/image";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="cta-section">
      <div className="cta-badge">Your AI CS Tutor Awaits.</div>
      <h2 className="text-3xl font-bold">Build a Personalized AI Tutor</h2>
      <p className="">Pick a name, subject, voice & personality — and start learning Computer Science through AI-powered conversations that are interactive and fun.</p>
      <Image src="/images/cta.svg" alt="CTA Illustration" width={400} height={300} className="cta-image" />
      <button className="btn-primary w-full justify-center">
        <Image src="/icons/plus.svg" alt="Plus Icon" width={12} height={12} />
        <Link href="/agents/new" className="ml-2">
          Create an AI Agent
        </Link>
      </button>

    </section>
  )
};

export default Cta;
