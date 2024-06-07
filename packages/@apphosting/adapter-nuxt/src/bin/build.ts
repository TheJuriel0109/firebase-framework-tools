#! /usr/bin/env node

import {
  build,
  populateOutputBundleOptions,
  getConfig,
  validateOutputDirectory,
  generateOutputDirectory,
} from "../utils.js";

const cwd = process.cwd();

await build(cwd);

const { ssr: wantsBackend } = await getConfig(cwd);

const outputBundleOptions = populateOutputBundleOptions(cwd, wantsBackend);

await generateOutputDirectory(cwd, outputBundleOptions);
await validateOutputDirectory(outputBundleOptions);