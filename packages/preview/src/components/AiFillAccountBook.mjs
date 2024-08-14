// THIS FILE IS AUTO GENERATED
import { h } from "vue";
export const AiFillAccountBook = {
  props: {
    className: String,
    color: String,
    size: { type: [String, Number], default: 24 },
  },
  data() {
    return {
      treeData: {
        tag: "svg",
        attr: { viewBox: "0 0 1024 1024" },
        child: [
          {
            tag: "path",
            attr: {
              d: "M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zM648.3 426.8l-87.7 161.1h45.7c5.5 0 10 4.5 10 10v21.3c0 5.5-4.5 10-10 10h-63.4v29.7h63.4c5.5 0 10 4.5 10 10v21.3c0 5.5-4.5 10-10 10h-63.4V752c0 5.5-4.5 10-10 10h-41.3c-5.5 0-10-4.5-10-10v-51.8h-63.1c-5.5 0-10-4.5-10-10v-21.3c0-5.5 4.5-10 10-10h63.1v-29.7h-63.1c-5.5 0-10-4.5-10-10v-21.3c0-5.5 4.5-10 10-10h45.2l-88-161.1c-2.6-4.8-.9-10.9 4-13.6 1.5-.8 3.1-1.2 4.8-1.2h46c3.8 0 7.2 2.1 8.9 5.5l72.9 144.3 73.2-144.3a10 10 0 0 1 8.9-5.5h45c5.5 0 10 4.5 10 10 .1 1.7-.3 3.3-1.1 4.8z",
            },
            child: [],
          },
        ],
      },
    };
  },
  render() {
    const { className, color, size, treeData } = this;
    const conf = {
      stroke: "currentColor",
      fill: "currentColor",
      "stroke-width": "0",
      xmlns: "http://www.w3.org/2000/svg",
    };
    const renderSvgElements = (element) => {
      return h(
        element.tag,
        {
          ...conf,
          ...element.attr,
          ...{ height: size, width: size, className, color: color },
        },
        element.child.map((child, index) => {
          if (child.child && child.child.length > 0) {
            return renderSvgElements(child);
          } else {
            return h(child.tag, { ...child.attr });
          }
        })
      );
    };
    return renderSvgElements(treeData);
  },
};
