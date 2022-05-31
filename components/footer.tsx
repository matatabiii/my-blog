import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
}

export default function Footer({children} : Props) {
  return (
    <>
      <footer>
        <h1>footer</h1>
        {children}
      </footer>
    </>
  )
};
