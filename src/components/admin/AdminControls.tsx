import React from 'react';
import { useAuth } from '@/components/auth/AuthProvider';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { LogOut, Settings } from 'lucide-react';

export function AdminControls() {
  const { user, profile, isAdmin, signOut } = useAuth();

  if (!user) return null;

  return (
    <div className="fixed top-4 right-4 flex items-center gap-2 z-50">
      <Badge variant={isAdmin ? "default" : "secondary"}>
        {isAdmin ? "Admin" : "User"}
      </Badge>
      <span className="text-sm text-muted-foreground">
        {user.email}
      </span>
      {isAdmin && (
        <Button variant="outline" size="sm">
          <Settings className="h-4 w-4" />
        </Button>
      )}
      <Button 
        variant="outline" 
        size="sm"
        onClick={signOut}
      >
        <LogOut className="h-4 w-4" />
      </Button>
    </div>
  );
}