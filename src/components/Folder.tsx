import React, { useState } from "react";
import { BiLogoJavascript } from "react-icons/bi";
import { FaCss3, FaHtml5, FaReact, FaRegFolderOpen } from "react-icons/fa6";
import { IoMdFolderOpen } from "react-icons/io";
import {
  MdInsertPhoto,
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
} from "react-icons/md";

interface FileType {
  type: "file" | "folder";
  name: string;
  children?: FileType[];
}

interface FolderProps {
  node: FileType;
}

const htmlRegex = /\.html$/;
const cssRegex = /\.css$/;
const tsxRegex = /\.tsx$/;
const jsxRegex = /\.jsx$/;
const jsRegex = /\.js$/;
const photoRegex = /\.(svg|png|jpeg|jpg)$/;

const Folder = ({ node }: FolderProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const identifyFileType = (fileName: string): React.ReactNode => {
    if (htmlRegex.test(fileName)) return <FaHtml5 color="FF0000" />;
    if (cssRegex.test(fileName)) return <FaCss3 color="#02CCFE" />;
    if (tsxRegex.test(fileName)) return <FaReact color="#007acc" />;
    if (jsxRegex.test(fileName)) return <FaReact color="#04D9FF" />;
    if (jsRegex.test(fileName)) return <BiLogoJavascript color="#FFBF00" />;
    if (photoRegex.test(fileName))
      return <MdInsertPhoto color="lightGreen" size={20} />;
    return "";
  };

  return node.type === "file" ? (
    <div className="file">
      {identifyFileType(node.name)} <span>{node.name}</span>
    </div>
  ) : (
    <div className="folder">
      <div className="folderRow" onClick={toggleExpand}>
        {isExpanded ? (
          <MdKeyboardArrowDown size={20} />
        ) : (
          <MdKeyboardArrowRight size={20} />
        )}

        <div className="folder-name">
          {isExpanded ? (
            <FaRegFolderOpen color="#448EEF" size={20} />
          ) : (
            <IoMdFolderOpen color="#448EEF" size={20} />
          )}
          <span>{node.name}</span>
        </div>
      </div>
      {isExpanded && (
        <div className="folder-contents">
          {node.children &&
            node.children.map((child, index) => (
              <Folder key={index} node={child} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Folder;
