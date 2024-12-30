---
to: "<%= component ? `${absPath}/${h.changeCase.camel(layerName)}/ui/${h.changeCase.pascal(layerName)}.tsx` : null %>"
---
<%_ if (styles) { _%>
import s from './<%= h.changeCase.pascal(layerName) %>.module.css';
<%_ } _%>
<%_ if (props) { _%>
import {PropsOf} from '@/3_shared/types';

export type <%= h.changeCase.pascal(layerName) %>Props = {

} & PropsOf<HTMLDivElement>;
<%_ } _%>

<%_ if (props) { _%>
export const <%= h.changeCase.pascal(layerName) %> = (props: <%= h.changeCase.pascal(layerName) %>Props) => {
  return (
    <div className={s.<%= h.changeCase.camel(layerName) %>} {...props}>
      <%= h.changeCase.pascal(layerName) %>
    </div>
  );
};
<%_ } else { _%>
export const <%= h.changeCase.pascal(layerName) %> = () => {
  return (
    <div className={s.<%= h.changeCase.camel(layerName) %>}>
      <%= h.changeCase.pascal(layerName) %>
    </div>
  );
};
<%_ } _%>