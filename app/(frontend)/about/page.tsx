import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "About",
    default: "About",
  },
};
export default async function AboutPage() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  throw new Error("slfkjslfkjsdlkfjsdlfkjds");
  return <div>About Page</div>;
}
