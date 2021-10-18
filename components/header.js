import Head from 'next/head';
import Image from 'next/image';
import {PinIcon} from '../components/svg';

export default function Header({author, links}) {
    return (
        <>
            <Head>
                <title>{author.name} &middot; {author.jobTitle}</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta property="description" content={author.bio}/>
            </Head>
            <header className="lg:flex justify-between mt-16">
                <div className="lg:flex items-center">
                    <div className="w-32 w-32 mr-8">
                        <Image
                            {...author.photo}
                            width={256}
                            height={256}
                            alt={`Photo of ${author.name}`}
                            placeholder="blur"
                            blurDataURL={author.photo.base64}
                            className="rounded-full"/>
                    </div>
                    <div>
                        <h1 className="font-serif font-bold text-5xl leading-tight">{author.name}</h1>
                        <p className="font-serif text-2xl text-gray-500">{author.jobTitle}</p>
                    </div>
                </div>
                <div className="mt-6 font-light text-sm space-y-1">
                    {author.location &&
                    <p className="flex lg:flex-row-reverse items-center text-gray-500 hover:text-gray-900">
                        <PinIcon className="w-5 h-5 mr-2 lg:ml-2 lg:mr-0"/>
                        <span>{author.location}</span>
                    </p>
                    }
                    {links.map((link, i) => (
                        <a key={i}
                           href={link.href}
                           rel="noopener"
                           target="_blank"
                           className="flex lg:flex-row-reverse items-center text-gray-500 hover:text-gray-900">
                            <link.icon className="w-5 h-5 mr-2 lg:ml-2 lg:mr-0"/>
                            {link.title}
                        </a>
                    ))}
                </div>
            </header>
        </>
    )
};