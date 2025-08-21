import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import ProjectCard from './ProjectCard'
import GithubButton from './GithubButton'




const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/projects/p1.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "#",
    building: false,
  },
  {
    id: 2,
    title: "Project 2",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/projects/p1.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "#",
    building: false,
  },
  {
    id: 3,
    title: "Project 3",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/projects/p1.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "#",
    building: false,

  }
]


function FrontEndSection() {
  return (
    <section id='frontend' className='py-24 px-4 relative'>
      <div className="container mx-auto max-w-5xl">
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          Front End <span className='text-primary'> Projects</span>
        </h2>

        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
          Explore a selection of my front-end projects, each crafted with modern technologies like React and TailwindCSS. These projects highlight my ability to build responsive, visually appealing interfaces and deliver seamless user experiences. Browse the demos and source code to see my approach to clean design and efficient development.
        </p>

        <ProjectCard projects={projects}/>

        <GithubButton href={"https://github.com/Jackzzey"}/>

      </div>
    </section>
  )
}

export default FrontEndSection