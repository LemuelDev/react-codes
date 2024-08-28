import style from './ComponentsStyles.module.css'

const BlogComment2 = ({blogs}) => {
  return (
    <div>
        {blogs.map((item) => {
        return (
            <div key={item.id} className={style.card}>
                <h3 className={style['post-number']}>Post # {item.id + 1}</h3>
                <h2 className={style.title}>Title: {item.title}</h2>
                <h1 className={style.author}><i>Author: {item.author}</i></h1>
                <p className={style.content}>{item.content}</p>
            </div>
        )
        })}
    </div>
  )
}

export default BlogComment2