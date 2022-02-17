import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const posts = [
  {
    id: 1,
    title: 'card title',
    body: 'Eiusmod nulla velit fugiat ullamco non labore Lorem adipisicing enim. In eiusmod aliquip qui aute elit in sit irure anim in. Veniam consectetur tempor non in duis elit fugiat Lorem ea Lorem eiusmod. Ex anim enim cillum reprehenderit culpa pariatur duis non velit sunt adipisicing. Fugiat laborum dolore elit et dolor eiusmod sint veniam exercitation in. Nulla veniam et proident velit aute id elit eu aute amet non. Pariatur sunt dolore pariatur proident amet sint incididunt velit mollit voluptate quis duis.',
  },
  {
    id: 2,
    title: 'card title',
    body: 'Eiusmod nulla velit fugiat ullamco non labore Lorem adipisicing enim. In eiusmod aliquip qui aute elit in sit irure anim in. Veniam consectetur tempor non in duis elit fugiat Lorem ea Lorem eiusmod. Ex anim enim cillum reprehenderit culpa pariatur duis non velit sunt adipisicing. Fugiat laborum dolore elit et dolor eiusmod sint veniam exercitation in. Nulla veniam et proident velit aute id elit eu aute amet non. Pariatur sunt dolore pariatur proident amet sint incididunt velit mollit voluptate quis duis.',
  },
  {
    id: 3,
    title: 'card title',
    body: 'Eiusmod nulla velit fugiat ullamco non labore Lorem adipisicing enim. In eiusmod aliquip qui aute elit in sit irure anim in. Veniam consectetur tempor non in duis elit fugiat Lorem ea Lorem eiusmod. Ex anim enim cillum reprehenderit culpa pariatur duis non velit sunt adipisicing. Fugiat laborum dolore elit et dolor eiusmod sint veniam exercitation in. Nulla veniam et proident velit aute id elit eu aute amet non. Pariatur sunt dolore pariatur proident amet sint incididunt velit mollit voluptate quis duis.',
  },
]

function App() {
  // const [state, setState] = useState(posts);

  return (
    <div className="App">
      <h1>Hi</h1>
      <div className='card-container'>
        
          {posts.map(post => {
            console.log(post);    
              return(
                <div className='card'>
                  <div className='title'>
                    <h3>{post.id}</h3>
                    <h1>{post.title}</h1>
                  </div>
                  <div className='body'> 
                    <p>{post.body}</p>
                  </div>
                </div>
              );
          })}

      </div>
      {/* <div className='card-container'> 
        <div className='card'>
          <h1>Card title</h1>
          <p>Non culpa fugiat aliquip exercitation cupidatat est Lorem. Mollit adipisicing ullamco magna mollit amet et nostrud ut nulla amet sit. Reprehenderit mollit pariatur consequat exercitation aute amet sunt amet. Irure esse fugiat nisi ad labore adipisicing commodo. Cupidatat excepteur minim labore duis consectetur excepteur magna ut et duis.</p>
        </div>
        <div className='card'>
          <h1>Card title</h1>
          <p>Non culpa fugiat aliquip exercitation cupidatat est Lorem. Mollit adipisicing ullamco magna mollit amet et nostrud ut nulla amet sit. Reprehenderit mollit pariatur consequat exercitation aute amet sunt amet. Irure esse fugiat nisi ad labore adipisicing commodo. Cupidatat excepteur minim labore duis consectetur excepteur magna ut et duis.</p>
        </div>
        <div className='card'>
          <h1>Card title</h1>
          <p>Non culpa fugiat aliquip exercitation cupidatat est Lorem. Mollit adipisicing ullamco magna mollit amet et nostrud ut nulla amet sit. Reprehenderit mollit pariatur consequat exercitation aute amet sunt amet. Irure esse fugiat nisi ad labore adipisicing commodo. Cupidatat excepteur minim labore duis consectetur excepteur magna ut et duis.</p>
        </div>
      </div> */}

    </div>
  );
}

export default App;
