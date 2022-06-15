import React, { useState, useEffect } from "react";
import { Layout, Node, Modal, Progress } from "./components";

import callMockup from "./mockup"; // TODO: 삭제

interface IData {
  id: string;
  name: string;
  type: string;
  filePath: null | string;
  parent: null | { id: number };
}

export default function App() {
  const [pwd, setPwd] = useState("root");
  const [data, setData] = useState<IData[]>([]);
  const [filePath, setFilePath] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = callMockup();
    if (fetchData) {
      setData(fetchData);
    }
  }, []);

  const onClickNode = (item: any) => {
    if (item.type === "FILE") {
      setIsOpen(true);
      setFilePath(item.filePath);
    } else {
      setPwd(`${pwd} - ${item.name}`);
      const fetchData = callMockup(Number(item.id));
      setData(fetchData);
    }
  };

  return (
    <>
      <Layout path={pwd}>
        {data &&
          data.map((item, i) => (
            <Node
              id={item.id}
              type={item.type}
              name={item.name}
              onClick={() => onClickNode(item)}
              // onClick={() => setIsOpen(true)}
              key={i}
            />
          ))}
      </Layout>
      <Modal
        type="image"
        imagePath={filePath}
        visible={isOpen}
        onConfirm={() => setIsOpen(false)}
        onClose={() => setIsOpen(false)}
      />
      <Progress visible={loading} />
    </>
  );
}
