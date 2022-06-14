import React, { useState, useEffect } from "react";
import { Layout, Node } from "./components";

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

  useEffect(() => {
    const fetchData = callMockup();
    if (fetchData) {
      setData(fetchData);
    }
  }, []);

  const onClickNode = (nodeId: string, nodeName: string, nodeType: string) => {
    if (nodeType === "FILE") {
    }
    setPwd(`${pwd} - ${nodeName}`);
    const fetchData = callMockup(Number(nodeId));
    setData(fetchData);
  };

  return (
    <Layout path={pwd}>
      {data &&
        data.map((item, i) => (
          <Node
            id={item.id}
            type={item.type}
            name={item.name}
            onClick={onClickNode}
            key={i}
          />
        ))}
    </Layout>
  );
}
