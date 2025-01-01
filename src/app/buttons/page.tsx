import s from '@/0_shared/styles/shared.module.css';
import l from '@/0_shared/styles/layout.module.css';
import { cn } from '@/0_shared/utils';
import { Button } from '@/0_shared/components/button';

export const Buttons = () => {
  return (
    <div style={{ gap: '8px' }} className={cn(s.page, l.column).build()}>
      <h1>Border radius</h1>

      <Button color="primary" variant="fill" borderRadius="none">
        None
      </Button>

      <Button color="primary" variant="fill" borderRadius="small">
        Small
      </Button>

      <Button color="primary" variant="fill" borderRadius="medium">
        Medium
      </Button>

      <Button color="primary" variant="fill" borderRadius="round">
        Round
      </Button>

      <Button color="primary" variant="fill" borderRadius="circle">
        Circle
      </Button>

      <h1>Variant</h1>

      <Button color="primary" variant="fill" borderRadius="round">
        Fill
      </Button>

      <Button color="primary" variant="fillLight" borderRadius="round">
        FillLight
      </Button>

      <Button color="primary" variant="outline" borderRadius="round">
        Outline
      </Button>

      <Button color="primary" variant="ghost" borderRadius="round">
        Ghost
      </Button>

      <h1>Color</h1>

      <Button color="secondary" variant="fill" borderRadius="round">
        Fill
      </Button>

      <Button color="secondary" variant="fillLight" borderRadius="round">
        FillLight
      </Button>

      <Button color="secondary" variant="outline" borderRadius="round">
        Outline
      </Button>

      <Button color="secondary" variant="ghost" borderRadius="round">
        Ghost
      </Button>

      <Button color="default" variant="fill" borderRadius="round">
        Fill
      </Button>

      <Button color="default" variant="fillLight" borderRadius="round">
        FillLight
      </Button>

      <Button color="default" variant="outline" borderRadius="round">
        Outline
      </Button>

      <Button color="default" variant="ghost" borderRadius="round">
        Ghost
      </Button>

      <h1>Size</h1>

      <Button size="s" color="secondary" variant="fillLight" borderRadius="round">
        Button S
      </Button>

      <Button size="m" color="secondary" variant="outline" borderRadius="round">
        Button M
      </Button>

      <Button size="l" color="secondary" variant="ghost" borderRadius="round">
        Button L
      </Button>

      <Button size="xl" color="secondary" variant="ghost" borderRadius="round">
        Button XL
      </Button>

      <Button size="xxl" color="secondary" variant="ghost" borderRadius="round">
        Button XXL
      </Button>

      <h1>Gap</h1>

      <Button gap="1" color="primary" variant="fillLight" borderRadius="round">
        <div>Gap</div>
        <div>1</div>
      </Button>

      <Button gap="2" color="primary" variant="outline" borderRadius="round">
        <div>Gap</div>
        <div>2</div>
      </Button>

      <Button gap="3" color="primary" variant="ghost" borderRadius="round">
        <div>Gap</div>
        <div>3</div>
      </Button>

      <Button gap="4" color="primary" variant="ghost" borderRadius="round">
        <div>Gap</div>
        <div>4</div>
      </Button>

      <Button gap="5" color="primary" variant="ghost" borderRadius="round">
        <div>Gap</div>
        <div>5</div>
      </Button>

      <Button gap="6" color="primary" variant="fillLight" borderRadius="round">
        <div>Gap</div>
        <div>6</div>
      </Button>

      <Button gap="7" color="primary" variant="outline" borderRadius="round">
        <div>Gap</div>
        <div>7</div>
      </Button>

      <Button gap="8" color="primary" variant="ghost" borderRadius="round">
        <div>Gap</div>
        <div>8</div>
      </Button>

      <Button gap="9" color="primary" variant="ghost" borderRadius="round">
        <div>Gap</div>
        <div>9</div>
      </Button>

      <Button gap="10" color="primary" variant="ghost" borderRadius="round">
        <div>Gap</div>
        <div>10</div>
      </Button>
    </div>
  );
};

export default Buttons;
