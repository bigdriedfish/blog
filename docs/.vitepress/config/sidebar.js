import { scanDir } from "./util";

export default {
  '/': scanDir('articles'),
  '/reading/': scanDir('reading'),
  '/review/': scanDir('review'),
  '/tech/': scanDir('tech'),
  '/english/': scanDir('english')
}