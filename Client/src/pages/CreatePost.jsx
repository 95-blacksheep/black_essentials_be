import React, { useState } from 'react'
import ReactQuill from 'react-quill'; /*  for the text area  */
import 'react-quill/dist/quill.snow.css'

import ErrorMessage from "./ErrorMessage";





const CreatePost = () => {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Uncategorized')
  const [desc, setDesc] = useState('')
  const [thumbnail, setThumbnail] = useState('')



  const modules = {
    toolbar: [
      [{'header': [1, 2, 3, 4, 5, 6, false]}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ]
  };
  
  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];
  



  const Post_Categories = ["Agriculture","Business","Education","Arts","Investment", "Uncategorized"]


  return (
    <section className="register" id='create_post'>
      <ErrorMessage />
      <div className="form_container">

      <h2>New Post</h2>

        <div className="register_form" id='editor'>
          <input type="text" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)}  autoFocus/>
          <select name="category" value={category} onChange={e =>  setCategory(e.target.value)}>
            {
              Post_Categories.map(cat => <option key={cat}>{cat}</option> )
            }
          </select>

          <ReactQuill modules={modules}  formats={formats} value={desc} onChange={setDesc}/>

          <input type="file" onChange={e => setThumbnail(e.target.file[0])} accept='png, jpg, jpeg' />

          <button type='submit' className='btn_primary' >Post</button>
        </div>
      </div>
    </section>
  )
}

export default CreatePost
