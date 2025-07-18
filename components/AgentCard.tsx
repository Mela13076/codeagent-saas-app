import Image from "next/image";

interface AgentCardProps{
    id: string;
    name: string;
    topic: string;
    category: string;
    duration: number;
    color: string;
}
//
const AgentCard = ({ id, name, topic, category, duration, color }: AgentCardProps) => {
  return (
    <article className="agent-card" style={{ backgroundColor: color }}>
        <div className="flex justify-between items-center">
            <div className="category-badge">{category}</div>
            <button className="agent-bookmark">
                <Image src="/icons/bookmark.svg" alt="Bookmark" width={12.5} height={15} />
            </button>
        </div>
      
    </article>
    );
}

export default AgentCard
