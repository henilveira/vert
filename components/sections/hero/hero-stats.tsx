interface Stat {
  value: string;
  label: string;
}

interface HeroStatsProps {
  stats: readonly Stat[];
}

export function HeroStats({ stats }: HeroStatsProps) {
  return (
    <div className="mt-16 flex flex-wrap justify-center gap-8 sm:gap-16">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <p className="text-3xl font-bold text-foreground sm:text-4xl">
            {stat.value}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
