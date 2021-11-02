export default function PrintButton() {
    return (
        <button className="p-2 text-gray-500 hover:text-gray-900 border rounded-lg focus:ring-2 print:hidden"
                aria-label="Print"
                onClick={() => window.print()}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 lg:w-5 h-auto" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/>
            </svg>
            <span className="sr-only">Print this page</span>
        </button>
    );
};