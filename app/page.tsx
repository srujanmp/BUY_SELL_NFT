// app/page.tsx
import SignInButton from "./components/SignInButton";
import Profile from "./components/Profile";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <Profile />
      <SignInButton />
    </div>
  );
}
