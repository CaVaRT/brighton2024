import Link from "next/link";

export default function PostCard(props) {
    const {post} = props
    return (
    <Link className='unstyled' href={`/deck/${post.slug}`}>
<div className='postCard'>
    <h2>{post.title}</h2>
    <div className='statsContainer'>
        <h5>{post.presenter}</h5>
    </div>
    </div>
        </Link>
        )
}