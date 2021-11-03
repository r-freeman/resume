import {Datetime} from '../components';

export default function Experience({experienceData}) {
    return (
        <section className="mb-16 print:mb-8">
            <h2 className="text-primary font-bold uppercase tracking-wider">Experience</h2>
            {experienceData.slice(0).reverse().map(experience => (
                <section className="experience mb-12 print:mb-6"
                         key={experience.id}>
                    <h3 className="mt-2 font-serif font-bold text-[21px] leading-none print:mt-1 print:text-base">{experience.company}</h3>
                    <p className="mt-2 print:mt-1">
                        <Datetime dateString={experience.date_from}/>
                        {' '}&middot;{' '}
                        <Datetime dateString={experience.date_to}/>
                    </p>
                    <h4 className="mt-2 font-serif font-bold italic text-[21px] print:mt-1 print:text-base">
                        {experience.jobTitle}
                    </h4>
                    <div className="markdown"
                         dangerouslySetInnerHTML={{__html: experience.contentHtml}}/>
                </section>
            ))}
        </section>
    )
};