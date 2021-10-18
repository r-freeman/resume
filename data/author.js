import {GlobeIcon, MailIcon, GitHubIcon} from '../components/svg';

export const author = {
    name: "Ryan Freeman",
    jobTitle: "Graduate Software Engineer",
    bio: "Graduate software engineer with a passion for developing robust and scalable cloud-native web applications, working across the full-stack.",
    location: "Dublin, Ireland",
    photo: "photo.png",
};

export const links = [
    {
        title: "ryanfreeman.dev",
        href: "https://ryanfreeman.dev",
        icon: (props) => <GlobeIcon {...props}/>
    },
    {
        title: "hello@ryanfreeman.dev",
        href: "mailto:hello@ryanfreeman.dev",
        icon: (props) => <MailIcon {...props}/>
    },
    {
        title: "@r-freeman",
        href: "https://github.com/r-freeman",
        icon: (props) => <GitHubIcon {...props}/>
    }
]