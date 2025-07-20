import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface AgentsListProps{
  title: string;
  agents?: Agent[]
  classNames: string;
}

const AgentsList = ({ title, agents, classNames }: AgentsListProps) => {
  return (
    <article className={cn('agent-list', classNames)}>
      <h2 className="font-bold text-3xl">Recent Sessions</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-lg w-2/3">Sessions</TableHead>
            <TableHead className="text-lg">Category</TableHead>
            <TableHead className="text-lg">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
    
          {agents?.map(({id, category, name, topic, duration, color}) => (
            <TableRow key={id}>
              <TableCell className="font-medium">
                <Link href={`/agents/${id}`} className="flex items-center gap-4">
                  <div className="flex items-center gap-2 ">
                    <div className="size-[60px] flex items-center justify-center rounded-lg max-md:hidden" style={{ backgroundColor: color }}>
                      <Image
                        src={`/icons/${category}.svg`}
                        alt={category}
                        width={46}
                        height={46}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="font-bold text-2xl">{name}</p>
                      <p className="text-sm text-muted-foreground">Topic: {topic}</p>
                    </div>

                  </div>
                  
                </Link>
              </TableCell>
              <TableCell>
                <div className="category-badge w-fit max-md:hidden">{category}</div>
                <div className="flex items-center justify-center rounded-lg w-fit p-2 md:hidden" style={{ backgroundColor: color }}>
                  <Image src={`/icons/${category}.svg`} alt={category} width={18} height={18} />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2 w-full justify-end">
                  <p>{duration} <span className="max-md:hidden">mins</span></p>
                  <Image  className="md:hidden" src="/icons/clock.svg" alt="Clock" width={16} height={16} />
                </div>
                
                
              </TableCell>
              
            </TableRow>
          ))}
          
        </TableBody>
      </Table>
    </article>
  );
};

export default AgentsList;
