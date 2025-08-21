import React from 'react'

function AboutMe() {
  return (
    <section id='about' className='py-24 relative'>
      <div className="container mx-auto max-w-5xl pt-[700px] md:pt-0">
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          About <span className='text-primary'> Me</span>
        </h2>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl">
          <div className="max-w-3xl mx-auto text-center space-y-8">
              <h4 className='text-muted-foreground space-y-8 max-w-sm md:max-w-xl'>
                I am pursuing a degree in Computer Science at Dublin City University,
                where I’ve developed a strong interest in building full-stack applications.
                Through my studies and personal projects, I’ve honed skills in languages
                such as Python, Java, and JavaScript, and gained experience with
                frameworks like React, Node.js, and Django.
                I am passionate about solving real-world problems through technology and always strive to improve my skills.
              </h4>
          </div>
          <div>
            <h4 className='text-muted-foreground space-y-8 max-w-sm md:max-w-xl'>
              My work includes backend development with Node.js, building RESTful APIs,
              and integrating databases such as MongoDB and PostgreSQL. I enjoy using
              tools like Git, Docker, and my favorite editor, VS Code, to create
              maintainable solutions. I’m eager to apply my skills in a professional
              setting through internships where I can contribute to impactful projects
              and continue learning from experienced teams.
            </h4>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default AboutMe