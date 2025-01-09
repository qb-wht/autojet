import { Pre } from '@/0_shared/components/pre';
import { Text } from '@/0_shared/components/text';

const json = `{
  "a": "b"
}`;

export const Texts = () => {
  return (
    <div className="page column gap-2">
      <h1>Tags</h1>

      <Text tag="p">Text p tag</Text>
      <Text tag="span">Text span tag</Text>
      <Text tag="h1">Text h1 tag</Text>
      <Text tag="h2">Text h2 tag</Text>
      <Text tag="h3">Text h3 tag</Text>
      <Text tag="h4">Text h4 tag</Text>
      <Text tag="h5">Text h5 tag</Text>
      <Text tag="h6">Text h6 tag</Text>
      <Pre>{json}</Pre>
    </div>
  );
};

export default Texts;
