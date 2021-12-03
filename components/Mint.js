import React from "react";
import dynamic from "next/dynamic";
import { useFlags } from "@happykit/flags/client";
const MintSolana = dynamic(() => import("components/mint/MintSolana"), {
  ssr: false,
});

const Mint = ({}) => {
  const { flags } = useFlags();

  return <>{flags?.isPresaleLive && <MintSolana />}</>;
};

export default Mint;
