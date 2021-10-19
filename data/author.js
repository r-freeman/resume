import {PinIcon, GlobeIcon, MailIcon, GitHubIcon} from '../components/svg';

export const author = {
    name: "Ryan Freeman",
    jobTitle: "Graduate Software Engineer",
    bio: "Graduate software engineer with a passion for developing robust and scalable cloud-native web applications, working across the full-stack.",
    photo: "photo.png",
};

export const links = [
    {
        title: "Dublin, Ireland",
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
        title: "@r-freeman",
        href: "https://github.com/r-freeman",
        icon: (props) => <GitHubIcon {...props}/>,
        property: "u-url"
    }
]