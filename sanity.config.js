import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./app/sanity/schemaTypes";

export default defineConfig({
  name: "default",
  title: "At The Helm Studio",
  projectId: "al38srdj",
  dataset: "production",
  basePath: "/studio",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
