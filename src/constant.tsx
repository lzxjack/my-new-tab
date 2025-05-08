import Icon from "./components/Icon";
import { baidu, bing, google } from "./components/Icon/svgs";

export const SearchTypeLocalStorageKey = "searchType";

export const SearchTypeArr = [
  {
    icon: <Icon children={google} />,
    url: "https://www.google.com/search?q=",
  },
  {
    icon: <Icon children={bing} />,
    url: "https://cn.bing.com/search?q=",
  },
  {
    icon: <Icon children={baidu} />,
    url: "https://www.baidu.com/s?wd=",
  },
];
