import Folder from "./Folder";

interface FileType {
  type: "file" | "folder";
  name: string;
  children?: FileType[];
}

interface FoldersListProps {
  fileStructure: FileType[];
}

const FoldersList = ({ fileStructure }: FoldersListProps) => {
  return (
    <div className="folder-browser">
      <h2>Files</h2>
      {fileStructure.map((node, index) => (
        <Folder key={index} node={node} />
      ))}
    </div>
  );
};

export default FoldersList;
