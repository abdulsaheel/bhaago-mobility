// components/MinimalWrapper.tsx
import dynamic from "next/dynamic";

const Minimal3D = dynamic(() => import("./Minimal3D"), {
  ssr: false,
});

const MinimalWrapper = () => <Minimal3D />;

export default MinimalWrapper;