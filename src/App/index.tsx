import React from "react";
import Image from "./constant/image";
import { Layout, Node } from "./components";

export default function App() {
  return (
    <Layout>
      <Node icon={Image.directory} name="노란고양이" />
    </Layout>
  );
}
