import React, {Component} from 'react';
import ReactQuill from 'react-quill';

const CustomToolbar = () => (
  <div id="toolbar">
    <button className="ql-header" value="2"/>
    <button className="ql-bold" />
    <button className="ql-italic" />
    <button className="ql-list" value="ordered"/>
    <button className="ql-list" value="bullet"/>
  </div>
);

// var icons = ReactQuill.Quill.import("ui/icons");
// icons["header"]['2'] = "<span>Heading</span>";

class App extends Component{
  constructor(props) {
    super(props);
    this.state = { editorHtml: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(html) {
    this.setState({ editorHtml: html });
  }

  render() {
    return (
      <div className="text-editor">
        <CustomToolbar />
        <ReactQuill
          onChange={this.handleChange}
          placeholder={this.props.placeholder}
          modules={App.modules}
          formats={App.formats}
          theme={"snow"} // pass false to use minimal theme
        />
      </div>
    )
  }
}

/* 
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
App.modules = {
  toolbar: {
    container: "#toolbar",
  },
  clipboard: {
    matchVisual: false,
  }
};

/* 
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
App.formats = [
  "header",
  "bold",
  "italic",
  "list",
  "bullet"
];

export default App;
