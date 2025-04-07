import { Card, CardContent } from "./Card";

interface StatCardProps {
    icon: React.ReactNode;
    title: string;
    value: string | number;
    suffix?: string;
  }

export function StatCard({ icon, title, value, suffix = '' }: StatCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900">
          {icon}
        </div>
        <h3 className="mb-2 text-lg font-semibold text-mining-dark dark:text-mining-light">
          {title}
        </h3>
        <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">
          {value}{suffix}
        </p>
      </CardContent>
    </Card>
  );
}