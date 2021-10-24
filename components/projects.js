export default function Projects({projectData}) {
    return (
        <section className="mb-16">
            <h2 className="text-primary font-bold uppercase tracking-wider">Projects</h2>
            {projectData.map(project => (
                <section className="project mb-12"
                         key={project.id}>
                    <h3 className="mt-2 font-serif font-bold text-[21px] leading-none">
                        <a href={project.href} rel="noopener" target="_blank">{project.name}</a>
                    </h3>
                    <div className="markdown"
                         dangerouslySetInnerHTML={{__html: project.contentHtml}}/>
                </section>
            ))}
        </section>
    )
};