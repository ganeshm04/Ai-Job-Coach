
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MoveLeft, Compass } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-background to-muted p-4">
      <Card className="max-w-md w-full p-8 space-y-6">
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Illustration */}
          <div className="relative">
            <Compass className="h-24 w-24 text-primary animate-pulse" />
          </div>

          {/* Error Content */}
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Lost in Space</h2>
            <p className="text-muted-foreground">
              The page you're looking for seems to have wandered off. Let's get you back on track.
            </p>
          </div>

          {/* Action Button */}
          <Button asChild className="mt-6 flex items-center gap-2">
            <Link href="/">
              <MoveLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </Card>
    </div>
  );
}