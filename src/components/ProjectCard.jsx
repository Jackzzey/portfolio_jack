import { ExternalLink, Github } from 'lucide-react'



function ProjectCard({ projects }) {
  return (
    
      
    <div>  
        <div className="grid grid-</div>cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project,key) => (
            project.building ? (
            
              <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                <div className="h-48 overflow-hidden">
                  <img className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' src={project.image} alt={project.title} />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span className='px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground'>
                        {tag}
                      </span>
                    ))}
                  </div>

                <h3 className='text-xl font-semibold mb-1'> {project.title} </h3>
                  <p className='text-muted-foreground text-sm mb-4'>
                    {project.description}

                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a 
                        href={project.demoUrl} 
                        target='_blank'
                        className='text-foreground/80 hover:text-primary transition-colors duration-300'
                        > 
                        <ExternalLink size={20}/>  
                      </a>
                      <a 
                        href={project.githubUrl}
                        target='_blank'
                        className='text-foreground/80 hover:text-primary transition-colors duration-300'
                        >
                        <Github size={20}/>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            ) : (
              <div className="bg-card overflow-hidden building h-[350px] rounded-lg shadow-md" key={key}>
                <div className="flex flex-col items-center justify-center h-full p-4 text-center space-y-2">
                  <p className="text-2xl md:text-4xl font-bold">Project Under Construction</p>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </div>
              </div>

            )
          ))}
      </div>
    </div>
  )
}

export default ProjectCard