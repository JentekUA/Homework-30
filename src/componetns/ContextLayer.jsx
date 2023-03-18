import { useContext } from "react";
import { TestContext } from "../App";

export default function ContextLayer({ level }) {
  const val = useContext(TestContext);

  return (
    <div>
      <span level={level}>{val.val1}</span>
      <span level={level}>{val.val2}</span>
    </div>
  );
}
