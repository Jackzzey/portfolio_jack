import { ArrowRight } from 'lucide-react'


function GithubButton({ href }) {
  return (
    <div className="text-center mt-12">
          <a 
            target='_blank'
            href={href} className='cosmic-button w-fit flex items-center mx-auto gap-2'>
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
  )
}

export default GithubButton