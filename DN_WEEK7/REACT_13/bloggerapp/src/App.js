import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [view, setView] = useState("book");

  // 1. If-Else Rendering
  let element;
  if (view === "book") {
    element = <BookDetails />;
  } else if (view === "blog") {
    element = <BlogDetails />;
  } else {
    element = <CourseDetails />;
  }

  return (
    <div>
      <h1>Blogger App</h1>

      <div>
        <button onClick={() => setView("book")}>Show Book</button>
        <button onClick={() => setView("blog")}>Show Blog</button>
        <button onClick={() => setView("course")}>Show Course</button>
      </div>

      <h2>Rendered using If-Else</h2>
      {element}

      <h2>Rendered using Ternary</h2>
      {
        view === "book"
          ? <BookDetails />
          : view === "blog"
            ? <BlogDetails />
            : <CourseDetails />
      }

      <h2>Rendered using && Short-Circuit</h2>
      {view === "book" && <BookDetails />}
      {view === "blog" && <BlogDetails />}
      {view === "course" && <CourseDetails />}
    </div>
  );
}

export default App;
