// Registry型定義
type RegistryItem = {
  name: string;
  type: string;
  description: string;
  files: Array<{
    path: string;
    type: string;
  }>;
};

type Registry = RegistryItem[];

export const registry: Registry = [
  {
    name: "black-space",
    type: "registry:ui",
    description: "黒背景のスペーサーコンポーネント",
    files: [
      {
        path: "../components/BlackSpace.tsx",
        type: "registry:ui"
      }
    ]
  }
];