import {
    PinIcon,
    GlobeIcon,
    LinkedInIcon,
    MailIcon,
    GitHubIcon
} from '../components/svg';

import * as authorData from './author.json';

export const author = {
    ...authorData,
    photo: "photo.png",
}

export const links = [
    {
        title: author.location,
        href: "https://goo.gl/maps/WkHLN8gfMNkXK3Ux5",
        icon: (props) => <PinIcon {...props}/>,
        property: "p-locality"
    },
    {
        title: "ryanfreeman.dev",
        href: "https://ryanfreeman.dev",
        icon: (props) => <GlobeIcon {...props}/>,
        property: "u-url"
    },
    {
        title: "hello@ryanfreeman.dev",
        href: "mailto:hello@ryanfreeman.dev",
        icon: (props) => <MailIcon {...props}/>,
        property: "u-email"
    },
    {
        title: "GitHub",
        href: "https://github.com/r-freeman",
        icon: (props) => <GitHubIcon {...props}/>,
        property: "u-url"
    },
    {
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/r-freeman/",
        icon: (props) => <LinkedInIcon {...props}/>,
        property: "u-url"
    }
]
