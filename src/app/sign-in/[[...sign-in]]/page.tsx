import { SignIn } from "@clerk/nextjs";

export default function SignInPage() { 
    return(
        <div className="h-[calc(100vhn-96px)] flex items-center justify-center">
        <SignIn />
        </div>
    )
}
