import Markdown from "markdown-to-jsx";
import getPostMetadata from "@/utils/getPostMetadata";
import React from "react";
import fs from 'fs';
import matter from "gray-matter";

function getPostContent(slug) {
  const folder = 'decks/';
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');
  const matterResult = matter(content);
  return matterResult;
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata('decks');
  return posts.map((post) => ({ slug: post.slug }));
};

export async function generateMetadata({ params, searchParams }) {
  const id = params?.slug ? params?.slug : '';
  return { title: `${id.replaceAll('_', ' ')}` };
}

export default function DeckPage(props) {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <main style={{ padding: '20px', lineHeight: '1.6', fontSize: '18px' }}>
      <h1>{post.data.title}</h1>
      <article>
        <Markdown
          options={{
            overrides: {
              h2: {
                component: 'h2',
                props: {
                  style: { fontWeight: 'bold' },
                },
              },
            },
          }}
        >
          {post.content}
        </Markdown>
      </article>
    </main>
  );
}