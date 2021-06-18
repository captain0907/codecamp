import dynamic from "next/dynamic";
import { EditorState } from "draft-js";
import { useRef, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const EditorPage = () => {
  const editorRef = useRef(null);
  // const [editorState, setEditorState] = useState(EditorState.createEmpty());
  if (typeof window === undefined) return <div></div>;

  const Editor = dynamic(
    () => import("react-draft-wysiwyg").then((res) => res.Editor),
    { ssr: false }
  );

  // dynamic(() => import('react-draft-wysiwyg'))

  const onEditorStateChange = (contents) => {
    // setEditorState(contents);
    // console.log(contents);
    // const result = EditorState.createEmpty();
    // console.log(result);
    console.log(editorRef.current.value);
  };

  return (
    <Editor
      ref={editorRef}
      toolbarClassName="toolbarClassName"
      wrapperClassName="wrapperClassName"
      editorClassName="editorClassName"
      // onEditorStateChange={onEditorStateChange}
      onChange={onEditorStateChange}
    />
  );
};

export default EditorPage;
