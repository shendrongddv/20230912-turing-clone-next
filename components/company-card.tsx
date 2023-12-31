import Image from "next/image";

interface CompanyCardProps {
  label: string;
  media: string;
  review: string;
}

export const CompanyCard: React.FC<CompanyCardProps> = ({
  label,
  review,
  media,
}) => {
  return (
    <div className="CCC flex h-full flex-col items-center justify-between gap-8 bg-background text-center max-md:px-4 md:mx-auto md:w-4/5">
      <p className="text-base font-semibold italic text-foreground md:text-3xl">
        &quot;{review}&quot;
      </p>
      <Image
        src={`/${media}`}
        alt={label}
        width={1110}
        height={300}
        className="h-8 w-auto md:h-14"
      />
    </div>
  );
};
