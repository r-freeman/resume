import {Header, List} from '../components';
import {getAuthorData} from '../lib/author';
import {links} from '../data/author';
import {getCustomData} from '../lib/custom';

export default function Home({author, languages, technologies}) {
    return (
        <div className="container max-w-5xl mx-auto mb-16 px-8 lg:px-16">
            <Header
                author={author}
                links={links}/>
            <main className="mt-12 lg:mt-16 lg:flex">
                <div className="lg:max-w-[570px] mr-8">
                    <section className="mb-16">
                        <h2 className="font-serif font-bold text-4xl leading-none">
                            About me
                        </h2>
                        <p className="font-light leading-7 mt-6">{author.bio}</p>
                    </section>
                    <section className="mb-16">
                        <h2 className="text-primary font-bold uppercase tracking-wider">Projects</h2>
                        <section className="mb-8">
                            <h3 className="mt-2 font-serif font-bold text-[21px] leading-none">Intellagent</h3>
                            <ul className="mt-3 list-disc pl-7 font-light leading-7 space-y-2">
                                <li>
                                    Built a full-stack help desk application which used machine learning to
                                    automatically
                                    triage incoming customer complaints from Twitter.
                                </li>
                                <li>
                                    Developed a custom text classification model using Jupyter Notebook and
                                    scikit-learn.
                                </li>
                                <li>
                                    Deployed the text classification model to Amazon Web Services as a serverless
                                    function using AWS Lambda and API Gateway.
                                </li>
                                <li>
                                    Developed a real-time messaging system using Twitter API and Sockets.IO which
                                    allowed
                                    agents
                                    to exchange messages with customers.
                                </li>
                                <li>
                                    Developed an interactive dashboard UI using React and Tailwind CSS.
                                </li>
                            </ul>
                        </section>
                    </section>
                    <section className="mb-16">
                        <h2 className="text-primary font-bold uppercase tracking-wider">Experience</h2>
                        <section className="mb-8">
                            <h3 className="mt-2 font-serif font-bold text-[21px] leading-none">Apple</h3>
                            <p className="mt-2 font-light">
                                <time dateTime="2014-06">June 2014</time>
                                {' '}&middot;{' '}
                                <time dateTime="2018-10">October 2018</time>
                            </p>
                            <h4 className="mt-2 font-serif font-bold italic text-[21px]">At Home
                                Advisor</h4>
                            <ul className="mt-3 list-disc pl-7 font-light leading-7 space-y-2">
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
                    <section className="mb-12">
                        <h2 className="text-primary font-bold uppercase tracking-wider">
                            Education
                        </h2>
                        <section>
                            <h3 className="mt-1 font-serif font-bold">Institute of Art, Design and
                                Technology</h3>
                            <p className="mt-1 font-light">
                                <time dateTime="2017-09">September 2017</time>
                                {' '}&middot;{' '}
                                <time dateTime="2021-04">April 2021</time>
                            </p>
                            <h4 className="mt-2 font-serif italic">BSc in Creative Computing</h4>
                            <p className="mt-1 font-light">Award 1:1</p>
                        </section>
                    </section>
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
    const languages = getCustomData('languages.json');
    const technologies = getCustomData('technologies.json');

    return {props: {author, languages, technologies}}
}
