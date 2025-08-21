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


function BackEndSection() {
  return (
    <section id='backend' className='py-24 px-4 relative'>
      <div className="container mx-auto max-w-5xl">
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          Back End <span className='text-primary'> Projects</span>
        </h2>

        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
          Discover a selection of my backend projects, showcasing expertise in building robust APIs, server-side applications, and scalable systems. These projects demonstrate my skills in database management, authentication, and efficient data processing. Explore the demos and source code to see my approach to secure, maintainable, and high-performance backend development.
        </p>

        <ProjectCard projects={projects}/>

        <GithubButton href={"https://github.com/Jackzzey"}/>

      </div>
    </section>
  )
}

export default BackEndSection