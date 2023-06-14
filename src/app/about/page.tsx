import Image from "next/image"
interface TimelineProps {
  year: number
  position: string
  description: string
  company: string
}

const timeline: TimelineProps[] = [
  {
    year: 2022,
    position: 'Frontend specialist at @arvore',
    description: 'Responsible to create the new reader service and increase the user experience on the mobile app and web. Creator of the new mobile app using react native and mantainer of the bonsai design system.',
    company: '@arvore'
  },
  {
    year: 2021,
    position: 'Tech lead at @provi',
    description: 'Creator of a squad called "growth". This squad is responsible to care about the company website. I hired 3 web developers to compose this new squad and we did a great job using NextJS. But before that, I worked on a project called "ProviPay". This project is basically a marketplace that allow the student to buy courses using credit card or paying the entire value.',
    company: '@provi'
  },
  {
    year: 2018,
    position: 'CTO from a small company @garnon',
    description: `In this company I had the opportunity to create new skills like negotiation, selling and comunication. We had products like CMS and ERP's maded using laravel and vue.js. We had 12 developers working on the company. It was very good for me and I'm glad for all of this.`,
    company: '@garnon'
  },
  {
    year: 2017,
    position: 'Software Engineer at @hurmez',
    description: `I worked with ASP.NET MVC at this time. It was new for me. We also used Angular JS for the frontend.`,
    company: '@hurmez'
  },
  {
    year: 2016,
    position: 'Native Android developer at @imusics',
    description: `Responsible to create the first one android application of the company. This app was maded in Java using the MVVM pattern and consuming a ruby rest api.`,
    company: '@imusics'
  },
  {
    year: 2015,
    position: 'Native Android developer at @moneto',
    description: `My first experience with native development using Java. I was part of the team and in the end of the experience, I was the mobile tech lead.`,
    company: '@moneto'
  },

]

export default function About() {
  return (
    <section className="flex w-7/12 h-auto py-10 flex-col mt-10  max-[600px]:w-full max-[600px]:items-center">
      <h1 className="text-4xl font-bold ">Ora et labora.</h1>
      <div className="flex h-96 py-5 w-full mt-10 max-[600px]:flex-col max-[600px]:items-center">
        <Image
          alt="Zeno"
          src="/avatar.png"
          width="336"
          height="336"
          placeholder="blur"
          className="rounded-lg"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAP0lEQVQImQE0AMv/AFBQUJKSkqmpqaOjowCurq7v7+/Jycm5ubkA////jIyMn5+fg4ODADAwMD09PWlpaQAAAApRGnEHblMWAAAAAElFTkSuQmCC"
          priority
        />
        
        <section className="h-auto w-6/12 flex flex-col gap-5 px-10 max-[600px]:w-full max-[600px]:mt-10   ">
          <p>
            Hi, my name is <b>Douglas Henrique</b>.<br /> I started as a software engineer back in 2015, working with PHP 😅.
          </p>

          <p>
            {`
            I'm the frontend specialist at @arvore. Before that, I was a Tech lead at @provi. I'm originally from Brazil and I actually live in São José dos Campos, SP. `}
          </p>

          <p>
            {` Frontend is my passion, mobile development and side projects. When I'm not working, I like to play some guitar, get a ride in my car and watch some series with my fiancee. `}
          </p>
        </section>
      </div >



      <h1 className="text-4xl font-bold mt-10 max-[600px]:mt-96 ">Carreer</h1>
      {
        timeline.map((element, index) => {
          return (
            <div key={index} className="flex w-full h-auto py-10 flex-col max-[600px]:text-center max-[600px]:px-10">
              <h3>{element.position}</h3>
              <p>{element.description}</p>
              <small>{element.year}</small>
            </div>
          )
        })
      }
    </section >
  )
}