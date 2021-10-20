import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

export function getCustomData(file) {
    const path = `${process.env.dataDirectory}/${file}`;

    return JSON.parse(fs.readFileSync(path));
}

export async function getCustomMarkdownData(directory) {
    const markdownDirectory = path.join(process.env.dataDirectory, directory);

    const fileNames = fs.readdirSync(markdownDirectory);

    return await Promise.all(fileNames.map(async (fileName) => {
        const id = fileName.replace(/\.md$/, '');

        const fullPath = path.join(markdownDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const matterResult = matter(fileContents);

        const processedContent = await remark()
            .use(html)
            .process(matterResult.content);

        const contentHtml = processedContent.toString();

        return {
            id,
            contentHtml,
            ...matterResult.data
        }
    }));
};
