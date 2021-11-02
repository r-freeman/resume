import {Education, Experience, Header, List, Projects} from '../components';
import {links} from '../data/author';
import {getAuthorData} from '../lib/author';
import {getCustomData, getCustomMarkdownData} from '../lib/custom';

export default function Home({author, educationData, projectData, experienceData, languages, technologies}) {
    return (
        <div className="container max-w-5xl mx-auto mb-16 px-8 lg:px-16 font-light">
            <div className="absolute inset-0 bg-primary h-32 lg:h-[5px] print:hidden"/>
            <Header
                author={author}
                links={links}/>
            <main className="mt-12 lg:mt-16 lg:flex print:mt-6">
                <div className="lg:max-w-[570px] mr-8">
                    <section className="mb-16 print:mb-8">
                        <h2 className="font-serif font-bold text-4xl leading-none print:hidden">
                            About me
                        </h2>
                        <p className="leading-7 mt-6 print:mt-0">{author.bio}</p>
                    </section>
                    {projectData &&
                    <Projects projectData={projectData}/>
                    }
                    {experienceData &&
                    <Experience experienceData={experienceData}/>
                    }
                </div>
                <aside>
                    {educationData &&
                    <Education educationData={educationData}/>
                    }
                    {languages &&
                    <List heading="Languages" items={languages}/>
                    }
                    {technologies &&
                    <List heading="Technologies" items={technologies}/>
                    }
                </aside>
            </main>
        </div>
    )
}

export async function getStaticProps() {
    const author = await getAuthorData();
    const educationData = await getCustomMarkdownData('education');
    const projectData = await getCustomMarkdownData('projects');
    const experienceData = await getCustomMarkdownData('experience');
    const languages = getCustomData('languages.json');
    const technologies = getCustomData('technologies.json');

    return {
        props: {
            author,
            educationData,
            projectData,
            experienceData,
            languages,
            technologies
        }
    }
}
