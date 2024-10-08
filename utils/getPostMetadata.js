import fs from 'fs'
import matter from 'gray-matter'

export default function getPostMetadata(basePath) {
  const folder = basePath + '/'
  const files = fs.readdirSync(folder)
  const markdownPosts = files.filter((file) => file.endsWith('.md'))

  // Get metadata for all posts
  const posts = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(`${basePath}/${filename}`, 'utf8')
    const matterResult = matter(fileContents)
    return{
        title: matterResult.data.title,
        presenter: matterResult.data.presenter || null,
        slug: filename.replace('.md', ''),
    }
})
    return posts
}