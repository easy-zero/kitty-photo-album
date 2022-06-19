import React, { useState, useEffect } from "react";
import { Layout, Node, Modal, Progress } from "./components";
import { getPath } from "./utils";

import callMockup from "./mockup"; // TODO: 삭제

interface IData {
  id: string;
  name: string;
  type: string;
  filePath: null | string;
  parent: null | { id: number };
}

interface Cache {
  [index: string]: {
    parentId: string;
    data: Array<any>;
  };
}

// 불러온 데이터 캐싱 메모리
const cache: Cache = {};

export default function App() {
  const [pwd, setPwd] = useState("root");
  const [data, setData] = useState<IData[]>([]);
  const [parentId, setParentId] = useState("");
  const [filePath, setFilePath] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = callMockup();
    if (fetchData) {
      setData(fetchData);
      cache.root = { parentId: "", data: fetchData };
    }
  }, []);

  const handleClickNode = (item: any) => {
    if (item.type === "FILE") {
      setIsOpen(true);
      setFilePath(item.filePath);
    } else {
      setPwd(`${pwd} - ${item.name}`);
      // 메모리 체크
      if (cache[item.id]) {
        setData(cache[item.id].data);
        setParentId(item.parent ? item.parent.id : "root");
      } else {
        const fetchData = callMockup(Number(item.id));
        setData(fetchData);
        setParentId(item.parent ? item.parent.id : "root");
        // 메모리에 캐시
        cache[item.id] = {
          parentId: item.parent ? item.parent.id : "root",
          data: fetchData,
        };
      }
    }
  };

  const handleClickPrev = () => {
    setData(cache[parentId].data);
    setParentId(cache[parentId].parentId);
    setPwd(getPath(pwd));
  };

  return (
    <>
      <Layout path={pwd} onPrevClick={handleClickPrev}>
        {data &&
          data.map((item, i) => (
            <Node
              id={item.id}
              type={item.type}
              name={item.name}
              onClick={() => handleClickNode(item)}
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
