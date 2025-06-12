[33mcommit 47aa605a9b0b403494731b3f069496cd3a37f8cc[m[33m ([m[1;36mHEAD[m[33m -> [m[1;32mmain[m[33m)[m
Author: Viswanath Saj <11457868+viswanathsaj@users.noreply.github.com>
Commit: Viswanath Saj <hello@viswanathsaj.com>

    Added dev origins to next.config

[1mdiff --git a/next.config.ts b/next.config.ts[m
[1mindex e9ffa30..62ff0ac 100644[m
[1m--- a/next.config.ts[m
[1m+++ b/next.config.ts[m
[36m@@ -1,7 +1,7 @@[m
 import type { NextConfig } from "next";[m
 [m
 const nextConfig: NextConfig = {[m
[31m-  /* config options here */[m
[32m+[m[32m  allowedDevOrigins: ['coder.viswanathsaj.com', '*.coder.viswanathsaj.com'],[m
 };[m
 [m
 export default nextConfig;[m
