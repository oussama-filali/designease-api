'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { useAuth } from './auth-provider';
import { User, LogOut } from 'lucide-react';

export function NavHeader() {
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">DesignEase</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/templates" className="transition-colors hover:text-foreground/80 text-foreground/60">Templates</Link>
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
           {user ? (
             <div className="flex items-center gap-4">
               <span className="text-sm text-muted-foreground hidden sm:inline-block">Welcome, {user.fullName || user.email}</span>
               <Button variant="ghost" size="icon" onClick={logout} title="Logout">
                  <LogOut className="h-5 w-5" />
               </Button>
             </div>
           ) : (
             <div className="flex items-center gap-2">
               <Button variant="ghost" asChild>
                 <Link href="/auth/login">Login</Link>
               </Button>
               <Button asChild>
                 <Link href="/auth/register">Sign Up</Link>
               </Button>
             </div>
           )}
        </div>
      </div>
    </header>
  );
}
