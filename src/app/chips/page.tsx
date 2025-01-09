import { Chip } from '@/0_shared/components/chip';

const Chips = () => {
  return (
    <div className="page column gap-2">
      <h1>Border radius</h1>

      <Chip color="primary" variant="fill" borderRadius="none">
        None
      </Chip>

      <Chip color="primary" variant="fill" borderRadius="small">
        Small
      </Chip>

      <Chip color="primary" variant="fill" borderRadius="medium">
        Medium
      </Chip>

      <Chip color="primary" variant="fill" borderRadius="round">
        Round
      </Chip>

      <Chip color="primary" variant="fill" borderRadius="circle">
        Circle
      </Chip>

      <h1>Variant</h1>

      <Chip color="primary" variant="fill" borderRadius="round">
        Fill
      </Chip>

      <Chip color="primary" variant="fillLight" borderRadius="round">
        FillLight
      </Chip>

      <Chip color="primary" variant="outline" borderRadius="round">
        Outline
      </Chip>

      <Chip color="primary" variant="ghost" borderRadius="round">
        Ghost
      </Chip>

      <h1>Color</h1>

      <Chip color="secondary" variant="fill" borderRadius="round">
        Fill
      </Chip>

      <Chip color="secondary" variant="fillLight" borderRadius="round">
        FillLight
      </Chip>

      <Chip color="secondary" variant="outline" borderRadius="round">
        Outline
      </Chip>

      <Chip color="secondary" variant="ghost" borderRadius="round">
        Ghost
      </Chip>

      <Chip color="default" variant="fill" borderRadius="round">
        Fill
      </Chip>

      <Chip color="default" variant="fillLight" borderRadius="round">
        FillLight
      </Chip>

      <Chip color="default" variant="outline" borderRadius="round">
        Outline
      </Chip>

      <Chip color="default" variant="ghost" borderRadius="round">
        Ghost
      </Chip>

      <h1>Size</h1>

      <Chip size="s" color="secondary" variant="fillLight" borderRadius="round">
        Chip S
      </Chip>

      <Chip size="m" color="secondary" variant="outline" borderRadius="round">
        Chip M
      </Chip>

      <Chip size="l" color="secondary" variant="ghost" borderRadius="round">
        Chip L
      </Chip>

      <Chip size="xl" color="secondary" variant="ghost" borderRadius="round">
        Chip XL
      </Chip>

      <Chip size="xxl" color="secondary" variant="ghost" borderRadius="round">
        Chip XXL
      </Chip>

      <h1>Gap</h1>

      <Chip gap="1" color="primary" variant="fillLight" borderRadius="round">
        <div>Gap</div>
        <div>1</div>
      </Chip>

      <Chip gap="2" color="primary" variant="outline" borderRadius="round">
        <div>Gap</div>
        <div>2</div>
      </Chip>

      <Chip gap="3" color="primary" variant="ghost" borderRadius="round">
        <div>Gap</div>
        <div>3</div>
      </Chip>

      <Chip gap="4" color="primary" variant="ghost" borderRadius="round">
        <div>Gap</div>
        <div>4</div>
      </Chip>

      <Chip gap="5" color="primary" variant="ghost" borderRadius="round">
        <div>Gap</div>
        <div>5</div>
      </Chip>

      <Chip gap="6" color="primary" variant="fillLight" borderRadius="round">
        <div>Gap</div>
        <div>6</div>
      </Chip>

      <Chip gap="7" color="primary" variant="outline" borderRadius="round">
        <div>Gap</div>
        <div>7</div>
      </Chip>

      <Chip gap="8" color="primary" variant="ghost" borderRadius="round">
        <div>Gap</div>
        <div>8</div>
      </Chip>

      <Chip gap="9" color="primary" variant="ghost" borderRadius="round">
        <div>Gap</div>
        <div>9</div>
      </Chip>

      <Chip gap="10" color="primary" variant="ghost" borderRadius="round">
        <div>Gap</div>
        <div>10</div>
      </Chip>
    </div>
  );
};

export default Chips;
