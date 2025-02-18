import { ReactNode } from "react";

const Goal = ({ title, children }: { title: string; children: ReactNode }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
};

export { Goal };
