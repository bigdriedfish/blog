import { scanDir } from "./util";

export default {
  '/': scanDir('article'),
  '/reading/': scanDir('reading'),
  '/review/': scanDir('review'),
  '/tech/': scanDir('tech')
}