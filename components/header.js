import Head from 'next/head';
import Image from 'next/image';
import classNames from '../helpers';
import {PrintButton} from '../components';

export default function Header({author, links}) {
    return (
        <>
            <Head>
                <title>{author.name} &middot; {author.jobTitle}</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="author" content={author.name}/>
                <meta name="description" content={author.bio}/>
                <meta property="og:title" content={`${author.name} ${author.jobTitle} ${author.location}`}/>
                <meta property="og:description" content={author.bio}/>
                <meta property="og:image" content={`${author.photo.src}`}/>
            </Head>
            <header
                className="h-card lg:flex justify-between print:flex print:items-baseline mt-16 relative print:mt-0">
                <div className="absolute right-0 top-20 lg:-top-10 inline-flex items-center">
                    <PrintButton/>
                </div>
                <div className="lg:flex items-center">
                    <div className="w-32 w-32 mr-8 print:hidden">
                        <Image
                            {...author.photo}
                            width={256}
                            height={256}
                            alt={`Photo of ${author.name}`}
                            placeholder="blur"
                            blurDataURL={author.photo.base64}
                            className="u-photo rounded-full"/>
                    </div>
                    <div>
                        <h1 className="p-name text-4xl leading-tight font-serif font-bold md:text-5xl md:leading-tight">{author.name}</h1>
                        <p className="p-job-title font-serif text-[18px] md:text-2xl text-gray-600">{author.jobTitle}</p>
                    </div>
                </div>
                <div className="mt-6 text-base lg:text-sm space-y-1">
                    {links.map((link, i) => (
                        <a key={i}
                           href={link.href}
                           rel="noopener"
                           target="_blank"
                           className={classNames(link.property, 'inline-flex lg:flex lg:flex-row-reverse items-center print:inline-flex print:flex-row-reverse text-gray-500 hover:text-gray-900')}>
                            <link.icon className="w-6 h-6 lg:w-5 lg:h-5 mr-2 lg:ml-2 lg:mr-0"/>
                            <span className="sr-only lg:not-sr-only">{link.title}</span>
                        </a>
                    ))}
                </div>
            </header>
        </>
    );
};