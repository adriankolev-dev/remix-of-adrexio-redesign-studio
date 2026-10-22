import { Children, Fragment, cloneElement, isValidElement, type ReactElement, type ReactNode } from "react";

/** Splits a trailing "." off the last text in a title and colours it in the accent. */
const dot = (node: ReactNode): ReactNode => {
  if (typeof node === "string") {
    if (!node.endsWith(".")) return node;
    return (
      <>
        {node.slice(0, -1)}
        <span className="text-primary">.</span>
      </>
    );
  }
  if (Array.isArray(node)) {
    const items = Children.toArray(node);
    if (items.length === 0) return node;
    return [...items.slice(0, -1), <Fragment key="dotted-last">{dot(items[items.length - 1])}</Fragment>];
  }
  if (isValidElement(node) && node.type === Fragment) {
    const el = node as ReactElement<{ children?: ReactNode }>;
    return cloneElement(el, undefined, dot(el.props.children));
  }
  return node;
};

/**
 * Colours a title's closing period in the accent, the studio's one signature mark
 * ("ПРОЕКТИ."). Works on plain strings and on fragments whose last text ends in ".".
 */
const Dotted = ({ children }: { children: ReactNode }) => <>{dot(children)}</>;

/** Plain text of a title, for picking its size. */
export const textOf = (node: ReactNode): string => {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (isValidElement(node)) return textOf((node.props as { children?: ReactNode }).children);
  return "";
};

export default Dotted;
