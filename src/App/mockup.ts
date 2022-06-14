const mockupData = [
  {
    id: "1",
    name: "노란 고양이",
    type: "DIRECTORY",
    filePath: null,
    parent: null,
  },
  {
    id: "3",
    name: "까만 고양이",
    type: "DIRECTORY",
    filePath: null,
    parent: null,
  },
  {
    id: "5",
    name: "2021/04",
    type: "DIRECTORY",
    filePath: null,
    parent: {
      id: "1",
    },
  },
  {
    id: "19",
    name: "물 마시는 사진",
    type: "FILE",
    filePath: "./assets/images/sample_image.jpeg",
    parent: {
      id: "1",
    },
  },
];

export default function callMockup(nodeId?: number): any {
  if (nodeId) {
    const resp = mockupData.filter(
      (item) =>
        item.parent && item.parent.id && item.parent.id === String(nodeId)
    );
    return resp;
  } else {
    const resp = mockupData.filter((item) => item.parent === null);
    return resp;
  }
}
