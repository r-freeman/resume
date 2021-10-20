import {Education, Header, List} from '../components';
import {links} from '../data/author';
import {getAuthorData} from '../lib/author';
import {getCustomData, getCustomMarkdownData} from '../lib/custom';
import Projects from '../components/projects';

export default function Home({author, educationData, projectData, languages, technologies}) {
    return (
        <div className="container max-w-5xl mx-auto mb-16 px-8 lg:px-16 font-light">
            <div className="absolute inset-0 bg-primary h-32 lg:h-[5px]"/>
            <Header
                author={author}
                links={links}/>
            <main className="mt-12 lg:mt-16 lg:flex">
                <div className="lg:max-w-[570px] mr-8">
                    <section className="mb-16">
                        <h2 className="font-serif font-bold text-4xl leading-none">
                            About me
                        </h2>
                        <p className="leading-7 mt-6">{author.bio}</p>
                    </section>
                    <Projects projectData={projectData}/>
                    <section className="mb-16">
                        <h2 className="text-primary font-bold uppercase tracking-wider">Experience</h2>
                        <section className="mb-8">
                            <h3 className="mt-2 font-serif font-bold text-[21px] leading-none">Apple</h3>
                            <p className="mt-2">
                                <time dateTime="2014-06">June 2014</time>
                                {' '}&middot;{' '}
                                <time dateTime="2018-10">October 2018</time>
                            </p>
                            <h4 className="mt-2 font-serif font-bold italic text-[21px]">At Home
                                Advisor</h4>
                            <ul className="mt-3 list-disc pl-7  leading-7 space-y-2">
                                <li>
                                    Technical support for Apple customers in EMEA, AMR and JAPAC regions.
                                </li>
                                <li>
                                    Listened attentively to customers and recorded concise case notes using Apple's CRM
                                    system.
                                </li>
                                <li>
                                    Maintained composure and professionalism throughout my interactions with customers.
                                </li>
                                <li>
                                    Adapted to the customer, adjusted to their technical skill level and preferred way
                                    of
                                    communicating.
                                </li>
                                <li>
                                    Used PAIR to troubleshoot and resolve reasonably complex technical issues fast and
                                    efficiently.
                                </li>
                                <li>
                                    Took on extra responsibility as a subject matter expert to coach new hires on
                                    procedures
                                    and best practices.
                                </li>
                                <li>
                                    Upheld Apple's corporate business conduct and account security policies at all
                                    times.
                                </li>
                            </ul>
                        </section>
                    </section>
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
    const languages = getCustomData('languages.json');
    const technologies = getCustomData('technologies.json');

    return {
        props: {
            author,
            educationData,
            projectData,
            languages,
            technologies
        }
    }
}
