declare module "*.mdx" {
  import { ComponentType } from "react";
  
  interface Metadata {
    title: string;
    description: string;
    tags?: string[];
    thumbnail?: string;
    date?: string;
    slug?: string;
    url: string;
    featured_project?: boolean;
    order: number;
  }
  
  const Component: ComponentType;
  export const metadata: Metadata;
  export default Component;
}