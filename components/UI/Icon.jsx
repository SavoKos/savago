import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: ['//at.alicdn.com/t/font_2969284_ozvyuyjxad.js'],
});

function Icon({ type, className, onClick, style, dataItems }) {
  return (
    <IconFont
      type={type}
      className={className}
      onClick={onClick}
      style={style}
      data-items={dataItems}
    />
  );
}

export default Icon;
