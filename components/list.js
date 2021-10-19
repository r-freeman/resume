export default function List({heading, items}) {
    return (
        <section className="mb-12">
            <h2 className="text-primary font-bold uppercase tracking-wider">{heading}</h2>
            <ul className="mt-1 list-disc pl-7 leading-7">
                {items.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </section>
    )
};