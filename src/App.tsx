import FoldersList from "./components/FoldersList";
import fileStructure from "./assets/JSON/config.js";

function App() {
  return (
    <div>
      <FoldersList fileStructure={fileStructure} />
    </div>
  );
}

export default App;
