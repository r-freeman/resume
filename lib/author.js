import {author} from '../data/author';
import {getPlaiceholder} from 'plaiceholder';

export async function getAuthorData() {
    const {base64, img} = await getPlaiceholder(`/${author.photo}`);

    return {
        ...author,
        photo: {
            base64,
            ...img
        }
    }
}
