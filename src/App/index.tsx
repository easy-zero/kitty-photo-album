import React, { useState, useEffect } from "react";
import api from "./api";
import { Layout, Node, Modal, Progress } from "./components";
import { getPath } from "./utils";

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
    const fetchData = async () => {
      setLoading(true);
      const rootData = await api.contents_list();

      if (rootData) {
        setData(rootData);
        // 메모리에 캐시
        cache.root = { parentId: "", data: rootData };
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleClickNode = async (item: any) => {
    if (item.type === "FILE") {
      setIsOpen(true);
      setFilePath(item.filePath);
    } else {
      // 메모리 체크
      if (cache[item.id]) {
        setData(cache[item.id].data);
        setParentId(item.parent ? item.parent.id : "root");
      } else {
        setLoading(true);
        const dirData = await api.contents_list(item.id);
        if (dirData) {
          setData(dirData);
          // 메모리에 캐시
          cache[item.id] = {
            parentId: item.parent ? item.parent.id : "root",
            data: dirData,
          };

          setParentId(item.parent ? item.parent.id : "root");
          setLoading(false);
        }
      }
      setPwd(`${pwd} - ${item.name}`);
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
