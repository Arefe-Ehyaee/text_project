import React, { useState } from "react";
import down from "../../../assets/icons/down.svg";


interface TreeNodeData {
  label: string;
  value: string;
  children?: TreeNodeData[];
}


const treeData: TreeNodeData[] = [
  {
    label: "Group title",
    value: "group",
    children: [
      {
        label: "Item1",
        value: "item",
        children: [
          {
            label: "Item",
            value: "item",
            children: [
              {
                label: "Item",
                value: "item",
                children: [{ label: "Item", value: "item" }],
              },
            ],
          },
        ],
      },
      {
        label: "Item2",
        value: "citrus",
        children: [
          {
            label: "Item",
            value: "item",
            children: [
              { label: "Item", value: "item" },
            ],
          },
          {
            label: "Item",
            value: "item",
            children: [
              { label: "Item", value: "item" },
            ],
          },
          {
            label: "Item",
            value: "item",
            children: [
              { label: "Item", value: "item" },
            ],
          },
          {
            label: "Item",
            value: "item",
            children: [
              { label: "Item", value: "item" },
            ],
          },
          {
            label: "Item",
            value: "item",
            children: [
              { label: "Item", value: "item" },
            ],
          },
        ],
      },
    ],
  },
];


interface TreeNodeProps {
  node: TreeNodeData;
  handleSelect: (node: TreeNodeData) => void;
  expandedNodes: string[];
  setExpandedNodes: React.Dispatch<React.SetStateAction<string[]>>;
}


const TreeNode: React.FC<TreeNodeProps> = ({
  node,
  handleSelect,
  expandedNodes,
  setExpandedNodes,
}) => {
  const isExpanded = expandedNodes.includes(node.value);

  const toggleExpand = () => {
    if (isExpanded) {
      setExpandedNodes(expandedNodes.filter((id) => id !== node.value));
    } else {
      setExpandedNodes([...expandedNodes, node.value]);
    }
  };

  return (
    <div className="ml-[20px]">
      <div
      className="flex my-3 text-[#424242]"
        style={{ cursor: "pointer", alignItems: "center" }}
        onClick={toggleExpand}
      >
        {node.children && (
          <span className="mr-[6px] text-[#424242]">
            {isExpanded ? <img src={down} alt="down" /> : ">"}
          </span>
        )}
        <span onClick={() => handleSelect(node)}>{node.label}</span>
      </div>
      {isExpanded &&
        node.children &&
        node.children.map((childNode) => (
          <TreeNode
            key={childNode.value}
            node={childNode}
            handleSelect={handleSelect}
            expandedNodes={expandedNodes}
            setExpandedNodes={setExpandedNodes}
          />
        ))}
    </div>
  );
};


const TreeDropdown: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<TreeNodeData | null>(null);
  const [expandedNodes, setExpandedNodes] = useState<string[]>([]);

  const handleSelect = (node: TreeNodeData) => {
    setSelectedItem(node);
  };

  return (
    <div>
      <div className="dropdown-content mt-5">
        {treeData.map((node) => (
          <TreeNode
            key={node.value}
            node={node}
            handleSelect={handleSelect}
            expandedNodes={expandedNodes}
            setExpandedNodes={setExpandedNodes}
          />
        ))}
      </div>
    </div>
  );
};

export default TreeDropdown;
