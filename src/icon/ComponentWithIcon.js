import * as icons from "react-icons/fa";

const ComponentWithIcon = ({ comboName }) => {
  const [_, iconNAme] = comboName.split('/');
  const iconComponent = iconNAme ? icons[iconNAme] : icons.FaFileExcel
  return iconComponent
};

export default ComponentWithIcon;
