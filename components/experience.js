import {Datetime} from '../components';

export default function Experience({experienceData}) {
    return (
        <section className="mb-16">
            <h2 className="text-primary font-bold uppercase tracking-wider">Experience</h2>
            {experienceData.slice(0).reverse().map(experience => (
                <section className="experience mb-12"
                         key={experience.id}>
                    <h3 className="mt-2 font-serif font-bold text-[21px] leading-none">{experience.company}</h3>
                    <p className="mt-2">
                        <Datetime dateString={experience.date_from}/>
                        {' '}&middot;{' '}
                        <Datetime dateString={experience.date_to}/>
                    </p>
                    <h4 className="mt-2 font-serif font-bold italic text-[21px]">
                        {experience.jobTitle}
                    </h4>
                    <div dangerouslySetInnerHTML={{__html: experience.contentHtml}}/>
                </section>
            ))}
        </section>
    )
};