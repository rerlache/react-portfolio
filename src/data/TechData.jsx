import {
  AiOutlineConsoleSql,
  AiOutlineHtml5,
  AiOutlineCode,
  AiOutlineCloudServer,
} from "react-icons/ai";

export const TechData = [
  {
    category: "Frontend",
    icon: <AiOutlineHtml5 size="2rem" />,
    items: ["HTML", "CSS", "react", "C#", "Blazor", "blender", "unity"],
  },
  {
    category: "Backend",
    icon: <AiOutlineConsoleSql size="2rem" />,
    items: ["SQL", "MySQL", "Dataverse"],
  },
  {
    category: "Languages",
    icon: <AiOutlineCode size="2rem" />,
    items: ["C#", "react", "HTML", "CSS", "bash", "Powershell"],
  },
  {
    category: "Others",
    icon: <AiOutlineCloudServer size="2rem" />,
    items: ["Linux", "Windows Server", "Exchange", "Power Platform"],
  },
];
