import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import ProjectCard from './ProjectCard'

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/projects/p1.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Project 2",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/projects/p1.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Project 3",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/projects/p1.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "#",
  }
]

function ProjectsSection() {
  return (
    <section id='projects'
      className='py-24 px-4 relative'
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          Featured <span className='text-primary'> Projects</span>
        </h2>

        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
          Here are some of my recent projects. Each project showcases my skills in modern web development, 
          focusing on clean design and efficient code. Explore the demos and source code to learn more 
          about my work.
        </p>

        <ProjectCard projects={projects}/>

        <div className="text-center mt-12">
          <a 
            target='_blank'
            href="https://github.com/Jackzzey" className='cosmic-button w-fit flex items-center mx-auto gap-2'>
            Check My Github <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  )
}

export default ProjectsSection