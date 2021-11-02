import {PrintIcon} from './svg';

export default function PrintButton() {
    return (
        <button className="p-2 text-gray-500 hover:text-gray-900 border rounded-lg focus:ring-2 print:hidden"
                aria-label="Print"
                onClick={() => window.print()}>
            <PrintIcon className="w-6 lg:w-5 h-auto"/>
            <span className="sr-only">Print this page</span>
        </button>
    );
};