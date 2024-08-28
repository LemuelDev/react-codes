// component hierarchy and props...
/*Create a simple blog post component. The main App component should render a list
 of blog posts, and each post should be a separate component. Pass props like title, 
 author, and content to each post component. */

import BlogComment1 from "./components/BlogComment1"
import BlogComment2 from "./components/BlogComment2"
import BlogComment3 from "./components/BlogComment3"



function App() {

  const blogs = [
    {
    id: 0,
    title: 'Politics',
    author: 'Gas Abelgas',
    content: 'There is a lot of unfairness when it comes to politics and corruption is always the number one issue.'
    },
    {
      id: 1,
      title: 'Sports',
      author: 'Mikee Reyes',
      content: 'I think Gilas Pilipinas will not be enough if Abando is not there.'
      },
      {
        id: 2,
        title: 'Esports',
        author: 'Manjean Faldas',
        content: 'Season 12 of the MPL will be a hell of a show.'
      },
  ]

  return (

    
    <>
      <h4 style={{textAlign: 'center', fontSize: '2rem', fontFamily: 'cursive'}}>Blog Comments</h4>
      <BlogComment1 blogs={[blogs[0]]}/>
      <BlogComment2 blogs={[blogs[1]]}/>
      <BlogComment3 blogs={[blogs[2]]}/>
    </>
  )
}

export default App
