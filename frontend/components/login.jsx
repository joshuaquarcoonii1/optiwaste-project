/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/1zNAwsnjhLc
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LoginPage() {
  return (
    (<div className="flex min-h-screen">
      <div className="flex-1">
        <img
          src="/placeholder.svg"
          alt="Garbage truck"
          className="object-cover w-full h-full" />
      </div>
      <div
        className="flex flex-col items-center justify-center w-full max-w-md p-8 space-y-8">
        <div className="flex flex-col items-center space-y-2">
          <TrashIcon className="w-12 h-12" />
          <h1 className="text-4xl font-bold">OPTIWASTE</h1>
          <p className="text-sm text-muted-foreground">ESTD 2024</p>
        </div>
        <div className="flex gap-2">
            <Button>Sign In</Button><Link
              href="/signup"
              className="inline-flex h-9 items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}>
              Sign Up
            </Link>
          </div>
        <form className="w-full space-y-4">
          <div className="space-y-2">
            <Input id="email" type="email" placeholder="E-mail" />
          </div>
          <div className="space-y-2">
            <Input id="password" type="password" placeholder="Enter your password" />
          </div>
          <Button className="w-full">Sign In</Button>
        </form>
        <div className="text-center">
          <p className="text-sm">
            Don't have an account?{" "}
            <a href="/signup" className="underline">
              Register
            </a>
          </p>
        </div>
        <Button
          variant="outline"
          className="w-full flex items-center justify-center space-x-2">
          <ChromeIcon className="w-4 h-4" />
          <span>REGISTER WITH GOOGLE</span>
        </Button>
      </div>
    </div>)
  );
}

function ChromeIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>)
  );
}


function TrashIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>)
  );
}
