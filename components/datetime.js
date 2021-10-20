import {format} from 'date-fns';

export default function Datetime({dateString}) {
    return (
        <time dateTime={dateString}>
            {format(new Date(dateString), "MMM yyyy")}
        </time>
    )
};