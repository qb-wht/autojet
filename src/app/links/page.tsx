import { Link } from '@/0_shared/components/link';

export const Links = () => {
  return (
    <div className="page column gap-2">
      <h1>Border radius</h1>

      <Link href="./links" color="primary" variant="fill" borderRadius="none">
        None
      </Link>

      <Link href="./links" color="primary" variant="fill" borderRadius="small">
        Small
      </Link>

      <Link href="./links" color="primary" variant="fill" borderRadius="medium">
        Medium
      </Link>

      <Link href="./links" color="primary" variant="fill" borderRadius="round">
        Round
      </Link>

      <Link href="./links" color="primary" variant="fill" borderRadius="circle">
        Circle
      </Link>

      <h1>Variant</h1>

      <Link href="./links" color="primary" variant="fill" borderRadius="round">
        Fill
      </Link>

      <Link href="./links" color="primary" variant="fillLight" borderRadius="round">
        FillLight
      </Link>

      <Link href="./links" color="primary" variant="outline" borderRadius="round">
        Outline
      </Link>

      <Link href="./links" color="primary" variant="ghost" borderRadius="round">
        Ghost
      </Link>

      <Link href="./links" color="primary" variant="link" borderRadius="round">
        Link
      </Link>

      <Link href="./links" color="secondary" variant="link" borderRadius="round">
        Link
      </Link>

      <Link href="./links" color="default" variant="link" borderRadius="round">
        Link
      </Link>

      <h1>Color</h1>

      <Link href="./links" color="secondary" variant="fill" borderRadius="round">
        Fill
      </Link>

      <Link href="./links" color="secondary" variant="fillLight" borderRadius="round">
        FillLight
      </Link>

      <Link href="./links" color="secondary" variant="outline" borderRadius="round">
        Outline
      </Link>

      <Link href="./links" color="secondary" variant="ghost" borderRadius="round">
        Ghost
      </Link>

      <Link href="./links" color="default" variant="fill" borderRadius="round">
        Fill
      </Link>

      <Link href="./links" color="default" variant="fillLight" borderRadius="round">
        FillLight
      </Link>

      <Link href="./links" color="default" variant="outline" borderRadius="round">
        Outline
      </Link>

      <Link href="./links" color="default" variant="ghost" borderRadius="round">
        Ghost
      </Link>

      <h1>Size</h1>

      <Link href="./links" size="s" color="secondary" variant="fillLight" borderRadius="round">
        Link S
      </Link>

      <Link href="./links" size="m" color="secondary" variant="outline" borderRadius="round">
        Link M
      </Link>

      <Link href="./links" size="l" color="secondary" variant="ghost" borderRadius="round">
        Link L
      </Link>

      <Link href="./links" size="xl" color="secondary" variant="ghost" borderRadius="round">
        Link XL
      </Link>

      <Link href="./links" size="xxl" color="secondary" variant="ghost" borderRadius="round">
        Link XXL
      </Link>

      <h1>Gap</h1>

      <Link href="./links" gap="1" color="primary" variant="fillLight" borderRadius="round">
        <div>Gap</div>
        <div>1</div>
      </Link>

      <Link href="./links" gap="2" color="primary" variant="outline" borderRadius="round">
        <div>Gap</div>
        <div>2</div>
      </Link>

      <Link href="./links" gap="3" color="primary" variant="ghost" borderRadius="round">
        <div>Gap</div>
        <div>3</div>
      </Link>

      <Link href="./links" gap="4" color="primary" variant="ghost" borderRadius="round">
        <div>Gap</div>
        <div>4</div>
      </Link>

      <Link href="./links" gap="5" color="primary" variant="ghost" borderRadius="round">
        <div>Gap</div>
        <div>5</div>
      </Link>

      <Link href="./links" gap="6" color="primary" variant="fillLight" borderRadius="round">
        <div>Gap</div>
        <div>6</div>
      </Link>

      <Link href="./links" gap="7" color="primary" variant="outline" borderRadius="round">
        <div>Gap</div>
        <div>7</div>
      </Link>

      <Link href="./links" gap="8" color="primary" variant="ghost" borderRadius="round">
        <div>Gap</div>
        <div>8</div>
      </Link>

      <Link href="./links" gap="9" color="primary" variant="ghost" borderRadius="round">
        <div>Gap</div>
        <div>9</div>
      </Link>

      <Link href="./links" gap="10" color="primary" variant="ghost" borderRadius="round">
        <div>Gap</div>
        <div>10</div>
      </Link>
    </div>
  );
};

export default Links;
