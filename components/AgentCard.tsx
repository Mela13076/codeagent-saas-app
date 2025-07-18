import Image from "next/image";
import Link from "next/link";

interface AgentCardProps{
    id: string;
    name: string;
    topic: string;
    category: string;
    duration: number;
    color: string;
}

const AgentCard = ({ id, name, topic, category, duration, color }: AgentCardProps) => {
  return (
    <article className="agent-card" style={{ backgroundColor: color }}>
        <div className="flex justify-between items-center">
            <div className="category-badge">{category}</div>
            <button className="agent-bookmark">
                <Image src="/icons/bookmark.svg" alt="Bookmark" width={12.5} height={15} />
            </button>
        </div>
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-sm">{topic}</p>
        <div className="flex items-center gap-2">
            <Image src="/icons/clock.svg" alt="Clock" width={16} height={16} />
            <p className="text-sm">{duration} minutes</p>
        </div>
        <Link href={`/agents/${id}`} className="w-full">
            <button className="btn-primary w-full justify-center">Open Lesson</button>
        </Link>
        
    </article>
    );
}

export default AgentCard
