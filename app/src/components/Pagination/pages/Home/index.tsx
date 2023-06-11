import React, { useRef, useEffect } from 'react';
import { Container, Props } from './styles';
import EditorJS from '@editorjs/editorjs';

const HomePage: React.FC<Props> = ({ pageName, visible }) => {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editorRef.current) {
      const editor = new EditorJS({
        holder: editorRef.current,
        // Add your EditorJS configuration options here
      });
    }
  }, []);

  return (
    <Container className={`app-container-column ${visible ? '' : 'hide-page'}`}>
      <h1>Why can I do this?</h1>
      <div id="editorjs" ref={editorRef}></div>
      <h2>new</h2>
    </Container>
  );
};

export default HomePage;