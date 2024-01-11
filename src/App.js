import { FiUploadCloud } from "react-icons/fi";

function App() {
  return (
    <div className="App">
      <label htmlFor="fileId">
        <h2>Upload File</h2>
        <FiUploadCloud className="upload__icon" />
        <p>Must not be more than 100kb</p>
      </label>
      <input type="file" id="fileId" />
    </div>
  );
}

export default App;
