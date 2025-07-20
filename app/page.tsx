import React from 'react'
import {Button} from "@/components/ui/button";
import AgentCard from '@/components/AgentCard';
import AgentsList from '@/components/AgentsList';
import Cta from '@/components/CTA';
import { recentSessions } from '@/constants';

// This is the main page component
// It renders a list of popular agents and a call to action section
// The AgentCard component is used to display individual agent cards
// The AgentsList component displays a list of agents
// The Cta component is used for the call to action section

const Page = () => {
  return (
    <div>
      <h1 className="text-2xl underline">Popular Agents</h1>
        <section className='home-section'>
          <AgentCard
            id="234"
            name="Ada the Algorithm Architect"
            topic="Mastering sorting algorithms like Bubble Merge and Quick Sort"
            category="Algorithms"
            duration={30}
            color="#f0f4ff"
          />
          <AgentCard
            id="312"
            name="Pythia the Python Prodigy"
            topic="Learn Python fundamentals: variables loops and functions"
            category="Programming"
            duration={25}
            color="#e9ffe3"
          />
          <AgentCard
            id="478"
            name="Tensor the ML Guide"
            topic="Explore core concepts of machine learning and model training"
            category="Machine Learning"
            duration={45}
            color="#fff0f5"
          />
        </section>
        <section className='home-section'>
          <AgentsList 
            title="All Agents"
            agents = {recentSessions}
            classNames = "w-2/3 max-lg:w-full"
          />
          <Cta />
        </section>
    </div>
  )
}

export default Page