type ImageSource = { width: number; webp: string; jpg: string };

export type ResponsiveImage = {
  /** Ordered smallest to largest. */
  sources: readonly ImageSource[];
  width: number;
  height: number;
  alt: string;
};

type PictureProps = {
  image: ResponsiveImage;
  sizes: string;
  /** Above-the-fold images load eagerly with high priority; everything else is lazy. */
  priority?: boolean;
  className?: string;
};

export function Picture({ image, sizes, priority = false, className }: PictureProps) {
  const largest = image.sources[image.sources.length - 1];
  if (!largest) return null;
  const srcSet = (format: 'webp' | 'jpg') =>
    image.sources.map((source) => `${source[format]} ${source.width}w`).join(', ');

  return (
    <picture className={className}>
      <source type="image/webp" srcSet={srcSet('webp')} sizes={sizes} />
      <img
        src={largest.jpg}
        srcSet={srcSet('jpg')}
        sizes={sizes}
        width={image.width}
        height={image.height}
        alt={image.alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding={priority ? 'sync' : 'async'}
      />
    </picture>
  );
}
