import {Datetime} from '../components';

export default function Education({educationData}) {
    return (
        <section className="mb-12 print:mb-6">
            <h2 className="text-primary font-bold uppercase tracking-wider">
                Education
            </h2>
            {educationData.slice(0).reverse().map(education => (
                <section className="mb-6 print:mb-3" key={education.id}>
                    <h3 className="mt-1 font-serif font-bold">{education.institution}</h3>
                    <p className="mt-1">
                        <Datetime dateString={education.date_from}/>
                        {' '}&middot;{' '}
                        <Datetime dateString={education.date_to}/>
                    </p>
                    <h4 className="mt-2 font-serif italic print:mt-1">{education.degree}</h4>
                    <p className="mt-1">{education.award}</p>
                </section>
            ))}
        </section>
    )
};