import { useContext } from "react";
import { TestContext } from "../App";

export default function Layer({ level, children }) {
  const value = useContext(TestContext);

  return (
    <div>
      <span>{level}</span>
      <div>{children}</div>
    </div>
  );
}
