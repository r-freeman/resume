import {DownloadIcon} from './svg';
import Link from 'next/link';

export default function DownloadButton({author}) {
    return (
        <>
            <Link href={encodeURIComponent(`/${author.name} ${author.jobTitle} ${author.location}.pdf`)}>
                <button className="p-2 text-gray-500 hover:text-gray-900 border rounded-lg focus:ring-2 print:hidden"
                        aria-label="Download resume">
                    <DownloadIcon className="w-6 lg:w-5 h-auto"/>
                    <span className="sr-only">Download resume as PDF</span>
                </button>
            </Link>
        </>
    )
};