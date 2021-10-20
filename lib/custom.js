import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getCustomData(file) {
    const path = `${process.env.dataDirectory}/${file}`;

    return JSON.parse(fs.readFileSync(path));
}

export function getCustomMarkdownData(directory) {
    const markdownDirectory = path.join(process.env.dataDirectory, directory);

    const fileNames = fs.readdirSync(markdownDirectory);

    return fileNames.map(fileName => {
        const id = fileName.replace(/\.md$/, '');

        const fullPath = path.join(markdownDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const matterResult = matter(fileContents);

        return {
            id,
            ...matterResult.data
        }
    });
};
